import React from "react";
import BoxHeader, { IBoxHeader } from "./header";
import { Box, Grid, Stack } from "@mui/material";
import {
  BoardContainerStyles,
  boardContainerStyles,
} from "@/styles/board.styles";
import Task, { ITask } from "./task";
import Dnd from "../dnd";
import { Dustbin } from "../dnd/Dustbin";
import { DndBox } from "../dnd/Box";

export interface IKanban extends IBoxHeader {
  tasks?: Array<ITask>;
  id?: string;
  onTaskStatusChange?: (data: ITask, target?: string) => void;
}

const KanbanBox: React.FC<IKanban> = (props) => {
  const handleDropTask = (item: ITask, target?: string) => {
    if (item.type === target) return;
    props?.onTaskStatusChange?.(item, target);
  };

  return (
    <Box sx={BoardContainerStyles}>
      <BoxHeader {...props} count={props?.tasks?.length} />
      <Dnd>
        <Dustbin id={props?.id}>
          {props?.tasks?.map((task, i: number) => (
            <DndBox
              key={i}
              name={task.type}
              item={task}
              onDrop={handleDropTask}
            >
              <Task {...task} />
            </DndBox>
          ))}
        </Dustbin>
      </Dnd>
    </Box>
  );
};

export default KanbanBox;
