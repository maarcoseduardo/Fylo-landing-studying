import {
    DivGapContainer,
    DivContent,
    H2,
    Paragraph,
    DivSendMail,
    Input,
    Button
} from "./styles";

export function GapFooter() {

    return (

        <DivGapContainer>
            <DivContent>
                <H2>Get early access today</H2>
                <Paragraph>It only takes a minute to sign up and our free starter tier is
                                               extremely generous. If you have any questions, our support team  would be 
                                               happy to help you.
                </Paragraph>
            </DivContent>
            <DivSendMail>
                <Input placeholder="email@example.com.br" type="email" required/>
                <Button type="submit">Get Started For Free</Button>
            </DivSendMail>
        </DivGapContainer>
    )
}
