import express from 'express';
import "dotenv/config";
import Hello from './hello.js';
import Lab5 from './lab5.js';
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from './modules/routes.js';
import AssignmentRoutes from './assignments/routes.js';

const app = express();
app.use(cors({credentials: true,
    origin: process.env.FRONTEND_URL}));
app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

Lab5(app);
Hello(app);

// Listening
app.listen(process.env.PORT || 4000);