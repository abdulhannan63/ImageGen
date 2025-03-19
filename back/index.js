import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { connectdb } from './config/db.js';
import userRoute from './router/user.route.js';
import imageRouter from './router/image.route.js';

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173"
    }

));
await connectdb()

// routes
app.use('/api/', userRoute);
app.use('/api/image', imageRouter);

app.get('/', (req, res) => {
    res.send('Server is running')
}
)
app.listen(process.env.PORT || 5000, () => {

    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})