import React, { useState, useEffect, useRef } from "react";

import { chevronDown } from "../assets";
import styles from "../styles";
import { useOnClickOutside } from "../utils";

const AmountIn = () => {
  return (
    <div className={styles.amountContainer}>
      <input
        placeholder="0.0"
        type="number"
        value=""
        disabled={false}
        onChange={() => {}}
        className={styles.amountInput}
      />
    </div>
  );
};

export default AmountIn;
