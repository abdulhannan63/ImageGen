import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import razorpay from 'razorpay';
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(401).json({ message: 'All field are required' });
        }

        if (username.legth > 3) {
            res.status(401).json({ message: 'Username must be at least 3 characters long' });
        }
        if (password.legth < 8) {
            res.status(401).json({ message: 'Password must be at least 8 characters long' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData = { username, email, password: hashedPassword };
        const newUser = new User(userData);
        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        res.status(200).json({ success: true, token, user: { name: user.username } })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}
// login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userData = await User.findOne({ email });
        if (!userData) {
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, userData.password);
        if (isMatch) {
            const token = jwt.sign({ id: userData._id }, process.env.SECRET_KEY);

            res.status(200).json({ success: true, token, user: { name: userData.username } })
        } else {
            res.status(401).json({ success: false, message: 'required', })
        }
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

export const userCredits = async (req, res) => {
    try {
        const { _id } = req.body;
        const user = await User.findById({ _id });
        res.json({ success: true, credits: user.creditBalence, user: { name: user.username } });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}
const razorpayInstance = new razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret:RAZORPAY_KEY_SECRET
})
const paymentRazorpay = async (req,res)=>{

}