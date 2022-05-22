import styled from 'styled-components';
import {Box, Card} from '@material-ui/core';

export const SmallCard = styled(Card)`
    width: 350px;
    margin-top: 25px;
    font-family: "Ubuntu", sans-serif;
    display: flex;
    flex-direction: center;
    background-color: #fff;
    border-radius: 10px;
    margin-left: 40px;
    margin-bottom: 10rem;
`;

export const StyledCard = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const StyledCardTwo = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: center;
    margin: 0 3rem 0 3rem;
`;
export const StyledCardThree = styled(Card)`
    margin: 2rem 1rem 2rem 1rem;
`;
export const StyledCardFour = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: center;
    margin: 0 10rem 0 10rem;
`;


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const SignInWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #000;
    background-size: 100% auto;
    height: 100%;
`;

export const Title1 = styled.h1`
    font-size: 70px;
    margin-top: 30px;
    color: #51EFB1;
    float: left;
    margin-top: 15rem;
    font-family: 'PT Sans', sans-serif;
    text-shadow: 2px 2px #fff;
`;

export const Title2 = styled.h1`
    font-size: 70px;
    margin-top: 30px;
    color: #fff;
    float: left;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 15rem;
`;

export const Title3 = styled.h1`
    font-size: 70px;
    margin-top: 30px;
    color: #fff;
    float: right;
    margin-top: 15rem; 
`;

export const Title4 = styled.h1`
    font-size: 40px;
    margin-bottom: 30px;
    color: #fff;
    float: right;
    margin-bottom: -0.5rem;
`;

export const Title5 = styled.h1`
    font-size: 70px;
    margin-top: 30px;
    color: #fff;
    float: right;
    margin-top: 15rem; 
`;



export const SubTitle = styled.p`
    font-size: 30px;
    // font-family: '';
    color: #fff;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const SubTitleTwo = styled.p`
    font-size: 22px;
    color: #fff;
    margin-top: 5px;
`;

export const AlcButton = styled.button`
    border-radius: 5px;
    margin-top: 30px;
    margin-left: 1rem;
    padding: 10px 100px 10px 100px;
    background-color: #51EFB1;
    margin-bottom: 5rem;
    font-size: 20px;
    font-family: 'Roboto';
`;

export const Footer = styled(Box)`
    margin-top: 6rem;
    padding-top: 20rem;
`;