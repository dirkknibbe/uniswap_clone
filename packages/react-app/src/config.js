import { Goerli } from "@usedapp/core";

const REACT_APP_ALCHEMY_URL = process.env.REACT_APP_ALCHEMY_URL;

export const ROUTER_ADDRESS = "0xab6FA0827b6b7b48E563c6Ad6c8B4B9Ff5e911a5";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: `${REACT_APP_ALCHEMY_URL}`,
  },
};
