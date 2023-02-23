import { useCallback, useEffect, useState } from "react";
import { wrap } from "framer-motion";
import { users } from "./data";

export const useCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, users.length, page);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return { imageIndex, paginate, direction };
};
