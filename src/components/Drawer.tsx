import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AddProjectIcon, Bulb, LogoIcon } from "@static";
import { DrawerItems, PROJECTS_CONFIG } from "@seeds";
import TopBar from "./TopBar";
import Ellipse from "./generic/Ellipse";
import Image from "next/image";
import LeftArrowIcon from "@/static/svgs/leftArrow";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function CustomDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          height: "89px",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          background: "#FFF",
          paddingRight:'0!important'
        }}
      >
        <TopBar handleDrawerOpen={handleDrawerOpen} open={open} />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{ justifyContent: "start", padding: "0px 22px", height: "88px" }}
        >
          <Box display="flex" gap={"8px"}>
            <LogoIcon />
            <Typography variant="h2">Project M.</Typography>
          </Box>
          <IconButton sx={{ ml: "auto" }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <LeftArrowIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            padding: "12px 12px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {DrawerItems.map((item, index) => (
            <ListItem
              key={item.label}
              disablePadding
              sx={{
                paddingLeft: "0",
                paddingRight: "0",
                borderRadius: "6px",
                marginTop: "2px",
                ":hover": {
                  background: "rgba(80, 48, 229, 0.08)",
                },
              }}
            >
              <ListItemButton sx={{ gap: "16px", paddingLeft: "12px" }}>
                <ListItemIcon sx={{ minWidth: "8px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">{item.label}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ margin: "0 13px" }} />
        <List
          sx={{
            padding: "30px 12px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            display="flex"
            margin={"0 12px"}
            marginBottom={"8px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              variant="h6"
              fontWeight={"fontWeightBold"}
              sx={{ color: "#787486", lineHeight: "15px" }}
            >
              MY PROJECTS
            </Typography>

            <IconButton sx={{ m: 0, p: 0 }}>
              <AddProjectIcon />
            </IconButton>
          </Box>
          {PROJECTS_CONFIG.map(({ label, backgroundColor, active }, index) => (
            <ListItem
              key={label}
              disablePadding
              sx={{
                background: active ? "rgba(80, 48, 229, 0.08)" : "inherit",
                borderRadius: "6px",
                marginTop: "2px",
                ":hover": {
                  background: "rgba(80, 48, 229, 0.08)",
                },
              }}
            >
              <ListItemButton sx={{ gap: "16px", paddingLeft: "12px" }}>
                <ListItemIcon sx={{ minWidth: "8px" }}>
                  <Ellipse backgroundColor={backgroundColor as string} />
                </ListItemIcon>
                <ListItemText sx={{ paddingTop: "0" }}>
                  <Typography variant="body2">{label}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}

          <Box
            position={"relative"}
            sx={{
              background: "#efefef",
              borderRadius: "16px",
              marginTop: "40px",
              padding: "20px",
            }}
          >
            <Box
              position={"absolute"}
              sx={{
                width: "66px",
                height: "66px",
                background: "#fef9d0",
                left: "34%",
                top: "-30px",
                justifyContent: "center",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Bulb />
            </Box>

            <Box textAlign={"center"} marginTop="20px">
              <Typography variant="h4">Thoughts Time</Typography>
              <Typography variant="caption">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </Typography>
            </Box>

            <Box
              sx={{
                padding: "12px",
                background: "#FFF",
                textAlign: "center",
                marginTop: "14px",
                borderRadius: "4px",
              }}
            >
              Write a message
            </Box>
          </Box>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
