import { notFoundError } from "@/errors";
import activityRepository from "@/repositories/activity-repository";

async function getActivities(day: string) {
  try {
    const activities = await activityRepository.findActivities(day);
    return activities;
  } catch (err) {
    throw notFoundError();
  }
}

const activitiesService = {
  getActivities
};

export default activitiesService;
