import type { CSSProperties, FC, ReactNode } from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../../config/dnd.config";

const style: CSSProperties = {
  //   height: "12rem",
  //   width: "12rem",
  //   marginRight: "1.5rem",
  //   marginBottom: "1.5rem",
  //   color: "white",
  //   padding: "1rem",
  //   textAlign: "center",
  //   fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  height: "100%",
};

export const Dustbin: FC<{ children?: ReactNode; id?: string }> = ({
  children,
  id,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    options: { targetId: "test" },
    drop: () => ({ name: id, targetId: "test" }),
    canDrop: (item: { name?: string }) => {
      //   console.log("item***", item.name, id);
      if (item.name === "todo" && id === "completed") return false;
      if (item.name === "completed" && id === "todo") return false;
      return true;
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop} style={{ ...style, width: "100%" }} data-testid="dustbin">
      {/* {isActive ? "Release to drop" : "Drag a box here"} */}
      {children}
    </div>
  );
};
