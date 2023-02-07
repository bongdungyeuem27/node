import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect(
    "0x0165878A594ca255338adfa4d48449f69242Eb8F",
    provider
  );
};
