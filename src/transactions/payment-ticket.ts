import { prisma } from "@/config";
import paymentRepository, { PaymentParams } from "@/repositories/payment-repository";
import ticketRepository from "@/repositories/ticket-repository";

async function transactionPaymentTicket(params: PaymentParams) {
  const { ticketId } = params;
  const paymentData = params;
    
  const payment = await prisma.$transaction(
    async () => {
      const payment = await paymentRepository.createPayment(ticketId, paymentData);
      await ticketRepository.ticketProcessPayment(ticketId);
      return payment;
    }
  );

  return payment;
}

export default transactionPaymentTicket;
