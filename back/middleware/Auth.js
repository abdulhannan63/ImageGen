import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) return res.status(401).send({ message: 'Access denied. No' })
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (decoded.id) {
            console.log(req.body);
            req.body._id = decoded.id;
        } else {
            return res.status(401).send({ success: false, message: 'Access denied. No' })
        }
        next();
    } catch (error) {
        console.error(error);
        return res.status(400).send({ message: 'Invalid token' });
    }
}

export default userAuth;