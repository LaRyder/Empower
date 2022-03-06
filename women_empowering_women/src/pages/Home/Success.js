import React, {useState, useEffect}from 'react';
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
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result)
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
      <div className='cards' style={{display:'flex', justifyContent:'space-evenly',width:'100%'}}>
        {items.map(item =>(
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="tech"
      />
      <CardContents>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="#ffff">
         {item.tagline}
        </Typography>
        <CardActions>
        <Learn size="small">Learn More</Learn>
      </CardActions>
      </CardContents>
     
    </Card>
    ))}
    </div>
  );
}
}

