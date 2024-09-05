import styled from "styled-components";
import Title from "./Title";
import Button1 from "./Button1";
import PropTypes from "prop-types";

const PlaceholderIcon = styled.img`
  height: 514px;
  width: 317.4px;
  position: absolute;
  margin: 0 !important;
  top: -289px;
  right: 34.1px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PlaceholderIcon1 = styled.img`
  height: 309px;
  width: 190.8px;
  position: absolute;
  margin: 0 !important;
  top: -39px;
  left: 65px;
  overflow: hidden;
  flex-shrink: 0;
`;
const OurStoryLeft = styled.img`
  height: 257.4px;
  width: 158.9px;
  position: absolute;
  margin: 0 !important;
  right: -133.9px;
  bottom: -9.4px;
  overflow: hidden;
  flex-shrink: 0;
`;
const OurStoryLeft1 = styled.img`
  height: 257.4px;
  width: 158.9px;
  position: absolute;
  margin: 0 !important;
  bottom: -195.4px;
  left: 233px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PlaceholderIcon2 = styled.img`
  height: 310px;
  width: 191.4px;
  position: absolute;
  margin: 0 !important;
  top: 123px;
  left: 313px;
  overflow: hidden;
  flex-shrink: 0;
`;
const SuccessStories = styled.h1`
  margin: 0;
  height: 30px;
  position: relative;
  font-size: var(--heading-1-02-size);
  line-height: 48px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-13xl);
    line-height: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--heading-3-03-size);
    line-height: 29px;
  }
`;
const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const PlateformHelpsBusinesses = styled.p`
  margin: 0;
`;
const PlateformHelpsBusinessesContainer = styled.div`
  position: relative;
  font-size: var(--heading-4-03-size);
  line-height: 28px;
  display: inline-block;
  max-width: 100%;
`;
const Image32Icon = styled.img`
  height: 532.8px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: contain;
  min-width: 339px;
  min-height: 533px;
  @media screen and (max-width: 1400px) {
    flex: 1;
  }
  @media screen and (max-width: 825px) {
    min-width: 100%;
  }
`;
const AvoburgerLogoIcon = styled.img`
  height: 49.3px;
  width: 30.5px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Avoburger = styled.div`
  height: 25px;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 42.8px;
  font-weight: 600;
  display: inline-block;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-10xl);
    line-height: 34px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
    line-height: 26px;
  }
`;
const StoryCardHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-2xs-5);
`;
const SeeHowOur = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
`;
const AnInterviewWith = styled.div`
  align-self: stretch;
  height: 13px;
  position: relative;
  line-height: 28px;
  display: inline-block;
`;
const Description = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--heading-4-03-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const StoryCardLeft = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-45xl);
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    gap: var(--gap-13xl);
  }
`;
const StoryButtons = styled.div`
  width: 416px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const StoryCard = styled.div`
  flex: 0.8157;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-38xl) var(--padding-29xl);
  box-sizing: border-box;
  min-width: 339px;
  min-height: 533px;
  max-width: 100%;
  @media screen and (max-width: 1400px) {
    flex: 1;
  }
  @media screen and (max-width: 825px) {
    padding: var(--padding-18xl) var(--padding-5xl);
    box-sizing: border-box;
    min-width: 100%;
  }
`;
const Image32Parent = styled.div`
  align-self: stretch;
  box-shadow: 0px 6px 20px rgba(37, 98, 204, 0.18);
  border-radius: var(--br-13xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  row-gap: 20px;
  font-size: var(--font-size-16xl-7);
  color: var(--neutral-04);
  font-family: var(--font-roboto);
  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;
const OurStoryRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 825px) {
    gap: var(--gap-5xl);
  }
`;
const OurStoryTitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
`;
const OurStoryRoot = styled.section`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-111xl) var(--padding-180xl) var(--padding-110xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
  @media screen and (max-width: 1200px) {
    padding-top: var(--padding-65xl);
    padding-bottom: var(--padding-65xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    padding: var(--padding-36xl) var(--padding-80xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const OurStory = ({ className = "" }) => {
  return (
    <OurStoryRoot className={className}>
      <OurStoryTitle>
        <PlaceholderIcon loading="lazy" alt="" src="/frame.svg" />
        <PlaceholderIcon1 loading="lazy" alt="" src="/frame-1.svg" />
        <OurStoryLeft loading="lazy" alt="" src="/frame-2.svg" />
        <OurStoryLeft1 loading="lazy" alt="" src="/frame-2.svg" />
        <PlaceholderIcon2 loading="lazy" alt="" src="/frame-4.svg" />
        <OurStoryRight>
          <StoryContent>
            <Title text="WE LOVE TO SEE YOU GROW" />
            <SuccessStories>Success stories</SuccessStories>
          </StoryContent>
          <PlateformHelpsBusinessesContainer>
            <PlateformHelpsBusinesses>
              Plateform helps businesses thrive - see how we help our
            </PlateformHelpsBusinesses>
            <PlateformHelpsBusinesses>
              clients manage their restaurant and grow their revenue!
            </PlateformHelpsBusinesses>
          </PlateformHelpsBusinessesContainer>
          <Image32Parent>
            <Image32Icon alt="" src="/image-32@2x.png" />
            <StoryCard>
              <StoryCardLeft>
                <StoryCardHeading>
                  <AvoburgerLogoIcon loading="lazy" alt="" src="/frame-5.svg" />
                  <Avoburger>Avoburger</Avoburger>
                </StoryCardHeading>
                <Description>
                  <SeeHowOur>
                    See how our friends at Avoburger used our AI tools to
                    optimize their routes, reach new customers and explode their
                    reach in just a year.
                  </SeeHowOur>
                  <AnInterviewWith>
                    An interview with Avoburger CEO Janet Smith.
                  </AnInterviewWith>
                </Description>
              </StoryCardLeft>
              <StoryButtons>
                <Button1
                  button="Watch interview"
                  propFlex="0.9467"
                  propMinWidth="130px"
                  propAlignSelf="unset"
                />
                <Button1
                  button="See all success stories"
                  propFlex="1"
                  propMinWidth="130px"
                  propAlignSelf="unset"
                />
              </StoryButtons>
            </StoryCard>
          </Image32Parent>
        </OurStoryRight>
      </OurStoryTitle>
    </OurStoryRoot>
  );
};

OurStory.propTypes = {
  className: PropTypes.string,
};

export default OurStory;
