import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketTypeRepository from "@/repositories/ticketType-repository";

export type ticketTypeParams = {
    isRemote: boolean,
    includesHotel: boolean,
    price: number,
}

async function createTicketType(userId: number, ticketTypeRequest: ticketTypeParams) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }

  const ticketTypeData = {
    name: enrollment.name,
    isRemote: ticketTypeRequest.isRemote,
    includesHotel: ticketTypeRequest.includesHotel,
    price: ticketTypeRequest.price,
  };

  const ticketType = await ticketTypeRepository.createTicket(ticketTypeData);

  return ticketType;
}

const ticketTypeService = {
  createTicketType,
};

export default ticketTypeService;
