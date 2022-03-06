import styled from 'styled-components'
import lauren from '../../images/lauren.jpg';
import Brenda from '../../images/Brenda.jpeg';
import Synthia from '../../images/Synthia.jpeg'

export const HeroLauren = styled.div`
width: 100%;
height: 480px;
margin-left: 20px;
margin-right: 20px;
background: url(${lauren});
background-size: contain;
display: flex;
@media(max-width: 800px) {
    justify-content: center;
    align-items: center;
}
.heroText {
    text-align: left;
    color: red;
    font-size: 12rem;
    margin-top: 18rem;
    @media(max-width: 800px) {
        margin: 0;
        font-size: 6rem;
    }
    .bottonRow {
        color: blue;
        @media(max-width: 800px){
            font-size: 4.5rem;
            margin-top: 3rem;
        }
    }
}
`
export const HeroBrenda = styled.div`
width: 100%;
height: 480px;
background: url(${Brenda});
background-size: cover;
display: flex;
flex-direction: row-reverse;
@media(max-width: 800px) {
    justify-content: center;
    align-items: center;
}
.heroText {
    text-align: center;
    color: black;
    font-size: 6rem;
    margin: 13rem 13rem;
    @media(max-width: 800px) {
        margin: 0;
        font-size: 6rem;
    }
    .bottonRow {
        @media(max-width: 800px){
            font-size: 4.5rem;
            margin-top: 3rem;
        }
    }
}
`
export const HeroSynthia = styled.div`
width: 100%;
height: 480px;
background: url(${Synthia});
background-size: 465px 480px;
display: flex;
flex-direction: row-reverse;
@media(max-width: 800px) {
    justify-content: center;
    align-items: center;
}
.heroText {
    text-align: center;
    color: black;
    font-size: 6rem;
    margin: 13rem 13rem;
    @media(max-width: 800px) {
        margin: 0;
        font-size: 6rem;
    }
    .bottonRow {
        @media(max-width: 800px){
            font-size: 4.5rem;
            margin-top: 3rem;
        }
    }
}
`
export const ImageDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const Share = styled.div`
padding: 10px 20px;
margin-top: 410px;
margin-bottom: 20px;
margin-right: 20px;
background: #C96567;
border-radius: 10px;
text-transform: capitalize;
color:#ffff;
font-weight: 800;

`
