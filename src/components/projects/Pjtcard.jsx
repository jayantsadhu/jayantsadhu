import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Pjtcard = ({ row }) => {
  return (
    <Paper sx={{ backgroundColor: "#111927", borderRadius: "16px" }}>
      <Box>
        <Button
          href="#"
          sx={{
            textTransform: "none",
            fontWeight: "normal",
            width: "100%",
          }}
        >
          <Box padding={"20px"}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2 }}
            >
              <Box>
                <img
                  src={row.image}
                  alt="food curves"
                  style={{
                    maxWidth: "100px",
                    height: "auto",
                  }}
                />
              </Box>
              <Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography fontWeight={"bold"}>{row.projectName}</Typography>
                  <CallMadeIcon />
                </Stack>
                <Typography
                  color="#a0aec0"
                  sx={{
                    display: "block",
                    width: "100%",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {row.projectDescription}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Button>
      </Box>
    </Paper>
  );
};

export default Pjtcard;
