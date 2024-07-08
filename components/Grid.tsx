import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-grid";
import { gridItems } from "@/data";

const Grid = () => {
  // if (typeof document === "undefined") return null;
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              titleClassName,
              description,
              img,
              imgClassName,
              spareImg,
              className,
            },
            i
          ) => (
            <BentoGridItem
              key={id}
              title={title}
              description={description}
              id={id}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
