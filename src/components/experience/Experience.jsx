import { Box, Stack, Typography } from "@mui/material";
import Expcard from "./Expcard";
import { EXPERIENCES } from "./../../userdata/configs";

const Experience = () => {
  return (
    <Box margin={{ xs: "50px 10px 25px 10px", sm: "100px 10px 50px 10px" }}>
      <Stack
        sx={{ width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" } }}
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
          {EXPERIENCES.map((row, idx) => (
            <Expcard key={idx} row={row} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Experience;
