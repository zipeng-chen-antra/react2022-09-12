import { useEffect, useState } from "react";

export function withLoader(InnerComponent) {
  return function OuterComponent({loading, ...props}) {
    const loadingMessage = (
      <div>
        still loading...
      </div>
    );

    if(loading) return loadingMessage
    return (
      <InnerComponent
        {...props}
      />
    );
  };
}
