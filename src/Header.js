import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Iconballoons from "./Iconballoons.svg";

import { FcMenu } from "react-icons/fc";

export const Header = () => {
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  const updateRatio = () => {
    setRatio(window.innerWidth / window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateRatio);
    return () => {
      window.removeEventListener("resize", updateRatio);
    };
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      sx={{
        height: "60px",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: ratio.toFixed(1) <= 1.2 ? "initial" : "center",
        position: "fixed",
        zIndex: 1,

        background:
          ratio.toFixed(1) > 1.2
            ? "linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))"
            : undefined,
        backdropFilter: ratio.toFixed(1) > 1.2 ? "blur(10px)" : undefined,
        borderBottomLeftRadius: ratio.toFixed(1) > 1.2 ? "8px" : undefined,
        borderBottomRightRadius: ratio.toFixed(1) > 1.2 ? "8px" : undefined,
      }}
    >
      {ratio.toFixed(1) > 1.2 && (
        <Box
          sx={{ mt: "10px", display: "flex", gap: "50px", color: "#A8A8A8" }}
        >
          <Box>
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "home")}
              style={{ textDecoration: "none" }}
            >
              <img
                src={Iconballoons}
                style={{ width: "30px" }}
                alt="iconBallon"
              />
            </a>
          </Box>

          <Box>
            <Typography
              style={{ cursor: "pointer" }}
              variant="body1"
              fontFamily={"inherit"}
              fontSize={"20px"}
              className="no-decoration"
              sx={{
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="#home"
                onClick={(e) => handleNavLinkClick(e, "home")}
                onMouseOver={(e) => (e.target.style.color = "white")}
                onMouseOut={(e) => (e.target.style.color = "grey")}
              >
                INICIO
              </a>
            </Typography>
          </Box>

          <Box>
            <Typography
              style={{ cursor: "pointer", color: "grey" }}
              variant="body1"
              fontFamily={"inherit"}
              fontSize={"20px"}
            >
              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="https://forms.gle/StVN35VGAt73f2JL7"
                target="_bank"
                rel="noopener noreferrer"
                onMouseOver={(e) => (e.target.style.color = "white")}
                onMouseOut={(e) => (e.target.style.color = "grey")}
              >
                INSCRIÇÃO
              </a>
            </Typography>
          </Box>

          {/* <Box>
            <Typography
              style={{ cursor: "pointer" }}
              variant="body1"
              fontFamily={"inherit"}
              fontSize={"20px"}
              sx={{
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <a
                href="#sponsor"
                onClick={(e) => handleNavLinkClick(e, "sponsor")}
              >
                PATROCINADORES
              </a>
            </Typography>
          </Box> */}

          <Box>
            <Typography
              style={{ cursor: "pointer" }}
              variant="body1"
              fontFamily={"inherit"}
              fontSize={"20px"}
            >
              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="#location"
                onMouseOver={(e) => (e.target.style.color = "white")}
                onMouseOut={(e) => (e.target.style.color = "grey")}
                onClick={(e) => handleNavLinkClick(e, "location")}
              >
                LOCALIZAÇÃO
              </a>
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body1"
              style={{ cursor: "pointer" }}
              fontFamily={"inherit"}
              fontSize={"20px"}
            >
              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="#footer"
                onMouseOver={(e) => (e.target.style.color = "white")}
                onMouseOut={(e) => (e.target.style.color = "grey")}
                onClick={(e) => handleNavLinkClick(e, "schedule")}
              >
                DATAS
              </a>
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body1"
              style={{ cursor: "pointer" }}
              fontFamily={"inherit"}
              fontSize={"20px"}
            >
              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="#footer"
                onMouseOver={(e) => (e.target.style.color = "white")}
                onMouseOut={(e) => (e.target.style.color = "grey")}
                onClick={(e) => handleNavLinkClick(e, "footer")}
              >
                CONTATOS
              </a>
            </Typography>
          </Box>
        </Box>
      )}

      {ratio.toFixed(1) <= 1.2 && (
        <Box>
          <Button
            id="fade-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <FcMenu />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#00000060",
              },
            }}
          >
            <MenuItem>
              <Typography>
              <a
                style={{ textDecoration: "none", color:"white" }}
                href="#footer"
                onMouseOver={(e) => e.target.style.color = "grey"}
                onMouseOut={(e) => e.target.style.color = "white"}
                onClick={(e) => handleNavLinkClick(e, "home")}
              >
                Inicio
              </a>
              </Typography>
            </MenuItem>

            <MenuItem >
              <Typography>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://forms.gle/StVN35VGAt73f2JL7"
                target="_bank"
                rel="noopener noreferrer"
                onMouseOver={(e) => (e.target.style.color = "grey")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                Inscrição
              </a> 
              </Typography>
            </MenuItem>

            <MenuItem>
              <Typography>
              <a
                style={{ textDecoration: "none", color:"white" }}
                href="#footer"
                onMouseOver={(e) => e.target.style.color = "grey"}
                onMouseOut={(e) => e.target.style.color = "white"}
                onClick={(e) => handleNavLinkClick(e, "schedule")}
              >
                Datas
              </a>
              </Typography>
            </MenuItem>

            <MenuItem>
              <Typography>
              <a
                style={{ textDecoration: "none", color:"white" }}
                href="#footer"
                onMouseOver={(e) => e.target.style.color = "grey"}
                onMouseOut={(e) => e.target.style.color = "white"}
                onClick={(e) => handleNavLinkClick(e, "location")}
              >
                  Localização
              </a>
              </Typography>
            </MenuItem>

            <MenuItem>
              <Typography>
              <a
                style={{ textDecoration: "none", color:"white" }}
                href="#footer"
                onMouseOver={(e) => e.target.style.color = "grey"}
                onMouseOut={(e) => e.target.style.color = "white"}
                onClick={(e) => handleNavLinkClick(e, "footer")}
              >
                Contatos
              </a>
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};
