"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MobileAppHeader from "@/components/mobileApp/Header";
import MobileAppFilters from "@/components/mobileApp/Filters";
import KanbanBox from "@/components/kanban";
import {
  completedTasksData,
  onProgressTasksData,
  toDoTasksData,
} from "@/seeds/tasks.seeds";
import { Box, Grid, Stack } from "@mui/material";
import { boardContainerStyles } from "@/styles/board.styles";
import { useState } from "react";
import { ITask } from "@/components/kanban/task";

export default function Home() {
  const [todoTasks, setTodoTasks] = useState<ITask[]>([
    ...(toDoTasksData.tasks as ITask[]),
  ]);
  const [inprogressTasks, setInProgressTasks] = useState<ITask[]>([
    ...(onProgressTasksData.tasks as ITask[]),
  ]);
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([
    ...(completedTasksData.tasks as ITask[]),
  ]);

  const handleTodoTaskUpdate = (item: ITask, target?: string) => {
    setTodoTasks((prev) => prev.filter((p) => p?.id !== item.id));
    setInProgressTasks([{ ...item, type: "inprogress" }, ...inprogressTasks]);
  };

  const handleInProgressTaskUpdate = (item: ITask, target?: string) => {
    setInProgressTasks((prev) =>
      prev.filter((p) => {
        if (p?.id !== item.id) return { ...p };
      })
    );
    if (target === "todo")
      setTodoTasks([{ ...item, type: "todo" }, ...todoTasks]);
    else if (target === "completed")
      setCompletedTasks([
        { ...item, type: "completed", taskTitle: "Completed" },
        ...completedTasks,
      ]);
  };

  const handleCompletedTaskUpdate = (item: ITask, target?: string) => {
    setCompletedTasks((prev) => prev.filter((p) => p?.id !== item.id));
    if (target === "inprogress")
      setInProgressTasks([
        { ...item, type: "inprogress", taskTitle: "Low" },
        ...inprogressTasks,
      ]);
  };
  console.log(todoTasks);
  console.log(inprogressTasks);
  console.log(completedTasks);
  return (
    <Box
      sx={{ padding: "40px 25px", display: "flex", flexDirection: "column" }}
      gap={"40px"}
    >
      <MobileAppHeader />
      <MobileAppFilters />

      <Grid
        container
        spacing="15px"
        justifyContent={"center"}
        key={`${todoTasks?.length}${inprogressTasks?.length}${completedTasks?.length}`}
      >
        <Grid item xs={12} sm={6} md={4} sx={boardContainerStyles}>
          <KanbanBox
            {...{ ...toDoTasksData, tasks: todoTasks }}
            id="todo"
            onTaskStatusChange={handleTodoTaskUpdate}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={boardContainerStyles}>
          <KanbanBox
            {...{ ...onProgressTasksData, tasks: inprogressTasks }}
            id="inprogress"
            onTaskStatusChange={handleInProgressTaskUpdate}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4} sx={boardContainerStyles}>
          <KanbanBox
            {...{ ...completedTasksData, tasks: completedTasks }}
            id="completed"
            onTaskStatusChange={handleCompletedTaskUpdate}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
