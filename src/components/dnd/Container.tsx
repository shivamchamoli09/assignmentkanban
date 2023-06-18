import type { FC } from "react";
import { memo } from "react";

import { DndBox } from "./Box";
import { Dustbin } from "./Dustbin";

export const Container: FC = memo(function Container() {
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Dustbin />
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <DndBox name="Glass" />
        <DndBox name="Banana" />
        <DndBox name="Paper" />
      </div>
    </div>
  );
});
