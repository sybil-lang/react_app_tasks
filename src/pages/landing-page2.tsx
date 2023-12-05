import { FunctionComponent } from "react";
import styled from "styled-components";
import SizexlColorPrimaryIconN from "../components/sizexl-color-primary-icon-n";
import ServiceSection from "../components/service-section";
import BlogSection from "../components/blog-section";
import DigitalAgencyCard from "../components/digital-agency-card";

const About = styled.div`
  position: absolute;
  top: 42px;
  left: 869px;
  text-align: center;
`;
const Services = styled.div`
  position: absolute;
  top: 42px;
  left: 956px;
  text-align: center;
`;
const Projects = styled.div`
  position: absolute;
  top: 42px;
  left: 1062px;
  text-align: center;
`;
const BuildingBrandsIn = styled.span``;
const DigitalAge = styled.span`
  color: var(--color-slateblue);
`;
const BuildingBrandsInContainer = styled.b`
  position: absolute;
  top: 240px;
  left: 130px;
  font-size: 60px;
  display: inline-block;
  width: 486px;
`;
const YourPartnerIn = styled.div`
  position: absolute;
  top: 412px;
  left: 130px;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
  color: var(--color-dimgray);
  display: inline-block;
  width: 503px;
`;
const Image6Icon = styled.img`
  position: absolute;
  top: 250px;
  left: 763px;
  border-radius: 50px;
  width: 523px;
  height: 361px;
  object-fit: cover;
`;
const CustomerLogosChild = styled.img`
  position: relative;
  width: 107.9px;
  height: 26px;
`;
const CustomerLogosItem = styled.img`
  position: relative;
  width: 115.6px;
  height: 26.1px;
`;
const CustomerLogosInner = styled.img`
  position: relative;
  width: 124.7px;
  height: 26.5px;
`;
const MaskGroupIcon = styled.img`
  position: relative;
  width: 97.6px;
  height: 40px;
  object-fit: cover;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 82.1px;
  height: 24.2px;
`;
const VectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
`;
const CustomerLogos = styled.div`
  position: absolute;
  top: 800px;
  left: calc(50% - 414px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 70px;
`;
const PoweringNextGenCompanies = styled.div`
  position: absolute;
  top: 757px;
  left: 616px;
  font-size: var(--regular-13-size);
  letter-spacing: 0.01em;
  color: var(--color-black);
`;
const FrameChild = styled.div`
  position: absolute;
  top: 5px;
  left: 0px;
  border-radius: 16px;
  background-color: var(--white);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  width: 161px;
  height: 76px;
`;
const Projects1 = styled.b`
  position: absolute;
  top: 20px;
  left: 48px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  opacity: 0.5;
`;
const B = styled.b``;
const Span = styled.span`
  font-weight: 600;
`;
const Done = styled.div`
  position: absolute;
  top: 42px;
  left: 27px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.01em;
`;
const StarIcon = styled.img`
  position: absolute;
  top: 15px;
  left: 20px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 555px;
  left: 1179px;
  width: 161px;
  height: 82px;
  text-align: center;
  font-size: 12px;
  color: var(--color-gray-200);
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 1198px;
  left: 449px;
  width: 36px;
  height: 36px;
`;
const LandingPage2Child = styled.img`
  position: absolute;
  top: 1708px;
  left: 149px;
  width: 304px;
  height: 450px;
  object-fit: cover;
`;
const TheResultsHave = styled.div`
  position: absolute;
  top: 1708px;
  left: calc(50% - 187px);
  font-size: var(--font-size-5xl);
  font-weight: 500;
  color: var(--color-dimgray);
  display: inline-block;
  width: 756px;
`;
const DirectorOfDesign = styled.span`
  font-weight: 500;
`;
const DavidCalathanContainer = styled.div`
  position: absolute;
  top: 1850px;
  left: calc(50% - 187px);
  font-size: var(--font-size-xl);
  color: var(--color-dimgray);
  display: inline-block;
  width: 685px;
`;
const LandingPage2Item = styled.img`
  position: absolute;
  height: 0.59%;
  width: 1.46%;
  top: 59.79%;
  right: 13.23%;
  bottom: 39.62%;
  left: 85.31%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const LandingPage2Inner = styled.img`
  position: absolute;
  height: 0.59%;
  width: 1.46%;
  top: 59.79%;
  right: 10.45%;
  bottom: 39.62%;
  left: 88.09%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const HelpMenu = styled.b`
  position: absolute;
  top: 38px;
  left: 161px;
  font-size: var(--font-size-5xl);
  line-height: 24px;
  color: var(--color-black);
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 0.87%;
  width: 1.46%;
  top: 0.98%;
  right: 89.51%;
  bottom: 98.15%;
  left: 9.03%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div = styled.div`
  position: absolute;
  top: 1657px;
  left: 96px;
  font-size: 80px;
  font-weight: 600;
  color: var(--color-black);
`;
const LandingPage2Root = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 3575px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-md-semibold-size);
  color: var(--color-darkslategray);
  font-family: var(--bold-16);
`;

const LandingPage2: FunctionComponent = () => {
  return (
    <LandingPage2Root>
      <About>About</About>
      <Services>Services</Services>
      <Projects>Projects</Projects>
      <SizexlColorPrimaryIconN
        buttonText="Learn More"
        sizexlColorPrimaryIconNBackgroundColor="#6153cd"
        sizexlColorPrimaryIconNPosition="absolute"
        sizexlColorPrimaryIconNTop="559px"
        sizexlColorPrimaryIconNLeft="130px"
        sizexlColorPrimaryIconNHeight="48px"
        labelFontWeight="bold"
        labelFontFamily="'Plus Jakarta Sans'"
      />
      <SizexlColorPrimaryIconN
        buttonText="Get in Touch"
        sizexlColorPrimaryIconNBackgroundColor="#6153cd"
        sizexlColorPrimaryIconNPosition="absolute"
        sizexlColorPrimaryIconNTop="29px"
        sizexlColorPrimaryIconNLeft="1166px"
        sizexlColorPrimaryIconNHeight="48px"
        labelFontWeight="bold"
        labelFontFamily="'Plus Jakarta Sans'"
      />
      <BuildingBrandsInContainer>
        <BuildingBrandsIn>{`Building Brands in the `}</BuildingBrandsIn>
        <DigitalAge>Digital Age</DigitalAge>
      </BuildingBrandsInContainer>
      <YourPartnerIn>
        Your partner in navigating the ever-evolving landscape of digital
        marketing. From conceptualization to execution, we craft tailored
        solutions that drive results and elevate your brand to new heights.
      </YourPartnerIn>
      <Image6Icon alt="" src="/image-6@2x.png" />
      <CustomerLogos>
        <CustomerLogosChild alt="" src="/group-13.svg" />
        <CustomerLogosItem alt="" src="/group-14.svg" />
        <CustomerLogosInner alt="" src="/group-15.svg" />
        <MaskGroupIcon alt="" src="/mask-group@2x.png" />
        <VectorWrapper>
          <VectorIcon alt="" src="/vector.svg" />
        </VectorWrapper>
      </CustomerLogos>
      <PoweringNextGenCompanies>
        Powering next-gen companies
      </PoweringNextGenCompanies>
      <RectangleParent>
        <FrameChild />
        <Projects1>Projects</Projects1>
        <Done>
          <B>600+</B>
          <Span>{` `}</Span>
          <BuildingBrandsIn>Done</BuildingBrandsIn>
        </Done>
        <StarIcon alt="" src="/star.svg" />
      </RectangleParent>
      <ServiceSection />
      <GroupIcon alt="" src="/group1.svg" />
      <LandingPage2Child alt="" src="/rectangle-21@2x.png" />
      <TheResultsHave>
        “The results have been incredible. With Power Digital, it feels like
        they’re in our trench, supporting and understanding us. They’re like a
        partner and mentor in helping us get where we want to be.”
      </TheResultsHave>
      <DavidCalathanContainer>
        <Span>{`David Calathan - `}</Span>
        <DirectorOfDesign>
          Director of Design Operations, New York
        </DirectorOfDesign>
      </DavidCalathanContainer>
      <LandingPage2Item alt="" src="/group-2164.svg" />
      <LandingPage2Inner alt="" src="/group-2165.svg" />
      <BlogSection />
      <HelpMenu>Digital agency</HelpMenu>
      <VectorIcon1 alt="" src="/vector1.svg" />
      <Div>“</Div>
      <DigitalAgencyCard />
    </LandingPage2Root>
  );
};

export default LandingPage2;
