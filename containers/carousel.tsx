import { ReactElement } from "react";
import { Variants } from "framer-motion";
import { Feature, Motion } from "components";
import { FeatureMedia } from "types";

export interface CarouselProps {
  readonly media: readonly FeatureMedia[];
}

export const CarouselContainer = ({ media }: CarouselProps): ReactElement => {
  const containerVariants: Variants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 18,
        mass: 1,
      },
    },
  };

  return (
    <Feature.Carousel.Container>
      <Motion.MotionBox variants={containerVariants}>
        <Feature.Carousel.Carousel>
          {media.map((mediaItem, idx) => (
            <Feature.Carousel.Image mediaItem={mediaItem} idx={idx} key={idx} />
          ))}
        </Feature.Carousel.Carousel>
      </Motion.MotionBox>
    </Feature.Carousel.Container>
  );
};
