import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getActivities, postRegistration } from "@/controllers";

const activitiesRouter = Router();

activitiesRouter
  .all("/*", authenticateToken)
  .get("/", getActivities)
  .post("/", postRegistration);

export { activitiesRouter };
