import imgLogo from '../../assets/logo.svg';
import imgPhone from '../../assets/icon-phone.svg';
import imgEmail from '../../assets/icon-email.svg';
import fbIcon from '../../assets/facebook.png';
import twIcon from '../../assets/twitter.png';
import igIcon from '../../assets/instagram.png';

import {
    DivContainer,
    ImgLogo,
    ImgIcon,
    DivFindMe,
    UnListPhoneMail,
    UnListAbout,
    UnListContact,
    UnListSocial,
    List,
    ListSocial,
    DivAbout,
    DivContact,
    DivSocial,
    ImgSocialIcon
} from './styles';

export function Footer() {

    return (
        <>
            <DivContainer>
                
                <DivFindMe>
                    <UnListPhoneMail>
                        <List><ImgLogo src={imgLogo} alt="Imagem logo"/></List>
                        <List>
                            <ImgIcon src={imgPhone}/>
                            Phone: +1-543-123-4567
                        </List>
                        <List>
                            <ImgIcon src={imgEmail}/>
                            example@fylo.com
                        </List>
                    </UnListPhoneMail>
                </DivFindMe>
                    <DivAbout>
                        <UnListAbout>
                            <List>About Us</List>
                            <List>Jobs</List>
                            <List>Press</List>
                            <List>Blog</List>
                        </UnListAbout>
                    </DivAbout>
                    <DivContact>
                        <UnListContact>
                            <List>Contact Us</List>
                            <List>Terms</List>
                            <List>Privacy</List>
                        </UnListContact>
                    </DivContact>
                    <DivSocial>
                        <UnListSocial>
                            <ListSocial><ImgSocialIcon src={fbIcon}/></ListSocial>
                            <ListSocial><ImgSocialIcon src={twIcon}/></ListSocial>
                            <ListSocial><ImgSocialIcon src={igIcon}/></ListSocial>
                        </UnListSocial>
                    </DivSocial>
            </DivContainer>
        </>
    )
}
