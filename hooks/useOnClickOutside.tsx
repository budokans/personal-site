import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  node: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (node && node.current && node.current.contains(target)) {
      return;
    }
    callback();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
};
