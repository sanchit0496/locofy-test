import { FunctionComponent } from "react";
import Title from "./Title";
import styled from "styled-components";
import FrameComponent6 from "./FrameComponent6";

export type AboutUsType = {
  className?: string;
};

const RestaurantReimagined = styled.h1`
  margin: 0;
  height: 30px;
  position: relative;
  font-size: inherit;
  line-height: 48px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 1400px) {
    font-size: var(--font-size-13xl);
    line-height: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--heading-3-03-size);
    line-height: 29px;
  }
`;
const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const WeAreOneStop = styled.p`
  margin: 0;
`;
const WeAreOneStopContainer = styled.div`
  width: 580px;
  position: relative;
  font-size: var(--heading-4-03-size);
  line-height: 28px;
  text-align: center;
  display: inline-block;
  max-width: 100%;
`;
const VuesaxboldtruckFastIcon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
`;
const Icon = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--primary-01);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const FastToDeploy = styled.div`
  height: 10px;
  position: relative;
  line-height: 20px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
`;
const IconParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Features = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-45xl);
  font-size: var(--body-2-04-size);
  @media screen and (max-width: 825px) {
    gap: var(--gap-13xl);
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const TestimonialCard1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  max-width: 100%;
  @media screen and (max-width: 825px) {
    gap: var(--gap-5xl);
  }
`;
const Hero = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--heading-1-02-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;
const AboutUsRoot = styled.div`
  width: 1440px;
  background-color: var(--white);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-58xl-5) 0px;
  box-sizing: border-box;
  gap: var(--gap-141xl);
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1400px) {
    gap: var(--gap-61xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-21xl);
  }
`;

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  return (
    <AboutUsRoot className={className}>
      <Hero>
        <TestimonialCard1>
          <TestimonialContent>
            <Title text="THIS IS PLATEFORM" />
            <RestaurantReimagined>Restaurant reimagined</RestaurantReimagined>
          </TestimonialContent>
          <WeAreOneStopContainer>
            <WeAreOneStop>
              We are one-stop solution to track, optimize and deliver food
            </WeAreOneStop>
            <WeAreOneStop>
              with an easy to use mobile app for ordering and our award winning
              desktop app for manament.
            </WeAreOneStop>
          </WeAreOneStopContainer>
          <Features>
            <IconParent>
              <Icon>
                <VuesaxboldtruckFastIcon
                  loading="lazy"
                  alt=""
                  src="/vuesaxboldtruckfast.svg"
                />
              </Icon>
              <FastToDeploy>Fast to deploy</FastToDeploy>
            </IconParent>
            <IconParent>
              <Icon>
                <VuesaxboldtruckFastIcon
                  loading="lazy"
                  alt=""
                  src="/vuesaxboldaward.svg"
                />
              </Icon>
              <FastToDeploy>Easy to learn</FastToDeploy>
            </IconParent>
            <IconParent>
              <Icon>
                <VuesaxboldtruckFastIcon
                  loading="lazy"
                  alt=""
                  src="/vuesaxbolddollarcircle.svg"
                />
              </Icon>
              <FastToDeploy>Future rich</FastToDeploy>
            </IconParent>
          </Features>
        </TestimonialCard1>
      </Hero>
      <FrameComponent6 />
    </AboutUsRoot>
  );
};

export default AboutUs;
