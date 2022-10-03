import Web3 from "web3";
import { useState, useEffect } from "react";
import { useConfig } from "@usedapp/core";

import { ROUTER_ADDRESS } from "../config";

export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});
};
