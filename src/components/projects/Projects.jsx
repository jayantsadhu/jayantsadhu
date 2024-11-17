import { Box, Stack, Typography } from "@mui/material";
import Pjtcards from "./Pjtcards";
import { EXPERIENCES } from "./../../userdata/configs";

const Projects = () => {
  console.log(EXPERIENCES);
  return (
    <Box margin={"50px 20px"}>
      <Stack
        sx={{ width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" } }}
        margin={"0 auto"}
        spacing={3}
      >
        <Stack textAlign={"center"} color={"white"}>
          <Typography fontSize={"1.7rem"} lineHeight={0.8} fontWeight={"bold"}>
            RECENT
          </Typography>
          <Typography color="#7e8fa6" fontSize={"1.7rem"} fontWeight={"bold"}>
            PROJECTS
          </Typography>
        </Stack>
        <Stack spacing={1}>
          {EXPERIENCES.map((row) => (
            <Pjtcards row={row} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Projects;
