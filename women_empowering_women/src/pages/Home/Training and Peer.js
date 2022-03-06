import React from 'react';
import Training from './Training';
import './training-and-peer.css'
import Peer from './Peer';
import styled from '@emotion/styled';

const Div = styled.div`
display:flex;
justify-content:space-around;
`

export default function TrainingPeer(){
    return(
        <Div className='training-peer'>
            <Training/>
            <Peer/>

        </Div>
    )
}