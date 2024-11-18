import { Box, Stack, Typography } from "@mui/material";
import Educard from "./Educard";
import { EDUCATION } from "./../../userdata/configs";

const Education = () => {
  return (
    <Box margin={{ xs: "25px 10px", sm: "50px 10px" }}>
      <Stack
        sx={{ width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" } }}
        margin={"0 auto"}
        spacing={3}
      >
        <Typography
          textAlign={"center"}
          color={"white"}
          fontSize={"1.7rem"}
          lineHeight={0.8}
          fontWeight={"bold"}
        >
          EDUCATION
        </Typography>
        {EDUCATION.map((row, idx) => (
          <Educard key={idx} row={row} />
        ))}
      </Stack>
    </Box>
  );
};

export default Education;
