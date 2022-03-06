import React from 'react';
import './training.css';
import { ExternalLink } from 'react-external-link';
import { color } from '@mui/system';

export default function Training(){
    return(
        <div>
            
            <div className='all-programs'>
            <h1 style={{color:'black', textAlign:'center'}}>Training Programs</h1>
            <div className='program1'>
                <img src="https://bit.ly/3HGzrZr" alt='akirachix' className='images'/>
                <article>
                    <ExternalLink href="https://akirachix.com/" style={{textDecoration:'none', color:'black'}}> <h2>AkiraChix</h2></ExternalLink>
                    
                    <p>An NGO organization that aims at <br/>empowering young girls and women in tech</p>
                </article>
            </div>
            <div className='program1'>
                <img src="https://bit.ly/3MldxPb" alt='moringa' className='images'/>
                <article>
                    <ExternalLink href="https://moringaschool.com/" style={{textDecoration:'none', color:'black'}}> <h2>Moringa School</h2></ExternalLink>
                    
                    <p>Offers an intense tech education program <br/> tailored at produce market ready engineers</p>
                </article>
            </div>
            <div className='program1'>
                <img src="https://bit.ly/3MrVCGr" alt='jenga' className='images'/>
                <article>
                    <ExternalLink href="https://jengaschool.com/" style={{textDecoration:'none', color:'black'}}> <h2>Jenga School</h2></ExternalLink>
                    
                    <p>Offers an intense tech education program <br/> tailored at produce market ready engineers</p>
                </article>
            </div>
            </div>
        </div>
    )

}