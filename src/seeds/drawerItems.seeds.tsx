import {
  CategoryIcon,
  MembersIcon,
  MessageIcon,
  SettingsIcon,
  TasksIcon,
} from "@/static";

export const DrawerItems = [
  {
    icon: <CategoryIcon />,
    label: "Home",
  },
  {
    icon: <MessageIcon />,
    label: "Messages",
  },
  {
    icon: <TasksIcon />,
    label: "Tasks",
  },
  {
    icon: <MembersIcon />,
    label: "Members",
  },
  {
    icon: <SettingsIcon />,
    label: "Settings",
  },
];

export const PROJECTS_CONFIG = [
  {
    label: "Mobile App",
    backgroundColor: "#7AC555",
    active: true,
  },
  {
    label: "Website Redesign",
    backgroundColor: "#FFA500",
  },
  {
    label: "Design System",
    backgroundColor: "#E4CCFD",
  },
  {
    label: "Wireframes",
    backgroundColor: "#76A5EA",
  },
];
