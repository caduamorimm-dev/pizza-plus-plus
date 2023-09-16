import { Typography, Box } from "@mui/material";
import { InstagramIcon } from "./Icons/InstagramIcon";
import { Discord } from "./Icons/Discord";
import { Youtube } from "./Icons/Youtube";
import React, { useState } from "react";

export const Footer = () => {
  const [isInstagramIconHovered, setIsInstagramIconHovered] = useState(false);
  const [isLinkedinIconHovered, setIsLinkedinIconHovered] = useState(false);
  const [isTiktokIconHovered, setTiktokIconHovered] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        height: "12vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pl: "30px",
        pr: "40px",
      }}
    >
      <Box>
        <Typography color={"white"}>© 2023 PETi Conexão Patrocínio</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "5vw",
          alignItems: "flex-end",
        }}
      >
        <Box
          onMouseEnter={() => setIsInstagramIconHovered(true)}
          onMouseLeave={() => setIsInstagramIconHovered(false)}
        >
          <a
            href="https://instagram.com/peticonexao?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              size="30"
              color={isInstagramIconHovered ? "#E4405F" : "white"}
            />
          </a>
        </Box>

        <Box
          onMouseEnter={() => setIsLinkedinIconHovered(true)}
          onMouseLeave={() => setIsLinkedinIconHovered(false)}
        >
          <a
            href="https://discord.gg/nbGVgxGR5X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord
              size="30"
              color={isLinkedinIconHovered ? "#5865F2" : "white"}
            />
          </a>
        </Box>

        <Box
          onMouseEnter={() => setTiktokIconHovered(true)}
          onMouseLeave={() => setTiktokIconHovered(false)}
        >
          <a
            href="https://www.youtube.com/@peticonexaopatrocinio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube
              size="30"
              color={isTiktokIconHovered ? "#FF0000" : "white"}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
