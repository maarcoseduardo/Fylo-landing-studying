import styled from "styled-components";

export const DivContainer = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    height: 250px;
    background: var(--very-dark-blue);

`;

export const ImgLogo = styled.img`

    height: 50px;
    width: 166px;
    
    filter: invert(1) brightness(0.8);
`; 

export const ImgIcon = styled.img`
    
    height: 12px;
    width: 14px;

    margin-right: 10px;
    align-items: center;
`;

export const DivFindMe = styled.div`

`;

export const UnListPhoneMail = styled.ul`

    margin-top: -70px;
`;

export const UnListAbout = styled.ul`

    margin-top: 60px;

`;
export const UnListContact = styled.ul`

   margin-top: 35px;
`;

export const UnListSocial = styled.ul`

    display: flex;
    justify-content: space-between;
    margin: 0 40px;
`;

export const List = styled.li`

    margin-top: 10px;
    &:first-child{
        margin-top: 0;
    }
    
    font-size: 18px;
    font-family: "Raleway", sans-serif ;
    font-weight: 400;
    color: white;

`;

export const ListSocial = styled.li`

    margin: -10px 5px 0 5px;
    
    font-size: 18px;
    font-family: "Raleway", sans-serif ;
    font-weight: 400;
    color: white;
`;

export const ImgSocialIcon = styled.img`

    width: 36px;
    height: 36px;

    border: 2px solid;
    border-color: black;
    padding: 3px;
    border-radius: 15px;

    filter: invert();
`;

export const DivAbout = styled.div`

`;

export const DivContact = styled.div`

`;

export const DivSocial = styled.div`

`;