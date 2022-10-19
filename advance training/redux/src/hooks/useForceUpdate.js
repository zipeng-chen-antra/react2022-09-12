import React, { useState } from "react";

export default function useForceUpdate() {
  const [bool, toggle] = useState(true);

  return () => {
    toggle((prev) => !prev);
  };
}
