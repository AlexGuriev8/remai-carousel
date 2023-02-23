import { motion, AnimatePresence } from "framer-motion";

import { swipeConfidenceThreshold, swipePower, variants } from "./config";
import { Container, StyledCarousel } from "./carousel.styled";
import { ChevronLeft, ChevronRight } from "../icons";
import { useCarousel } from "./useCarousel";
import { users } from "./data";

const MyCarousel = () => {
  const { imageIndex, paginate, direction } = useCarousel();

  return (
    <Container>
      <AnimatePresence custom={direction}>
        <motion.div key={users[imageIndex].id} className="carousel">
          <StyledCarousel>
            <ChevronLeft className="left" onClick={() => paginate(1)} />
            <motion.div
              className="content"
              variants={variants}
              initial="enter"
              animate="center"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <p>{users[imageIndex].quote}</p>
              <div className="flex">
                <div className="line"></div>
                <cite>
                  <span className="content-name">{users[imageIndex].name}</span>
                  <span className="content-occupation">
                    {users[imageIndex].occupation}
                  </span>
                </cite>
              </div>
              <motion.img
                className="image"
                src={users[imageIndex].image}
                alt="avatar"
              />
            </motion.div>
            <ChevronRight className="right" onClick={() => paginate(-1)} />
          </StyledCarousel>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default MyCarousel;
