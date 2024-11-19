import { Avatar, Box, Stack, Typography } from "@mui/material";
import { COLORS } from "./../../userdata/configs";

const Skillscard = ({ row }) => {
  return (
    <Box padding={{ sm: "10px" }}>
      <Stack direction={"row"} spacing={2}>
        <Box>
          <Avatar
            variant="rounded"
            sx={{
              width: "60px",
              height: "60px",
              backgroundColor: COLORS.TEXT,
              //   padding: "8px",
            }}
          >
            <img
              src={row.image}
              alt={row.skill}
              style={{
                objectFit: "contain",
                height: "auto",
                width: "100%",
              }}
            />
          </Avatar>
        </Box>
        <Stack padding={"5px"}>
          <Typography color={COLORS.TEXT}>{row.skill}</Typography>
          {/* <Typography>{row.usage}</Typography> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Skillscard;
