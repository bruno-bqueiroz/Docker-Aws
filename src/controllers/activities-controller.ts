import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import activitiesService from "@/services/activities-service";

export async function getActivities(req: AuthenticatedRequest, res: Response) {
  const { day } = req.query;
  console.log(day);

  if(!day) return res.sendStatus(httpStatus.BAD_REQUEST);

  try {
    const activities = await activitiesService.getActivities(day);

    return res.status(httpStatus.OK).send(activities);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
