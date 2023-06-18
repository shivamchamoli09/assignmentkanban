import { Box, Theme } from "@mui/material";

interface IEllipse {
  backgroundColor?: string;
}

const Ellipse: React.FC<IEllipse> = ({ backgroundColor }) => {
  return (
    <Box
      sx={(theme: Theme) => ({
        borderRadius: "50%",
        width: "8px",
        height: "8px",
        backgroundColor: backgroundColor ?? theme.palette.primary.main,
      })}
    ></Box>
  );
};

export default Ellipse;
