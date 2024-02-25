import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from "src/config/constants"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useRouter } from "next/router";
import Image from "next/image";


interface Props {
    window?: () => Window;
}

const drawerWidth = 240


const Navbar = (props: Props): JSX.Element => {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px'}}>
            <Image src={'/favicon.ico'} alt={'logo'} width={50} height={50} />
            <Typography variant="h4" fontFamily={'cursive'}>Sammi</Typography>
            </Box>
            <CloseIcon onClick={handleDrawerToggle} sx={{cursor: 'pointer'}} />
        </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => router.push(item.route)} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return <Box height={'9vh'} sx={{display: 'flex'}}>
    <AppBar sx={{backgroundColor: '#141414', height: '9vh'}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
         <MenuIcon />
          </IconButton>
          <Box
            onClick={() => router.push('/')}
            component="div"
            sx={{ cursor: 'pointer', flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'flex-start', gap: '5px' }}
          >
            <Image src={'/favicon.ico'} alt={'logo'} width={50} height={50} />
            <Typography variant="h4" fontFamily={'cursive'}>Sammi</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={() => router.push(item.route)} key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
  </Box>
}

export default Navbar
