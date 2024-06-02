import { ethers } from "ethers";
import ENSContractABI from "./ABI/ENSContractABI.json";
import ModaContractABI from "./ABI/ModaContractABI.json";
import IERC20ABI from "./ABI/IERC20ABI.json";
import SalaryABI from "./ABI/SalaryABI.json";
import SubscriptionABI from "./ABI/SubscriptionABI.json";

export const getENSContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_ENS_CONTRACT_ADDRESS,
    ENSContractABI,
    providerOrSigner
  );
};

export const getModalContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_MODA_CONTRACT_ADDRESS,
    ModaContractABI,
    providerOrSigner
  );
};

export const getOPTokenContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_OP_TOKEN_ADDRESS,
    IERC20ABI,
    providerOrSigner
  );
};

export const getSalaryStreamContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_SALARY_STREAMING_ADDRESS,
    SalaryABI,
    providerOrSigner
  );
};

export const getSubscriptionContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
    SubscriptionABI,
    providerOrSigner
  );
};
