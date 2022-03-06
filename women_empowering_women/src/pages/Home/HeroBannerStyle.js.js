import styled from 'styled-components'
import lauren from '../../images/lauren.jpg';
import Brenda from '../../images/Brenda.jpeg';

export const HeroBanner = styled.div`
width: 100%;
height: 480px;
background: url(${lauren});
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
