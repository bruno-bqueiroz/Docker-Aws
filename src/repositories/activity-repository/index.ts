import { prisma } from "@/config";
import { Registration } from "@prisma/client";
import { createClient } from "redis";

async function findActivities(day: string) {
  try {
    const redisClient = createClient({
      url: "redis://redis:6379"
    });
    await redisClient.connect();
    const activity = await redisClient.get(day);

    if(activity === null) {
      console.log("não achou no Redis");

      const newActivity = await prisma.activity.findMany({
        where: { day: day },
        include: {
          Registration: true,
          _count: true
        },
      });
      console.log("inserindo no Redis");
      const superNewActive = JSON.stringify(newActivity);
      await redisClient.set(day, superNewActive);
      return newActivity;
    }

    console.log("achou no Redis");
    return activity;
  } catch (error) {
    console.log(error);
  }
}

async function postRegistration(activitiesIds: Array<number>, userId: number) {
  return prisma.registration.createMany({
    data: activitiesIds.map((id) => {
      return { activityId: id, userId: userId } as unknown as CreateRegistrationParams;
    }),
  });
}

type CreateRegistrationParams = Omit<Registration, "id" | "createdAt" | "updatedAt">;

const activityRepository = {
  findActivities,
  postRegistration,
};

export default activityRepository;
