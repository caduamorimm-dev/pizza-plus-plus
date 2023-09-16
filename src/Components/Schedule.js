import Programacao from "../Images/Logos/Programacao.svg";
import Loading from "../Images/Logos/Loading.svg";

import { Box } from "@mui/material";

export const Schedule = () => {

  return(
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", mt: "15vw", mb:"15vw", position: "relative" }}>
      <Box style={{ position: "relative" }}>
        <img src={Programacao} style={{ height: "37vw" }} alt="programação" />
        <img src={Loading} style={{ width: "40vw", position: "absolute", top: "12%", left: "50%", transform: "translateX(-50%)" }} alt="loading" />
      </Box>
      <img src={Loading} style={{ width: "40vw"}} alt="loading" />
    </Box>
  
  );
};