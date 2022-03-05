import styled from 'styled-components';

export const StyledNavigation = styled.nav`
    width: 100%;
    background-color: ${props => props.top ? 'inherit' : props.theme.mint};
    z-index: 1;
    position: fixed;
    transition: padding 0.3s ease-in-out;
    .nav-cont {
        margin: 0 auto;
        padding: ${props => props.top ? '6rem 0' : '1rem 0'};
        transition: padding 0.3s ease-in-out;
        max-width: 900px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 950px) {
            padding: 2rem 3rem 2rem 2rem;
        }
        @media (max-width: 400px) {
            padding: 2rem 1rem 2rem 2rem;
        }
        .title {
            display: flex;
            height: 100%;
            align-items: center;
            transition: opacity 0.2s ease-in-out;
            
            h1 {
                font-size: 2.2rem;
                margin-left: 1rem;
                transition: color 0.2s ease-in-out;
            :hover {
                color: ${props => props.theme.yellow};
                transition: color 0.2s ease-in-out;
            }
                @media (max-width: 600px) {
                    display: none;
                }
            }
            }
            nav {
                width: 45%;
                height: 2rem;
                display: flex;
                justify-content: space-evenly;
                align-items: baseline;
                @media (max-width: 600px) {
                    width: 80%;
                }
                a {
                    font-size: 1.4rem;
                    margin-top: 0.3rem;
                    transition: color 0.2s ease-in-out;
                    :hover {
                        color: ${props => props.theme.yellow};
                        transition: color 0.2s ease-in-out;
                    }
                }
                .img-cont {
        width: 1.2rem;
        transition: opacity 0.2s ease-in-out;
        cursor: pointer;
        :hover {
          opacity: 0.7;
          transition: opacity 0.2s ease-in-out;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      }
            }
        }
    `;

    export const StyledSpacer = styled.div`
    width: 100%;
        height: 15rem;
    @media (max-width: 950px) {
        height: 10rem;
    }
    `;