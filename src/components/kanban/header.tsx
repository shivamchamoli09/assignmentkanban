import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Ellipse from "../generic/Ellipse";
import { InviteIcon } from "@static";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

export interface IBoxHeader {
  title?: string;
  count?: number;
  primaryColor?: string;
  lineColor?: string;
  allowAction?: true;
}

const BoxHeader: React.FC<IBoxHeader> = ({
  title,
  count,
  primaryColor,
  lineColor,
  allowAction = false,
}) => {
  return (
    <>
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <Ellipse backgroundColor={primaryColor} />
        <Typography variant="h4">{title}</Typography>
        <Box
          sx={{
            width: "20px",
            height: "20px",
            background: "#E0E0E0",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="caption" sx={{ color: "#625F6D" }}>
            {count}
          </Typography>
        </Box>

        {allowAction && (
          <Box
            ml="auto"
            display="flex"
            flexDirection="column"
            position={"relative"}
          >
            <MoreHorizOutlinedIcon
              sx={{
                width: "14px",
                height: "14px",
                color: "#787486",
                position: "absolute",
                top: "-15px",
              }}
            />
            <InviteIcon />
          </Box>
        )}
      </Box>
      <Divider
        sx={{
          background: primaryColor,
          border: `3px solid ${lineColor || primaryColor || "#5030E5"}`,
        }}
      />
    </>
  );
};

export default BoxHeader;
