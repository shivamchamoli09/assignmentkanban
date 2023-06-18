import { useMemo, type CSSProperties, type FC, type ReactNode } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../../config/dnd.config";
import { Box } from "@mui/material";
import { ITask } from "../kanban/task";

const style: CSSProperties = {
  //   border: "1px dashed gray",
  //   backgroundColor: "white",
  //   padding: "0.5rem 1rem",
  //   marginRight: "1.5rem",
  //   marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};

export interface BoxProps {
  name?: string;
  children?: ReactNode;
  item?: ITask;
  onDrop?: (item: ITask, target?: string) => void;
}

interface DropResult {
  name: string;
}

export const DndBox: FC<BoxProps> = function ({
  name,
  children,
  onDrop,
  item,
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name, item },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        onDrop?.(item?.item as ITask, dropResult?.name);
      }
    },
    canDrag: (monitor) => {
      return true;
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const dragStyles = useMemo(() => {
    if (isDragging)
      return {
        opacity: 0.4,
        background: "rgba(80, 48, 229, 0.06)",
        border: "1px dashed rgba(80, 48, 229, 0.59)",
        borderRadius: "10px",
        "> div": {
          visibility: "hidden",
        },
      };
    return {};
  }, [isDragging]);

  return (
    <Box ref={drag} sx={{ ...style, ...dragStyles }} data-testid={`box`}>
      {children}
    </Box>
  );
};
