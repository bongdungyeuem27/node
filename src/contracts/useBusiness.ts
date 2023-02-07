import { ethers } from "ethers";
import { BusinessController__factory } from './../typechain/factories/controller/business/BusinessController__factory';

export const useBusiness = (provider: ethers.providers.WebSocketProvider) => {
  return BusinessController__factory.connect(
    "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
    provider
  );
};
