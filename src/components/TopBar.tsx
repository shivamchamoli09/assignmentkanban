import {
  Toolbar,
  IconButton,
  Typography,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ArrowDown,
  Calendar,
  ChatIcon,
  Notification,
  SearchIcon,
} from "@static";
import Image from "next/image";

interface ITopBar {
  handleDrawerOpen?: () => void;
  open?: boolean;
}

const TopBar: React.FC<ITopBar> = ({ handleDrawerOpen, open }) => {
  return (
    <Toolbar>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Stack
        direction={"row"}
        sx={{
          padding: "22px",
          width: "100%",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <Box>
          <TextField
            placeholder="Search for anything..."
            sx={{
              ".MuiInputBase-root": {
                background: "#F5F5F5",
                borderRadius: "6px",
              },
            }}
            InputProps={{
              startAdornment: <SearchIcon />,
              sx: {
                height: "44px",
                fontSize: "14px",
                ".MuiInputBase-input": {
                  padding: "0 16px",
                  borderRadius: "6px",
                  color: "#787486",
                  background: "#F5F5F5",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              },
            }}
          />
        </Box>

        <IconButton sx={{ ml: "auto" }}>
          <Calendar />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <Notification />
        </IconButton>

        <Box display={"flex"} gap="16px">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Anima Agrawal</Typography>
            <Typography variant="body1" textAlign={"end"}>
              U.P, India
            </Typography>
          </Box>
          <Box>
            <img
              style={{ borderRadius: "50%" }}
              alt="avatar"
              src={"/avatar.png"}
            />
          </Box>
        </Box>
        <IconButton sx={{ p: 1 }}>
          <ArrowDown />
        </IconButton>
      </Stack>
    </Toolbar>
  );
};

export default TopBar;
