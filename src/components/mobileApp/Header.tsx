import { Box, Typography } from "@mui/material";
import React from "react";
import { ActionIconButton } from "../generic";
import { EditIcon, LinkIcon } from "@/static";
import InvitationList from "./InvitationList";

const MobileAppHeader: React.FC = () => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"16px"}>
      <Typography variant="h1">Mobile App</Typography>
      <Box id="actions" display={"flex"} gap="16px" alignItems="baseline">
        <ActionIconButton>
          <EditIcon />
        </ActionIconButton>
        <ActionIconButton>
          <LinkIcon />
        </ActionIconButton>
      </Box>

      <InvitationList />
    </Box>
  );
};

export default MobileAppHeader;
