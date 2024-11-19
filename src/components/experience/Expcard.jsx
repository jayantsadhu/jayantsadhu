import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { COLORS } from "../../configs";

const Expcard = ({ row }) => {
  return (
    <Paper sx={{ backgroundColor: COLORS.CARD_SHADE, borderRadius: "16px" }}>
      <Box>
        <Button
          href={row.link}
          target="_blank"
          sx={{
            textTransform: "none",
            fontWeight: "normal",
            width: "100%",
          }}
        >
          <Box padding={"20px"}>
            <Stack color={COLORS.TEXT}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  {row.title}
                </Typography>
                <CallMadeIcon />
              </Stack>
              <Typography color={COLORS.PUPLE_HIGHLIGHT}>
                {row.designation}
              </Typography>
              <Typography marginTop={"10px"} color={COLORS.TEXT_SHADE}>
                {row.description}
              </Typography>
              <Typography marginTop={"10px"} color={COLORS.TEXT_SHADE}>
                {row.dates}
              </Typography>
            </Stack>
          </Box>
        </Button>
      </Box>
    </Paper>
  );
};

export default Expcard;
