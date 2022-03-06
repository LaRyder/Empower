import React from 'react';
import { ExternalLink } from 'react-external-link';
import styled from '@emotion/styled';


const Image = styled.img`
width: 375px;
height: 200px;
padding:20px;
`;
const Div = styled.div`
width:40%;
background: #c4c4c4;
text-align:center;
margin:2%;
padding:20px;
`;
export default function Peer(){
    return(
        <Div>
            <h1 style={{color:'black'}}>Peer Groups</h1>
            <Image src="https://bit.ly/3CictH6" alt="adc" />
            <ExternalLink href="https://www.meetup.com/microsoft-africa-development-center/" style={{textDecoration:'none', color:'black'}}><h5>Microsoft ADC</h5> </ExternalLink>
            <Image src="https://bit.ly/3sUQumJ" alt="js" />
            <ExternalLink href="https://www.meetup.com/nairobi-js/" style={{textDecoration:'none', color:'black'}}><h5>Nairobi JavaScript Community</h5> </ExternalLink> 
            <Image src="https://bit.ly/3Ko9Fey" alt="gdg" />
            <ExternalLink href="https://www.meetup.com/GDG-Cloud-Nairobi/" style={{textDecoration:'none', color:'black'}}><h5>GDG Cloud Nairobi</h5> </ExternalLink> 
        </Div>
    )
}