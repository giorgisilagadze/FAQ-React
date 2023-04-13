import styled from "styled-components";
import { shadDesk, logoDesk } from "../images/images";

export const StyledContainer = styled.div`
    width: 327px;
    background-color: white;
    margin: 148px auto 0px;
    border-radius: 23px;
    padding: 0px 24px 85px;

    @media(min-width:1440px) {
        width: 920px;
        padding-top: 65px;
        display: flex;
        gap: 400px;
        background-image: url(${shadDesk}), url(${logoDesk});
        background-repeat: no-repeat;
        background-position: -580px -300px, -90px 50px;
    }

`

export const Shadow = styled.img`
    display: block;
    margin: auto;

    @media(min-width:1440px) {
        display: none;
    }
`

export const Logo = styled(Shadow)`
    width: 236.85px;
    margin: -210px auto 0px;

    @media(min-width:1440px) {
        display: none;
    }
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #1E1F36;
    text-align: center;
    margin: 60px auto 21px;

    @media(min-width:1440px) {
        text-align: start;
        margin: 0px auto 27px;
    }
`

export const Quest = styled.p`
    font-weight: ${({weight}) => weight};
    font-size: 13px;
    line-height: 16px;
    color: ${({cl}) => cl};

    @media(min-width:1440px) {
        &:hover {
            color: #F47B56;
        }
    }
`

export const QuestDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;

    @media(min-width:1440px) {
        width: 333px;
        cursor: pointer;
    }
`

export const Arrow = styled.img`
    width: 8px;
    height: 4px;
    transform: ${({rotate}) => rotate};
`

export const Answer = styled.p`
    width: 260px;
    margin-top: 13px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #4B4C5F;

`

export const MainDiv = styled.div`

    @media(min-width:1440px) {
        width: 333px;
    }
`

export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    border: none;
    margin-top: 18px;
    background-color: #E8E8EA;

`

export const Box = styled.img`
    display: none;

    @media(min-width:1440px) {
        display: block;
        height: 190px; 
        margin: 110px 0px 0px -127px;
    }
`