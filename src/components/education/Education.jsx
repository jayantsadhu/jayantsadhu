import { Box, Stack, Typography } from "@mui/material";
import Educard from "./Educard";
import { EDUCATION, COLORS } from "./../../userdata/configs";

const Education = () => {
  return (
    <Box
      padding={{ xs: "25px 10px", sm: "50px 10px" }}
      sx={{ backgroundColor: COLORS.CARD_SHADE }}
    >
      <Stack
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
          backgroundColor: COLORS.CARD_SHADE,
        }}
        margin={"0 auto"}
        spacing={3}
      >
        <Typography
          textAlign={"center"}
          color={COLORS.TEXT}
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
