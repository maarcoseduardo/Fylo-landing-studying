import imgIllustration2 from '../../assets/illustration-2.svg';
import imgSendIcon from '../../assets/icon-arrow.svg';
import imgQuotes from '../../assets/icon-quotes.svg'; 

import {
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
    ImgQuote
} from './styles';

export function MainContinuos() {

    return (

        <>
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
                    <Anchor> See how Fylo works <img src={imgSendIcon} /></Anchor>

                    <DivQuote>
                        <ImgQuote src={imgQuotes}/>
                        <QuoteParagraph>
                          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                        </QuoteParagraph>
                    </DivQuote>
                </DivContent2>

                <DivImgController2>
                    <ImgContentTwo src={imgIllustration2} alt="illustration 02" />
                </DivImgController2>
            </MainContinuosContainer>
        </>
    )
}