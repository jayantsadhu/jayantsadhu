import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import HomeIcon from "@mui/icons-material/Home";
import jayant from "./../../jayant.jpg";

const Home = () => {
  return (
    <Box sx={{ padding: "60px 20px 100px 20px" }}>
      <Container
        sx={{
          width: "70%",
          margin: "0 auto",
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                maxWidth: "400px",
                padding: "20px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <img
                src={jayant}
                alt="Profile"
                style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                maxWidth: "450px",
                display: "grid",
                placeItems: "center",
                height: "350px",
              }}
              color={"white"}
              padding="20px"
            >
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "2rem",
                    fontFamily: "Moul, serif;",
                    fontStyle: "normal",
                  }}
                >
                  Full-Stack Java Developer
                </Typography>
                <Typography color="#a0aec0">
                  Hello, I'm{" "}
                  <span style={{ color: "#9E77ED", fontWeight: "bold" }}>
                    Jayant Kumar Sadhu
                  </span>
                  . A passionate Full-Stack Java Developer and blog writer based
                  in India📍. The will to learn runs through my veins just as
                  much as the will to share knowledge.
                </Typography>
                <Stack direction={"row"} spacing={1}>
                  <HomeIcon />
                  <Typography>Bangalore, India</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <WorkIcon />
                  <Typography>Software Engineer in Samsung</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <SchoolIcon />
                  <Typography>
                    Graduated from Jadavpur University, 2022
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <CodeIcon />
                  <Typography>LeetCode 1726</Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
