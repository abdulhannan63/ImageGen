import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(false)
    const [ShowLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const loadCreditData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/credits', {
                headers: {token}
            });
            console.log(data);
            
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message)

        }
    }
    const generateImage = async (prompt)=>{
        try {
            const {data} = await axios.post(backendUrl+'/api/image/generate-image',{prompt}
                ,{  headers: {token}}

            )
            if(data.success){
                loadCreditData();
                return data.resultImage;
            }else{
                toast.error(data.message);
                loadCreditData();
                if(data.creditBalance===0){
                    navigate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(false);

    }

    useEffect(() => {
        if (token) {
            loadCreditData();
        }
    }
        , [token])
    const value = {
        user,
        setUser,
        ShowLogin,
        setShowLogin,
        backendUrl,
        token, setToken,
        credit, setCredit
        ,loadCreditData,logout,generateImage
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;