import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// Now adding callback support!
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    
    if (!token) {
        return next(createError(401, "You are not authenticated"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid"));
        req.user = user; // ✅ Correctly attach user
        next(); // ✅ Only after user is attached
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && (req.user.id == req.params.id || req.user.isAdmin)) {
            next();
        } else {
            return next(createError(403, "You are not authorized"));
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized"));
        }
    });
};
