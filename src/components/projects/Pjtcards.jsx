import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Pjtcards = ({ row }) => {
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
            <Stack color={"white"}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  {row.title}
                </Typography>
                <CallMadeIcon />
              </Stack>
              <Typography color="#9E77ED">{row.designation}</Typography>
              <Typography marginTop={"10px"} color="#a0aec0">
                {row.description}
              </Typography>
              <Typography marginTop={"10px"} color="#a0aec0">
                {row.dates}
              </Typography>
            </Stack>
          </Box>
        </Button>
      </Box>
    </Paper>
  );
};

export default Pjtcards;
