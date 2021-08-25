import imgLogo from '../../assets/logo.svg';
import { 
    HeaderContainer,
    DivLogo,
    Anchor,
    ImgLogo,
    UnList,
    List, 
    Navigation 
} from './styles';

export function Header() {

    return (
        <>
            <HeaderContainer>
                <DivLogo>
                    <Anchor><ImgLogo src={imgLogo} alt="logo"/> </Anchor>
                </DivLogo>
                <Navigation>
                    <UnList>
                        <List>Features</List>
                        <List>Team</List>
                        <List>Sign in</List>
                    </UnList>
                </Navigation>
            </HeaderContainer>
        </>
    )
}