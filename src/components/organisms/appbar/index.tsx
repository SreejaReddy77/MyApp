import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';


const BTAppBar = (props:any)=>{

  return (
    <AppBar position="static" sx={{'&.MuiAppBar-root': {
      backgroundColor:'#002856',
    }
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ flexGrow: 1, display: {  md: 'flex' } }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'calibri',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Real Estate Transfer Checklist
            </Typography>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default BTAppBar;
