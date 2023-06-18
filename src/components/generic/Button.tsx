import { ReactNode } from "react";
import { Button, ButtonProps } from "@mui/material";
import { ActionContainerStyles } from "@/styles";

export default function CustomButton({
  children,
  btnProps,
}: {
  children: ReactNode;
  btnProps?: ButtonProps;
}) {
  return (
    <Button
      sx={{ ...ActionContainerStyles, gap: "6px", padding: "12px" }}
      {...btnProps}
    >
      {children}
    </Button>
  );
}
