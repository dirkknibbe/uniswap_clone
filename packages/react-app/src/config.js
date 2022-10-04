import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xab6FA0827b6b7b48E563c6Ad6c8B4B9Ff5e911a5";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/_nvWs5DZxH9gUQj-R6SCavb_igMMbn6h",
  },
};
