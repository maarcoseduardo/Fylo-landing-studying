import imgIllustration2 from '../../assets/illustration-2.svg';
import imgSendIcon from '../../assets/icon-arrow.svg';
import imgQuotes from '../../assets/icon-quotes.svg'; 
import imgAvatar from '../../assets/avatar-testimonial.jpg';
// import bgImgContainer from '../../assets/bg-curve-desktop.svg';

import {
    /*ImgContainerBgMainTwo, */
    MainContinuosContainer,
    H2,
    Paragraph,
    Paragraph2,
    DivContent2,
    DivImgController2,
    ImgContentTwo,
    Anchor,
    DivQuote,
    QuoteParagraph,
    ImgQuote,
    DivPerfilUser,
    ImgPerfil,
    H3,
    Paragraph3
} from './styles';

export function MainContinuos() {

    return (
        <>
       {/*  <ImgContainerBgMainTwo src={bgImgContainer}/>  */}
            <MainContinuosContainer>
                <DivContent2>
                    <H2>Stay productive, wherever you are</H2>
                    <Paragraph>Never let location be an issue when accessing your files.
                        Fylo has you covered for all your file storage needs.
                    </Paragraph>
                    <Paragraph2>Securely share files and folders with friends, family and
                        colleagues for live collaboration. No email attachments
                        required!
                    </Paragraph2>
                    <Anchor> See how Fylo works <img src={imgSendIcon} alt="arrow-green"/></Anchor>

                    <DivQuote>
                        <ImgQuote src={imgQuotes}/>
                        <QuoteParagraph>
                          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                        </QuoteParagraph>
                        <DivPerfilUser>
                            <ImgPerfil src={imgAvatar} alt="picture Avatar"/>
                            <H3>Kyle Burton</H3>
                            <Paragraph3>Founder  CEO, Huddle</Paragraph3>
                        </DivPerfilUser>
                    </DivQuote>
                </DivContent2>

                <DivImgController2>
                    <ImgContentTwo src={imgIllustration2} alt="illustration 02" />
                </DivImgController2>
            </MainContinuosContainer>
        </>
    )
}