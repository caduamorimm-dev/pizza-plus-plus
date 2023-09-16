import { Box } from "@mui/material";
import localizacaoText from "../Images/Logos/localizacaoText.svg";
import endereco from "../Images/Logos/endereco.svg";


export const Location = () =>{
  return(
    <Box>
      <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"20px", mb:"15px"}}>
        <img src={localizacaoText} style={{ height: "3vw" }} alt="programação" />
        <img src={endereco} style={{ height: "2vw" }} alt="programação" />
      </Box>

      <Box >
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4467340823894!2d-46.98567122573199!3d-18.95586810871346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afba74ff70c3e3%3A0x7b2527babae1ca65!2sAv.%20L%C3%ADria%20Terezinha%20Lassi%20Capuano%2C%20255%20-%20Ch%C3%A1cara%20das%20Rosas%2C%20Patroc%C3%ADnio%20-%20MG%2C%2038740-000!5e0!3m2!1spt-BR!2sbr!4v1692453134856!5m2!1spt-BR!2sbr"
          width="100%"
          height="300vh"         
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};