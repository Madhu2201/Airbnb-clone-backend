import User from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const signup = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ Message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = await new User({
            ...req.body,
            password: hashPassword,
        }).save();

        const generateToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        const Token = generateToken;

        res.status(200).json({ Message: "Successfully registered", Token });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
};


export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ Message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(400).json({ Message: "Invalid credentials" });
        }

        const Token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

        res.status(200).json({ Message: "Successfully logged in", Token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
};

