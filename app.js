import express from 'express';
import session from "express-session";
import "dotenv/config";
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from './modules/routes.js';
import UserRoutes from "./users/routes.js";
import AssignmentRoutes from './assignments/routes.js';

import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

const app = express();
app.use(cors({credentials: true,
    origin: process.env.FRONTEND_URL}));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
    };
    if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
    }
    app.use(session(sessionOptions));      
      
// app.use(cors());
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

Lab5(app);
Hello(app);

// Listening
app.listen(process.env.PORT || 4000);