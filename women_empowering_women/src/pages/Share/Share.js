import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Share.css';
import ShareForm from "./ShareForm"
import styled from '@emotion/styled';


const Section = styled.section`
text-align:justify;
font-size:18px;
line-height:50px;
`
export default function Share () {
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
      <div className="container" >
         
          {items.map(item =>(
            <div key={item.id} style={{padding:'20px', textAlign:'center'}}>
          <h2>{item.title}</h2>
          <h4 style={{fontStyle:'italic'}}>By {item.name}</h4>
          <img src={item.image} alt='tech'style={{width:'30%'}}/>
          <Section>
            {item.body}
          </Section>
          </div>
            ))}
          {/* <ShareForm /> */}
        </div>
    );
  
}
}