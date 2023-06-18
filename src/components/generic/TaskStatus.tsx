import { Box, Typography } from "@mui/material";

const TaskStatus = ({
  text,
  color,
  backgroundColor,
}: {
  text?: string;
  color?: string;
  backgroundColor?: string;
}) => {
  const getStatusColor = (status: string) => {
    if (status === "Completed") return "#68B266";
    return "#D8727D";
  };
  const getStatusBgColor = (status: string) => {
    if (status === "Completed") return "rgba(131, 194, 157, 0.2)";
    return "rgba(223, 168, 116, 0.2)";
  };
  return (
    <Box
      sx={{
        backgroundColor: getStatusBgColor(text as string),
        padding: "4px 6px",
        height: "23px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: getStatusColor(text as string) }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TaskStatus;
