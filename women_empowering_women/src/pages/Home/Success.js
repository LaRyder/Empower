import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CardContents = styled(CardContent)`
background: rgba(16, 16, 16, 0.9);
color:#ffff;

`;

const Learn = styled(Button)`
padding:5px 10px;
background: #C96567;
border-radius: 10px;
text-transform: capitalize;
color:#ffff;

`;


export default function Success() {
  return (
      <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://bit.ly/36W7wbg"
        alt="tech"
      />
      <CardContents>
        <Typography gutterBottom variant="h5" component="div">
          My Journey into Tech
        </Typography>
        <Typography variant="body2" color="#ffff">
         You cannot understand everything, but you can understand the system
        </Typography>
        <CardActions>
        <Learn size="small">Learn More</Learn>
      </CardActions>
      </CardContents>
     
    </Card>
    </div>
  );
}


