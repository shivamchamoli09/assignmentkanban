import { ReactNode } from "react";
import { Select, FormControl, SelectProps, Box } from "@mui/material";
import FilterIcon from "@/static/svgs/filter";
import { ArrowDown } from "@/static";
import { ActionContainerStyles } from "@/styles";

export default function CustomSelect({
  children,
  selectProps,
}: {
  children?: ReactNode;
  selectProps?: SelectProps;
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        startAdornment={
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              width: "16px",
              height: "16px",
            }}
          >
            <FilterIcon />
          </Box>
        }
        endAdornment={
          <Box
            sx={{
              pointerEvents: "none",
              alignItems: "center",
              display: "flex",
              width: "16px",
              height: "16px",
            }}
          >
            <ArrowDown />
          </Box>
        }
        id="filter"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          ...ActionContainerStyles,
          ".MuiSelect-select": {
            fontSize: "16px",
            paddingLeft: "6px",
            color: "#787486",
          },
          ".MuiSvgIcon-root": { display: "none" },
        }}
        {...selectProps}
      >
        {children}
      </Select>
    </FormControl>
  );
}
