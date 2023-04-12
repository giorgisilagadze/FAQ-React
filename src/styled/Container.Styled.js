import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 327px;
    background-color: white;
    margin: 148px auto 0px;
    border-radius: 23px;
    padding: 0px 24px 85px;

    @media(min-width:1440px) {
        width: 920px;
    }

    hr {
        width: 100%;
        height: 1px;
        border: none;
        margin-top: 18px;
        background-color: #E8E8EA;
    }
`

export const Shadow = styled.img`
    display: block;
    margin: auto;
`

export const Logo = styled(Shadow)`
    width: 236.85px;
    margin: -210px auto 0px;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #1E1F36;
    text-align: center;
    margin: 60px auto 21px;
`

export const Quest = styled.p`
    font-weight: ${({weight}) => weight};
    font-size: 13px;
    line-height: 16px;
    color: ${({cl}) => cl};
`

export const QuestDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
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