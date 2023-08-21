import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item sx={{height: 650,m: 5}}>
            <Box sx={{ textAlign: 'center',textTransform: 'capitalize',fontWeight: 'medium',fontSize: 20 }}>
        <h1>Discover our Benefits</h1>
        <h1 style={{fontSize: "30px",fontWeight: "400"}}>Elevate your Financial experience with RWFA Dapp - Decentralized power meets security, offering cross-border transactions and smart contract capabilities for a future forward journey</h1>
      </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}