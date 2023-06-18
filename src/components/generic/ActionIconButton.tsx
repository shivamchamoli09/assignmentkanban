import { IconButton } from "@mui/material";
import { ReactNode } from "react";

export default function ActionIconButton({
  children,
  style,
}: {
  children: ReactNode;
  style?: object;
}) {
  return (
    <IconButton
      sx={{
        background: " rgba(80, 48, 229, 0.2)",
        borderRadius: "8px",
        width: "25px",
        height: "25px",
        padding: "6px",
        ...style,
      }}
    >
      {children}
    </IconButton>
  );
}
