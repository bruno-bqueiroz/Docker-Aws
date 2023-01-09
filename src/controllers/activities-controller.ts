import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import activitiesService from "@/services/activities-service";

export async function getActivities(req: AuthenticatedRequest, res: Response) {
  const { day } = req.query;
  
  if(!day) return res.sendStatus(httpStatus.BAD_REQUEST);

  try {
    const activities = await activitiesService.getActivities(day);

    return res.status(httpStatus.OK).send(activities);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postRegistration(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { activitiesIds } = req.body;

  try {
    const activities = await activitiesService.postRegistration(userId, activitiesIds);

    return res.status(httpStatus.OK).send(activities);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
