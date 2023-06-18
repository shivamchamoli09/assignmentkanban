import {
  Calendar,
  CategoryIcon,
  MemberSmall,
  MembersIcon,
  MenuIcon,
  PauseIcon,
} from "@/static";
import { Box, MenuItem, Stack } from "@mui/material";
import React from "react";
import CustomSelect from "../generic/Select";
import { CustomButton } from "../generic";

const MobileAppFilters: React.FC = () => {
  return (
    <Stack direction={"row"}>
      <CustomSelect>
        <MenuItem>Filter</MenuItem>
      </CustomSelect>

      <CustomSelect
        selectProps={{
          startAdornment: (
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                width: "16px",
                height: "16px",
              }}
            >
              <Calendar />
            </Box>
          ),
        }}
      >
        <MenuItem>Today</MenuItem>
      </CustomSelect>

      <Box display={"flex"} gap="20px" ml="auto" alignItems={"center"}>
        <CustomButton>
          <MemberSmall />
          Share
        </CustomButton>

        <Box sx={{ border: "1px solid #787486", height: "25px" }}></Box>

        <CustomButton
          btnProps={{
            color: "primary",
            sx: { background: "#5030E5", minWidth: "40px", height: "40px" },
          }}
        >
          <PauseIcon />
        </CustomButton>

        <MenuIcon />
      </Box>
    </Stack>
  );
};

export default MobileAppFilters;
