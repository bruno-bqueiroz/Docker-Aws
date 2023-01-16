import { prisma } from "@/config";
import addressRepository, { CreateAddressParams } from "@/repositories/address-repository";
import enrollmentRepository, { CreateEnrollmentParams } from "@/repositories/enrollment-repository";
import { exclude } from "@/utils/prisma-utils";

async function transactionAddressEnrollment(params: AddressEnrollmentParams) {
  const { userId, enrollment, address } = params;

  await prisma.$transaction(
    async () => {
      const newEnrollment = await enrollmentRepository.upsert(userId, enrollment, exclude(enrollment, "userId"));
      await addressRepository.upsert(newEnrollment.id, address, address);
    }
  );
}

export default transactionAddressEnrollment;

export type AddressEnrollmentParams = {
    userId: number,
    enrollment: CreateEnrollmentParams,
    address: CreateAddressParams
};
