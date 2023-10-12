import { RefObject, useCallback, useEffect } from "react";

export const useOnClickOutside = (
  node: RefObject<HTMLDivElement>,
  callback: () => void
): void => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (node.current && node.current.contains(target)) {
        return;
      }
      callback();
    },
    [callback, node]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);
};
