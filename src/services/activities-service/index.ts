import { notFoundError } from "@/errors";
import activityRepository from "@/repositories/activity-repository";

async function getActivities() {
  try {
    const activities = await activityRepository.findActivities();
    return activities;
  } catch (err) {
    throw notFoundError();
  }
}

const activitiesService = {
  getActivities
};

export default activitiesService;
