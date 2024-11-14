import { Box, Stack, Typography } from "@mui/material";
import Expcards from "./Expcards";
import { EXPERIENCES } from "./../../userdata/configs";

const Experience = () => {
  console.log(EXPERIENCES);
  return (
    <Box margin={"50px 20px"}>
      <Stack
        sx={{ width: { xs: "90%", md: "70%" } }}
        margin={"0 auto"}
        spacing={3}
      >
        <Stack textAlign={"center"} color={"white"}>
          <Typography fontSize={"1.7rem"} lineHeight={0.8} fontWeight={"bold"}>
            2.5 YEARS OF
          </Typography>
          <Typography color="#7e8fa6" fontSize={"1.7rem"} fontWeight={"bold"}>
            EXPERIENCE
          </Typography>
        </Stack>
        <Stack spacing={1}>
          {EXPERIENCES.map((row) => (
            <Expcards row={row} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Experience;
