import { AuthenticatedRequest } from "@/middlewares";
import ticketTypeService, { ticketTypeParams } from "@/services/ticketType-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function postTicketType(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  
  const { 
    isRemote,
    includesHotel, 
    price,
  } = req.body as ticketTypeParams;

  try {
    const ticketTypes = await ticketTypeService.createTicketType(userId, { isRemote, includesHotel, price });
    return res.status(httpStatus.CREATED).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
