import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description> Watch Latest Episodes of The Movies like Chittha, 
                        Star Wars and many others by subscribing at the 
                        minimal price of Rs.199 per month. Subscribe now !!
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    min-width: 100vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
`;

const CTA = styled.div`
    margin-top: 0;
    margin-bottom: 2vw;
    margin-left: auto;
    margin-right: auto;
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition-timing-function: ease-out;
    transition: 0.2s;
`;

const CTALogoOne = styled.img`
    width: 100%;
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
`;

const SignUp = styled.a`
    font-weight: bold;
    font-size: 18px;
    color: #f9f9f9;
    background-color: #0063e5;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 16.5px 0;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    width: 100%;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    letter-spacing: 1.5px;
    margin: 0 0 24px;
    line-height: 1.5;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

export default Login;