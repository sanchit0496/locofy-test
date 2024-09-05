import { FunctionComponent } from "react";
import styled from "styled-components";
import Button1 from "./Button1";
import PhoneGraphProgress from "./PhoneGraphProgress";

export type BoostContainerType = {
  className?: string;
};

const BoostChild = styled.div`
  height: 338.6px;
  width: 338.6px;
  position: absolute;
  margin: 0 !important;
  bottom: -339.03px;
  left: 22px;
  border-radius: var(--br-42xl-4);
  background: linear-gradient(45deg, #f0f6ff, #fcfdff);
  transform: rotate(-45deg);
  transform-origin: 0 0;
`;
const LetPlateformBoost = styled.h1`
  margin: 0;
  height: 30px;
  position: relative;
  font-size: inherit;
  line-height: 48px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-13xl);
    line-height: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--heading-3-03-size);
    line-height: 29px;
  }
`;
const Join250Restaurants = styled.p`
  margin: 0;
`;
const Join250RestaurantsContainer = styled.div`
  position: relative;
  font-size: var(--heading-4-03-size);
  line-height: 28px;
  text-align: center;
  display: inline-block;
  max-width: 100%;
`;
const BoostButton = styled.div`
  width: 416px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-base);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const LeftShapeChild = styled.div`
  height: 74px;
  width: 74px;
  position: relative;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  display: none;
`;
const LeftShapeItem = styled.img`
  height: 42.1px;
  width: 31.5px;
  position: relative;
  z-index: 1;
`;
const LeftShape = styled.div`
  position: absolute;
  top: 15px;
  left: 0px;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  width: 74px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi-5) var(--padding-xl) var(--padding-lgi-4);
  box-sizing: border-box;
`;
const RightContent = styled.div`
  position: relative;
  line-height: 9px;
  font-weight: 600;
`;
const RightShape = styled.div`
  position: absolute;
  top: 0px;
  left: 54px;
  border-radius: var(--br-52xl);
  background-color: var(--success-05);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  z-index: 1;
`;
const LeftShapeParent = styled.div`
  width: 113px;
  height: 89px;
  position: absolute;
  margin: 0 !important;
  top: 71px;
  left: 190px;
  z-index: 2;
  font-size: var(--caption-03-size);
  color: var(--white);
`;
const BoostContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-73xl-5) var(--padding-xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-29xl);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 825px) {
    gap: var(--gap-5xl);
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-41xl);
    padding-bottom: var(--padding-41xl);
    box-sizing: border-box;
  }
`;
const FrameChild = styled.div`
  position: absolute;
  top: 239.43px;
  left: 0px;
  border-radius: var(--br-42xl-4);
  background: linear-gradient(
    45deg,
    rgba(240, 246, 255, 0.7),
    rgba(252, 253, 255, 0.7)
  );
  width: 338.6px;
  height: 338.6px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
`;
const InnerImage = styled.div`
  position: absolute;
  top: 43.81px;
  left: 18.7px;
  filter: blur(14.7px);
  border-radius: var(--br-3xs-8);
  background-color: var(--color-darkslateblue-100);
  width: 95.1px;
  height: 93.7px;
  transform: rotate(-15.3deg);
  transform-origin: 0 0;
`;
const Image23Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const InnerImageParent = styled.div`
  position: absolute;
  top: 220px;
  left: 256px;
  width: 148.4px;
  height: 140.5px;
  z-index: 2;
`;
const RectangleParent = styled.div`
  height: 478.8px;
  width: 478.8px;
  position: absolute;
  margin: 0 !important;
  top: -137px;
  right: 115.2px;
`;
const BoostRoot = styled.section`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--heading-1-02-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;

const BoostContainer: FunctionComponent<BoostContainerType> = ({
  className = "",
}) => {
  return (
    <BoostRoot className={className}>
      <BoostChild />
      <BoostContent>
        <LetPlateformBoost>
          Let Plateform boost your business!
        </LetPlateformBoost>
        <Join250RestaurantsContainer>
          <Join250Restaurants>
            Join 250+ restaurants and cafes that are already using
          </Join250Restaurants>
          <Join250Restaurants>
            Plateform and growing their reach, revenue and sales.
          </Join250Restaurants>
        </Join250RestaurantsContainer>
        <BoostButton>
          <Button1
            button="Watch video"
            propFlex="1"
            propMinWidth="130px"
            propAlignSelf="unset"
          />
          <Button1 button="Sign up for FREE" />
        </BoostButton>
        <PhoneGraphProgress
          propMargin="0 !important"
          propPosition="absolute"
          propBottom="72px"
          propLeft="240px"
        />
        <LeftShapeParent>
          <LeftShape>
            <LeftShapeChild />
            <LeftShapeItem loading="lazy" alt="" src="/group-7.svg" />
          </LeftShape>
          <RightShape>
            <RightContent>+25%</RightContent>
          </RightShape>
        </LeftShapeParent>
      </BoostContent>
      <RectangleParent>
        <FrameChild />
        <InnerImageParent>
          <InnerImage />
          <Image23Icon loading="lazy" alt="" src="/image-23-1@2x.png" />
        </InnerImageParent>
      </RectangleParent>
    </BoostRoot>
  );
};

export default BoostContainer;
