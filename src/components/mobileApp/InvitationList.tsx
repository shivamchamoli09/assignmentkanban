import { Box, Typography, Link } from "@mui/material";
import { ActionIconButton } from "../generic";
import { InviteIcon } from "@static";
import { Avatar } from "@mui/material";
import CustomAvatarGroup from "../generic/AvatarGroup";
import { invitationImgList } from "@/seeds";

const InvitationList: React.FC = () => {
  return (
    <Box ml="auto" display={"flex"} gap="12px">
      <Link
        href={""}
        style={{ display: "flex", gap: "6px", alignItems: "center" }}
      >
        <InviteIcon />
        <Typography variant="h4" color={"primary"}>
          Invite
        </Typography>
      </Link>

      <CustomAvatarGroup>
        {invitationImgList?.map((url) => (
          <Avatar src={url} key={url} />
        ))}
      </CustomAvatarGroup>
    </Box>
  );
};

export default InvitationList;
