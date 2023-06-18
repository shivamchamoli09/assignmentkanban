import { invitationImgList } from "@/seeds";
import { MessageSmall, FileIcon } from "@/static";
import { Stack, Avatar, Box, Typography, Grid } from "@mui/material";
import React from "react";
import CustomAvatarGroup from "../generic/AvatarGroup";

const Footer: React.FC = () => {
  return (
    <Grid container alignItems={"center"} spacing={"6px"} marginTop="8px">
      <Grid item xs={12} md={5}>
        <CustomAvatarGroup
          avatarConfig={{
            max: 3,
            sx: {
              justifyContent: "start",
              ".MuiAvatar-root": {
                width: "24px",
                height: "24px",
                background: "#F4D7DA",
                color: "#D25B68",
                fontSize: "12px",
              },
            },
          }}
        >
          {invitationImgList?.map((url) => (
            <Avatar src={url} key={url} />
          ))}
        </CustomAvatarGroup>
      </Grid>

      <Grid item xs={12} md={7} gap={"6px"} display={"flex"}>
        {/* <Grid container>
          <Grid item xs={6}> */}
        <Box display={"flex"} gap="4px" alignItems={"center"}>
          <MessageSmall />
          <Typography variant="caption">10 comments</Typography>
        </Box>
        {/* </Grid>
          <Grid item xs={6}> */}
        <Box display={"flex"} gap="4px" alignItems={"center"}>
          <FileIcon />
          <Typography variant="caption">3 files</Typography>
        </Box>
        {/* </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Footer;
