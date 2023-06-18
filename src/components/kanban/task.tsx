import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import TaskStatus from "../generic/TaskStatus";
import CustomAvatarGroup from "../generic/AvatarGroup";
import { invitationImgList } from "@/seeds";
import { FileIcon, MessageSmall } from "@/static";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Footer from "./footer";
import { TaskContainerStyles } from "@/styles/board.styles";
import Image from "next/image";

export interface ITask {
  id?: string;
  taskColor?: string;
  taskTitle?: string;
  taskBgColor?: string;
  title?: string;
  caption?: string;
  type?: string;
  imageUrl?: string;
}

const Task: React.FC<ITask> = ({
  title,
  caption,
  taskColor,
  taskTitle,
  taskBgColor,
  imageUrl,
}) => {
  return (
    <Box
      padding={"20px"}
      gap="6px"
      sx={{
        ...TaskContainerStyles,
        cursor: "grab",
      }}
    >
      <Stack direction={"row"}>
        <TaskStatus
          color={taskColor}
          text={taskTitle}
          backgroundColor={taskBgColor}
        />

        <MoreHorizOutlinedIcon
          sx={{ ml: "auto", width: "16px", height: "19px", color: "#0D062D" }}
        />
      </Stack>

      <Typography variant="h3">{title}</Typography>
      <Typography variant="caption">{caption}</Typography>
      {imageUrl && <img src={imageUrl} alt="image" />}

      <Footer />
    </Box>
  );
};

export default Task;
