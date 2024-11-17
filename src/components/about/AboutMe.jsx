import { Box, Paper, Stack, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Paper>
      <Box sx={{ backgroundColor: "#111927" }} padding={"100px 20px"}>
        <Box
          sx={{ width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" } }}
          margin="0 auto"
        >
          <Stack
            color="white"
            textAlign={"center"}
            sx={{
              fontFamily: "Inter, BlinkMacSystemFont, Segoe UI",
            }}
          >
            <Box paddingBottom={"30px"}>
              <Typography
                fontSize="1.5rem"
                fontWeight={"bold"}
                lineHeight={1.5}
              >
                About Me
              </Typography>
            </Box>
            <Box>
              <Typography fontSize="1rem" fontWeight={"500"} lineHeight={2}>
                I am a Junior Full-Stack JavaScript Developer with over 6 years
                of experience in sales and 1 year of experience in programming.
                My passion for problem-solving and learning new things has led
                me to become proficient in various technologies, including
                React, Next.js, Node.js, Express.js, MongoDB, and TypeScript.
                Additionally, I am a team player who enjoys collaborating with
                cross-functional teams to create exceptional web applications.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default AboutMe;
