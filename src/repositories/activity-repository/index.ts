import { prisma } from "@/config";

async function findActivities(day: string) {
  return prisma.activity.findMany({
    where: { day: day },
    include: {
      Registration: true,
      _count: true
    },
  });
}

const activityRepository = {
  findActivities
};

export default activityRepository;
