import { prisma } from "@/config";

async function findActivities() {
  return prisma.activity.findMany();
}

const activityRepository = {
  findActivities
};

export default activityRepository;
