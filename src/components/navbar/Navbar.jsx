import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import ClearIcon from "@mui/icons-material/Clear";
import { PAGES, COLORS } from "../../configs";

const MyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: COLORS.CARD_SHADE }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleToggleMenu}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            {menuOpen ? <ClearIcon /> : <MenuIcon />}
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              textAlign: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {PAGES.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                sx={{
                  color: "#fff",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              textAlign: "right",
              fontWeight: "bold",
              color: "inherit",
              textDecoration: "none",
              ml: "auto",
            }}
          >
            JAYANT
          </Typography>
        </Toolbar>

        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              backgroundColor: COLORS.CARD_SHADE,
              padding: "1rem",
            }}
            onClick={handleCloseMenu}
          >
            {PAGES.map((page) => (
              <Typography
                key={page}
                textAlign="left"
                sx={{ padding: "0.5rem 0" }}
              >
                <a
                  href={`#${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {page}
                </a>
              </Typography>
            ))}
          </Box>
        </Collapse>
      </Container>
    </AppBar>
  );
};

export default MyNavbar;
