import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { bookingRoom, listBooking, changeBooking, listBookingWithHotel } from "@/controllers";

const bookingRouter = Router();

bookingRouter
  .all("/*", authenticateToken)
  .get("", listBooking)
  .get("/hotel", listBookingWithHotel)
  .post("", bookingRoom)
  .put("/:bookingId", changeBooking);

export { bookingRouter };
