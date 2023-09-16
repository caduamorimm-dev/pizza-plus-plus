import { Typography, Box } from "@mui/material";
import Button from '@mui/material/Button';
import Logo from '../Images/Logos/Logo.png'
import TextoMaratona from '../Images/Logos/TextoMaratona.png';
import Frase from '../Images/Logos/Frase.svg';

export const Home = () => {
  const handleFormClick = () => {
    window.open('https://forms.gle/qzJJvizofVGJGsE99', '_blank');
  };
  
  return(
    <Box  sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}} >
      <Box marginTop={15}>
        <img src={Logo} style={{ width: "60vw" }} alt='' />
      </Box>
      <Box>
        <img src={TextoMaratona} style={{ width: "60vw" }} alt='' />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "3vw", mt: "5vw" }}>
        <img src={Frase} style={{ width: "70vw" }} alt='' />

        <Button sx={{
          border: "1px solid #FFEEDE",
          borderRadius: "30px",
          width:"10vw",
        }} onClick={() => handleFormClick()}>
          <Typography variant="body1" sx={{ color: "white",  '&:hover': {
            color: 'black',
          }, fontSize:'1vw'}}>
            Inscreva-se
          </Typography>
        </Button>
      </Box>
      <Box> 
        <Box>
        </Box>   
    </Box>
  </Box>


  );
};