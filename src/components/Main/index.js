import {
    MainContainer,
    DivContent,
    Img,
    DivImgController,
    H2,
    Paragraph,
    DivSendData,
    Input,
    Button
} from "./styles";

import imgIllustration1 from "../../assets/illustration-1.svg";

export function Main() {

    return (

        <MainContainer>
            <DivContent>
                <H2>All your files in one secure location, accessible anywhere.</H2>
                <Paragraph>Fylo stores your most important files in one secure location.
                                        Access them wherever your need, share and collaborate with friends, family
                                        and co-workers.
                </Paragraph>
                <DivSendData>
                    <Input placeholder="Insert your e-mail..." type="e-mail"/>
                    <Button type="submit">Get Started</Button>
                </DivSendData>
            </DivContent>
            <DivImgController>
                <Img src={imgIllustration1}
                    alt="illustration 01"/>
            </DivImgController>
        </MainContainer>

    );
}
