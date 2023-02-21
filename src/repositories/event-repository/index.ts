import { prisma } from "@/config";

async function findFirst() {
  try {
    const data = await prisma.activity.findFirst();
    const event = await prisma.event.findFirst();
    if(data === null) {
      const newData = await prisma.activity.createMany({
        data: [
          {
            name: "Atividade I",
            location: "Auditório Principal",
            seats: 30,
            date: new Date("2023-10-22 09:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-22",
          },
          {
            name: "Atividade II",
            location: "Auditório Principal",
            seats: 30,
            date: new Date("2023-10-22 11:00:00"),
            duration: 1,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-22",
          },
          {
            name: "Atividade III",
            location: "Auditório Principal",
            seats: 30,
            date: new Date("2023-10-23 09:00:00"),
            duration: 1,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-23",
          },
          {
            name: "Atividade IV",
            location: "Auditório Principal",
            seats: 30,
            date: new Date("2023-10-23 10:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-23",
          },
          {
            name: "Atividade V",
            location: "Auditório Principal",
            seats: 30,
            date: new Date("2023-10-24 09:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-24",
          },
          {
            name: "Atividade VI",
            location: "Auditório Secundário",
            seats: 30,
            date: new Date("2023-10-22 09:00:00"),
            duration: 1,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-22",
          },
          {
            name: "Atividade VII",
            location: "Auditório Secundário",
            seats: 30,
            date: new Date("2023-10-22 10:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-22",
          },
          {
            name: "Atividade VIII",
            location: "Auditório Secundário",
            seats: 30,
            date: new Date("2023-10-23 09:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-23",
          },
          {
            name: "Atividade IX",
            location: "Auditório Secundário",
            seats: 30,
            date: new Date("2023-10-24 09:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-24",
          },
          {
            name: "Atividade X",
            location: "Auditório Secundário",
            seats: 30,
            date: new Date("2023-10-24 11:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-24",
          },
          {
            name: "Atividade XI",
            location: "Sala de Workshop",
            seats: 30,
            date: new Date("2023-10-22 09:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-22",
          },
          {
            name: "Atividade XII",
            location: "Sala de Workshop",
            seats: 30,
            date: new Date("2023-10-23 09:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-23",
          },
          {
            name: "Atividade XIII",
            location: "Sala de Workshop",
            seats: 30,
            date: new Date("2023-10-23 11:00:00"),
            duration: 1,
            "updatedAt": new Date(new Date("2023-02-21 12:38:08.683")),
            day: "2023-10-23",
          },
          {
            name: "Atividade XIV",
            location: "Sala de Workshop",
            seats: 30,
            date: new Date("2023-10-24 09:00:00"),
            duration: 2,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-24",
          },
          {
            name: "Atividade XV",
            location: "Sala de Workshop",
            seats: 30,
            date: new Date("2023-10-24 11:00:00"),
            duration: 1,
            "updatedAt": new Date("2023-02-21 12:38:08.683"),
            day: "2023-10-24",
          }] });
      console.log(newData);
      return event;
    } else{
      return event;
    }
  } catch (error) {
    console.log(error);
  } 
}

const eventRepository = {
  findFirst,
};

export default eventRepository;
