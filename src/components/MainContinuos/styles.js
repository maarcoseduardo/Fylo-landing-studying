import styled from 'styled-components';

export const MainContinuosContainer = styled.div`

    display: flex;
    justify-content: space-around;

    margin-top: 90px;
    
`;

export const DivContent2 = styled.div`

    margin-top: 100px;
    max-width: 600px;
    align-items: center;

`;

export const H2 = styled.h2`
    display: inline-block;
    max-width: 400px;
`;

export const Paragraph = styled.p`

    display: inline-block;

    max-width: 530px;
    margin-top: 20px;

`;

export const Paragraph2 = styled.p`

    display: block;

    max-width: 530px;
    margin: 20px 0;

`;

export const Anchor = styled.a`

    color: var(--moderate-cyan);
    align-items: center;

    &:hover{
        color: var(--moderate-cyan);
        filter: brightness(1.5);
        text-decoration: underline;
    }
`;

export const DivImgController2 = styled.div`
    
`;


export const ImgContentTwo = styled.img`
    width: 700px;
    height: 450px;
    
`;

export const DivQuote = styled.div`

    width: 340px;
    height: 200px;
  

    margin-top: 35px;
    border: 1px solid var(--light-gray);
    border-radius: 10px;
    padding: 15px;

    background: white;

`;

export const ImgQuote = styled.img`


`;

export const QuoteParagraph = styled.p`
    display: block;
    font-size: 0.9em;
    
`;