import { Box, Stack, Typography } from "@mui/material";
import Pjtcard from "./Pjtcard";
import { PROJECTS, COLORS } from "../../configs";

const Projects = ({ id }) => {
  return (
    <Box
      id={id}
      margin={{ xs: "25px 10px", sm: "50px 10px" }}
      sx={{
        scrollMarginTop: { xs: "400px", md: "100px" },
      }}
    >
      <Stack
        sx={{ width: { xs: "95%", sm: "90%", lg: "70%" } }}
        margin={"0 auto"}
        spacing={3}
      >
        <Stack textAlign={"center"} color={COLORS.TEXT}>
          <Typography fontSize={"1.7rem"} lineHeight={0.8} fontWeight={"bold"}>
            RECENT
          </Typography>
          <Typography
            color={COLORS.HEADING_SHADE}
            fontSize={"1.7rem"}
            fontWeight={"bold"}
          >
            PROJECTS
          </Typography>
        </Stack>
        <Stack spacing={1}>
          {PROJECTS.map((row, idx) => (
            <Pjtcard key={idx} row={row} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Projects;
