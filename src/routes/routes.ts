import express from "express";

import UserController from "../controllers/user.controller";
import HabitController from "../controllers/habit.controller";
import HabitLogController from "../controllers/habit-log.controller";

const router = express.Router();

router.post("/users", UserController.createUser); //create user

router.post("/habits", HabitController.createHabit); //create habit

router.get(
  "/habit-log/:userId/:habitId/stats",
  HabitLogController.getHabitLogs
); //list habit log

export default router;
