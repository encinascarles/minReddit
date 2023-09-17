import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import style from "./NavDrawer.module.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';

const temas = {
  Videojuegos: {icon:<VideogameAssetOutlinedIcon /> , subtemas: [
    "Valheim",
    "Genshin Impact",
    "Minecraft",
    "Pokimane",
    "Halo Infinite",
  ]},
  Deportes: {icon:<SportsBaseballOutlinedIcon /> , subtemas: [
    "Valheim",
    "Genshin Impact",
    "Minecraft",
    "Pokimane",
    "Halo Infinite",
  ]},
  Negocios: {icon:<ShowChartOutlinedIcon /> , subtemas: [
    "Valheim",
    "Genshin Impact",
    "Minecraft",
    "Pokimane",
    "Halo Infinite",
  ]},
  Crypto: {icon:<CurrencyBitcoinOutlinedIcon /> , subtemas: [
    "Valheim",
    "Genshin Impact",
    "Minecraft",
    "Pokimane",
    "Halo Infinite",
  ]},
  Television: {icon:<TvOutlinedIcon /> , subtemas: [
    "Valheim",
    "Genshin Impact",
    "Minecraft",
    "Pokimane",
    "Halo Infinite",
  ]},
  Famosos: {icon:<StarsOutlinedIcon /> , subtemas: [
    "Valheim",
    "Genshin Impact",
    "Minecraft",
    "Pokimane",
    "Halo Infinite",
  ]}
};

function NavDrawer() {
  const [open, setOpen] = React.useState("");
  
  const handleClick = (tema) => {
    if (open===tema) {
      setOpen(false)
    }
    else {
      setOpen(tema)
    }
  }

  return (
    <Container className={style.Container}>
      <List>
        {Object.keys(temas).map((text) => (
          <>
            <ListItemButton onClick={()=>handleClick(text)}>
              <ListItemIcon>{temas[text].icon}</ListItemIcon>
              <ListItemText primary={text} />
              {open===text ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open===text} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {temas[text].subtemas.map((text) => (
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Container>
  );
}

export default NavDrawer;
