import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect(
    "0x4c5859f0F772848b2D91F1D83E2Fe57935348029",
    provider
  );
};
