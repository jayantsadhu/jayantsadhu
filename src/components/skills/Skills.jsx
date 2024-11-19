import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Skillscard from "./Skillscard";
import { SKILLS, COLORS } from "../../configs";

const Skills = () => {
  return (
    <Box margin={{ xs: "25px 10px", sm: "50px 10px" }}>
      <Stack
        sx={{ width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" } }}
        margin={"0 auto"}
        spacing={3}
      >
        <Stack textAlign={"center"} color={COLORS.TEXT}>
          <Typography fontSize={"1.7rem"} lineHeight={0.8} fontWeight={"bold"}>
            TECHNICAL
          </Typography>
          <Typography
            color={COLORS.HEADING_SHADE}
            fontSize={"1.7rem"}
            fontWeight={"bold"}
          >
            SKILLS
          </Typography>
        </Stack>
        <Grid container spacing={3} width={"100%"} margin={"0 auto"}>
          {SKILLS.map((row, idx) => (
            <Grid key={idx} size={{ xs: 6, sm: 4, md: 3 }}>
              <Skillscard row={row} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Skills;
