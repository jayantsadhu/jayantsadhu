import { Avatar, Box, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Educard = ({ row }) => {
  return (
    <Box padding={{ sm: "10px" }}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 9, md: 10 }}>
          <Stack direction={"row"} spacing={2}>
            <Box>
              <Link href={row.link} target="_blank" rel="noreferrer">
                <Avatar
                  variant="rounded"
                  sx={{
                    width: { xs: "60px", sm: "100px" },
                    height: { xs: "60px", sm: "100px" },
                  }}
                >
                  <img
                    src={row.image}
                    alt={row.school}
                    style={{
                      objectFit: "contain",
                      height: "auto",
                      width: "100%",
                    }}
                  />
                </Avatar>
              </Link>
            </Box>
            <Stack padding={{ sm: "10px" }}>
              <Typography color="white" fontWeight={"bold"}>
                {row.school}
              </Typography>
              <Typography color="#a0aec0">{row.degree}</Typography>
              <Typography
                color="#a0aec0"
                sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
              >
                {row.dept}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 3, md: 2 }}
          color={"white"}
          padding={{ sm: "10px" }}
        >
          <Stack
            direction={{ xs: "row", sm: "column" }}
            spacing={{ xs: 2, sm: 0 }}
          >
            <Typography>{row.location}</Typography>
            <Typography color="#a0aec0">{row.dates}</Typography>
            <Typography>{row.grade}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Educard;
