import { ReactNode } from "react";
import AvatarGroup, { AvatarGroupProps } from "@mui/material/AvatarGroup";

export default function CustomAvatarGroup({
  children,
  avatarConfig,
}: {
  children: ReactNode;
  avatarConfig?: AvatarGroupProps;
}) {
  return (
    <AvatarGroup
      max={5}
      sx={{
        ".MuiAvatar-root": {
          width: "36px",
          height: "36px",
          background: "#F4D7DA",
          color: "#D25B68",
          fontSize: "15px",
        },
      }}
      {...avatarConfig}
    >
      {children}
    </AvatarGroup>
  );
}
