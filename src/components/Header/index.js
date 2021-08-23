import imgLogo from '../../assets/logo.svg';
import { 
    HeaderContainer, 
    UnList,
    List, 
    Navigation 
} from './styles';

export function Header() {

    return (
        <>
            <HeaderContainer>

                <div className="logo">

                    <a href=""><img src={imgLogo} alt="logo" /></a>

                </div>

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