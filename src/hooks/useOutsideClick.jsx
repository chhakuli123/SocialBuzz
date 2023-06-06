import { useEffect, useRef } from "react";

export const useOutsideClick = (handler) => {
  let domNode = useRef();
  let handleOutsideClick = (e) => {
    if (domNode && !domNode?.current?.contains(e.target)) handler();
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return domNode;
};
