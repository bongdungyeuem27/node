import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect(
    "0x071586BA1b380B00B793Cc336fe01106B0BFbE6D",
    provider
  );
};
