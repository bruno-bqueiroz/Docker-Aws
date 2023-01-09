import { notFoundError } from "@/errors";
import activityRepository from "@/repositories/activity-repository";

async function getActivities(day: any) {
  try {
    const activities = await activityRepository.findActivities(day);
    return activities;
  } catch (err) {
    throw notFoundError();
  }
}

async function postRegistration(userId: number, activitiesIds: Array<number>) {
  try {
    const activities = await activityRepository.postRegistration(activitiesIds, userId);
    return activities;
  } catch (err) {
    throw notFoundError();
  }
}

const activitiesService = {
  getActivities,
  postRegistration,
};

export default activitiesService;
