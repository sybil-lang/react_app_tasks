import { FunctionComponent } from "react";
import styled from "styled-components";

const Bg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-black);
  width: 1520px;
  height: 394px;
`;
const LoremIpsumDolor = styled.div`
  position: absolute;
  top: 54px;
  left: 0px;
  line-height: 22px;
  display: inline-block;
  width: 396px;
  height: 98px;
`;
const HelpMenu = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--body-md-semibold-size);
  line-height: 24px;
`;
const SocialIcon = styled.img`
  position: absolute;
  top: 181px;
  left: 1px;
  width: 113.1px;
  height: 19.3px;
`;
const Widget0 = styled.div`
  position: absolute;
  top: 95px;
  left: 151px;
  width: 396px;
  height: 200.3px;
`;
const About = styled.p`
  margin: 0;
`;
const AboutFeaturesWorksContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 0px;
  line-height: 40px;
  white-space: pre-wrap;
`;
const Widget1 = styled.div`
  position: absolute;
  top: 95px;
  left: 660px;
  width: 82px;
  height: 205px;
`;
const AboutFeaturesWorksContainer1 = styled.div`
  position: absolute;
  top: 45px;
  left: 0px;
  line-height: 40px;
`;
const Widget2 = styled.div`
  position: absolute;
  top: 95px;
  left: 881px;
  width: 128px;
  height: 205px;
`;
const Widget3 = styled.div`
  position: absolute;
  top: 95px;
  left: 1148px;
  width: 91px;
  height: 165px;
`;
const FooterRoot = styled.div`
  position: absolute;
  top: 3181px;
  left: 0px;
  width: 1520px;
  height: 394px;
  text-align: left;
  font-size: var(--regular-13-size);
  color: var(--white);
  font-family: var(--bold-16);
`;

const DigitalAgencyCard: FunctionComponent = () => {
  return (
    <FooterRoot>
      <Bg />
      <Widget0>
        <LoremIpsumDolor>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in
          volutpat ullamcorper amet adipiscing fermentum.
        </LoremIpsumDolor>
        <HelpMenu>Digital agency</HelpMenu>
        <SocialIcon alt="" src="/social.svg" />
      </Widget0>
      <Widget1>
        <AboutFeaturesWorksContainer>
          <About>{`About          `}</About>
          <About>{`Features          `}</About>
          <About>{`Works          `}</About>
          <About>{`Career  `}</About>
        </AboutFeaturesWorksContainer>
        <HelpMenu>Company</HelpMenu>
      </Widget1>
      <Widget2>
        <AboutFeaturesWorksContainer1>
          <About>Customer Support</About>
          <About>Delivery Details</About>
          <About>{`Terms & Conditions`}</About>
          <About>Privacy Policy</About>
        </AboutFeaturesWorksContainer1>
        <HelpMenu>Help</HelpMenu>
      </Widget2>
      <Widget3>
        <AboutFeaturesWorksContainer1>
          <About>Free eBooksl</About>
          <About>How to - Blog</About>
        </AboutFeaturesWorksContainer1>
        <HelpMenu>Resources</HelpMenu>
      </Widget3>
    </FooterRoot>
  );
};

export default DigitalAgencyCard;
