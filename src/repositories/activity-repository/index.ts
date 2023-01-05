import { prisma } from "@/config";

async function findActivities() {
  return prisma.activity.findMany({
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
