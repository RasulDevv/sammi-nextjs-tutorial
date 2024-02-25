import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import { format } from "date-fns"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = (): JSX.Element => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#141414', color: 'white', padding: '20px', borderTop: '1px solid rgba(255,255,255,.5)'}}>
      <Typography>{format(new Date(), 'yyyy')} Sammi. All Rights Reserved</Typography>
      <Box sx={{display: 'flex', gap: '15px'}}>
        <TelegramIcon sx={{cursor: 'pointer'}} />
        <InstagramIcon sx={{cursor: 'pointer'}} />
        <YouTubeIcon sx={{cursor: 'pointer'}} />
      </Box>
    </Box>
  )
}

export default Footer