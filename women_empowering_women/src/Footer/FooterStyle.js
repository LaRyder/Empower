import styled from 'styled-components';

export const FooterMain = styled.footer`
    font-size: 1.3rem;
    height: 100px;
    margin: 0 auto;
    display: flex;
    background-color: #314354;
    justify-content: center;
    align-items: center;
    color: white;
    .sm-icons {
        display: flex;
        margin-bottom: 1rem;
        width: 80px;
        justify-content: space-between;
        .icon {
            width: 20px;
            height: 20px;
        img {
            max-width: 10px;
            height: 10px;
            transition: filter 0.3s ease-in-out;
            :hover {
            transition: filter 0.4s ease-in-out;
            filter: blur(2px);
          }
        }
    }
`;

export const FooterDivLink = styled.div`
    margin-top: 1em;
    a {
        align-content: space-around;
        text-decoration: none;
        list-style: none;
        color:black;
        margin-right: 15px; 
    }
    @media (max-width: 770px) {
            display: flex;
            flex-direction: column;
            align-content: center;
            margin-bottom: 10px;
            a {
                margin-left: 5px;
            }
        }
`

export const StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
    button {
        border: none;
        background-color: inherit;
        color: inherit;
        cursor: pointer;
        font-size: 1.4rem;
        opacity: 0.7;
        transition: opacity 0.2s ease-in-out;
        :hover {
            transition: opacity 0.2s ease-in-out;
            opacity: 1;
        }
        :focus {
            outline: none;
        }
    }
`;