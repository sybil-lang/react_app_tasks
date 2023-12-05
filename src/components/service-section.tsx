import { FunctionComponent } from "react";
import styled from "styled-components";
import SizexlColorPrimaryIconN from "./sizexl-color-primary-icon-n";

const ExploreOurServices = styled.b`
  position: absolute;
  top: 70px;
  left: calc(50% - 202px);
  font-size: var(--font-size-21xl);
  line-height: 60px;
`;
const WeAreSelfService = styled.div`
  position: absolute;
  top: 145px;
  left: calc(50% - 354px);
  font-size: var(--font-size-lg);
  line-height: 28px;
  color: var(--color-dimgray);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 710px;
`;
const WebDesigning = styled.div`
  position: absolute;
  top: 289px;
  left: calc(50% - 271px);
  font-weight: 500;
`;
const AppDevelopment = styled.div`
  position: absolute;
  top: 29px;
  left: calc(50% - 121.5px);
  font-weight: 500;
`;
const IpsumDolorSit = styled.div`
  position: absolute;
  top: 64px;
  left: calc(50% - 121.5px);
  font-size: var(--body-md-semibold-size);
  display: flex;
  align-items: center;
  width: 243px;
  opacity: 0.5;
`;
const Realtime = styled.div`
  position: absolute;
  top: 260px;
  left: 149px;
  width: 243px;
  height: 182px;
`;
const IpsumDolorSit1 = styled.div`
  position: absolute;
  top: 324px;
  left: calc(50% - 271px);
  font-size: var(--body-md-semibold-size);
  display: flex;
  align-items: center;
  width: 243px;
  opacity: 0.5;
`;
const VectorGraphicIcon = styled.img`
  position: absolute;
  top: -26px;
  left: 0px;
  width: 38px;
  height: 34.4px;
`;
const Embedded = styled.div`
  position: absolute;
  top: 260px;
  left: 749px;
  width: 243px;
  height: 182px;
`;
const IpsumDolorSit3 = styled.div`
  position: absolute;
  top: 324px;
  left: calc(50% + 329px);
  font-size: var(--body-md-semibold-size);
  display: flex;
  align-items: center;
  width: 243px;
  opacity: 0.5;
`;
const DigitalMarketing = styled.div`
  position: absolute;
  top: 289px;
  left: calc(50% + 329px);
  font-weight: 500;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 233px;
  left: 149px;
  width: 36px;
  height: 36px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 233px;
  left: 1049px;
  width: 37px;
  height: 35.2px;
`;
const ExploreOurServicesParentRoot = styled.div`
  position: absolute;
  top: 965px;
  left: 0px;
  background-color: var(--color-gray-100);
  width: 1440px;
  height: 602px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-midnightblue);
  font-family: var(--bold-16);
`;

const ServiceSection: FunctionComponent = () => {
  return (
    <ExploreOurServicesParentRoot>
      <ExploreOurServices>Explore Our Services</ExploreOurServices>
      <WeAreSelfService>
        We are self-service data analytics software that lets you create
        visually.
      </WeAreSelfService>
      <WebDesigning>Web Designing</WebDesigning>
      <Realtime>
        <AppDevelopment>App Development</AppDevelopment>
        <IpsumDolorSit>
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus
        </IpsumDolorSit>
      </Realtime>
      <IpsumDolorSit1>
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus
        vel sem bibendum, a bibendum justo tempor. Sed vel lectus
      </IpsumDolorSit1>
      <Embedded>
        <AppDevelopment>Graphic Designing</AppDevelopment>
        <IpsumDolorSit>
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus
        </IpsumDolorSit>
        <VectorGraphicIcon alt="" src="/24vector-graphic.svg" />
      </Embedded>
      <IpsumDolorSit3>
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus
        vel sem bibendum, a bibendum justo tempor. Sed vel lectus
      </IpsumDolorSit3>
      <DigitalMarketing>Digital Marketing</DigitalMarketing>
      <SizexlColorPrimaryIconN
        buttonText="Learn More"
        sizexlColorPrimaryIconNBackgroundColor="#6153cd"
        sizexlColorPrimaryIconNPosition="absolute"
        sizexlColorPrimaryIconNTop="484px"
        sizexlColorPrimaryIconNLeft="652px"
        sizexlColorPrimaryIconNHeight="48px"
        labelFontWeight="bold"
        labelFontFamily="'Plus Jakarta Sans'"
      />
      <FrameChild alt="" src="/group-57.svg" />
      <GroupIcon alt="" src="/group.svg" />
    </ExploreOurServicesParentRoot>
  );
};

export default ServiceSection;
