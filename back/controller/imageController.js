import axios from "axios";
import User from "../models/user.js";
import FormData from 'form-data';
import 'dotenv/config'

export const generateImage = async (req, res) => {
    try {
        const { _id, prompt } = req.body;
        const user = await User.findOne({ _id });
        console.log(user);


        if (!user || !prompt) {
            return res.status(404).json({ message: "User not found" });
        }
        // checkin for credit
        if (user.creditBalence === 0 || User.creditBalence < 0) {
            return res.status(404).json({ success: false, message: "Insufficient credit", creditBalence: user.creditBalence });
        }
        const formData = new FormData();
        formData.append('prompt', prompt);
        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',
            formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                "Content-Type": "multipart/form-data",
            },
            responseType: 'arraybuffer'
        })
        console.log(data);

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;
        // update user credit   
        await User.findByIdAndUpdate(user._id, { creditBalence: user.creditBalence - 1 });
        res.json({ success: true, message: "image generated", creditBalence: user.creditBalence - 1, resultImage });
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}