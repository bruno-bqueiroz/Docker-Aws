import { prisma } from "@/config";

async function findActivities(day: string) {
  return prisma.activity.findMany({
    where: { day: day } 
  });
}

const activityRepository = {
  findActivities
};

export default activityRepository;
