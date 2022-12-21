import { prisma } from "@/config";
import { TicketType } from "@prisma/client";

async function createTicket(ticket: CreateTicketTypeParams) {
  return prisma.ticketType.create({
    data: {
      ...ticket,
    }
  });
}

type CreateTicketTypeParams = Omit<TicketType, "id" | "createdAt" | "updatedAt">

const ticketTypeRepository = {
  createTicket,
};

export default ticketTypeRepository;
