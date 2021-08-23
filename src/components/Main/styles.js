import styled from 'styled-components';

export const MainContainer = styled.main`

    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;    
`;

export const DivContent = styled.div`

    margin-top: 100px;
    max-width: 600px;
`;

export const H2 = styled.h2`
    display: inline-block;
    max-width: 355px;
`;


export const Paragraph = styled.p`

    display: inline-block;

    max-width: 500px;
    margin-top: 30px;
`;

export const DivSendData = styled.div`

  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin-top: 30px;

`;

export const Input = styled.input`

    height: 33px;
    width: 300px;
    padding: 0 0 0 10px;
`;

export const Button = styled.button`

    width: 170px;
    border-radius: 5px;
    
    background: var(--bright-blue);
    color: white;
`;


export const DivImgController = styled.div`
    
`;


export const ImgContentOne = styled.img`
    width: 700px;
    height: 450px;
    
`;