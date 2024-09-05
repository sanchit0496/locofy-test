import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";
import Button1 from "./Button1";

export type FrameComponent1Type = {
  className?: string;
  singleRestaurant?: string;
  prop?: string;
  upTo20DriversTracked?: string;
  manageSchelulesPricesAndOffer?: string;
  unlimitedDeliveries?: string;
  basicAITools?: string;
  bestChoiceForYourRestaurant?: string;
  button?: string;
  propFlex?: string;
  propMinWidth?: string;
  propAlignSelf?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propHeight1?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
};

const SingleRestaurant = styled.div`
  width: 208px;
  height: 13px;
  position: relative;
  line-height: 32px;
  font-weight: 500;
  display: inline-block;
`;
const Span = styled.span`
  letter-spacing: -0.01em;
  line-height: 58px;
`;
const Month = styled.span`
  font-size: var(--body-2-04-size);
  line-height: 20px;
  color: var(--neutral-04);
`;
const Month1 = styled.div`
  height: 36px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  font-size: var(--font-size-29xl);
  color: var(--neutral-08);
`;
const UpTo = styled.li``;
const UpTo20DriversTracked = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-lgi);
`;
const UpTo20Container = styled.div<{
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
}>`align-self: stretch;
  height: 10px;
  position: relative;
  line-height: 22px;
  display: inline-block;
  height: ${(p) => p.propHeight}
  display: ${(p) => p.propDisplay}
`;
const UpTo20Container1 = styled.div<{
  propHeight1?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
}>`align-self: stretch;
  height: 10px;
  position: relative;
  line-height: 22px;
  display: inline-block;
  height: ${(p) => p.propHeight1}
  display: ${(p) => p.propDisplay1}
`;
const UpTo20Container2 = styled.div`
  align-self: stretch;
  height: 10px;
  position: relative;
  line-height: 22px;
  display: inline-block;
`;
const BestChoiceForContainer = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
`;
const RestaurantDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--body-2-04-size);
  color: var(--neutral-05);
`;
const SingleRestaurantParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const FrameParentRoot = styled.div`
  flex: 1;
  box-shadow: 0px 12px 24px rgba(37, 98, 204, 0.12);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-21xl);
  box-sizing: border-box;
  min-width: 264px;
  min-height: 529px;
  max-width: 100%;
  text-align: left;
  font-size: var(--heading-4-03-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
  @media screen and (max-width: 1400px) {
    min-height: auto;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-7xl);
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
  }
`;

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  singleRestaurant,
  prop,
  propHeight,
  propDisplay,
  upTo20DriversTracked,
  propHeight1,
  propDisplay1,
  manageSchelulesPricesAndOffer,
  unlimitedDeliveries,
  basicAITools,
  bestChoiceForYourRestaurant,
  button,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  return (
    <FrameParentRoot className={className}>
      <SingleRestaurantParent>
        <SingleRestaurant>{singleRestaurant}</SingleRestaurant>
        <Month1>
          <Span>{prop}</Span>
          <Month>/month</Month>
        </Month1>
        <RestaurantDescription>
          <UpTo20Container propHeight={propHeight} propDisplay={propDisplay}>
            <UpTo20DriversTracked>
              <UpTo>{upTo20DriversTracked}</UpTo>
            </UpTo20DriversTracked>
          </UpTo20Container>
          <UpTo20Container1
            propHeight1={propHeight1}
            propDisplay1={propDisplay1}
          >
            <UpTo20DriversTracked>
              <UpTo>{manageSchelulesPricesAndOffer}</UpTo>
            </UpTo20DriversTracked>
          </UpTo20Container1>
          <UpTo20Container2>
            <UpTo20DriversTracked>
              <UpTo>{unlimitedDeliveries}</UpTo>
            </UpTo20DriversTracked>
          </UpTo20Container2>
          <UpTo20Container2>
            <UpTo20DriversTracked>
              <UpTo>{basicAITools}</UpTo>
            </UpTo20DriversTracked>
          </UpTo20Container2>
          <BestChoiceForContainer>
            <UpTo20DriversTracked>
              <UpTo>{bestChoiceForYourRestaurant}</UpTo>
            </UpTo20DriversTracked>
          </BestChoiceForContainer>
        </RestaurantDescription>
      </SingleRestaurantParent>
      <Button1
        button={button}
        propFlex={propFlex}
        propMinWidth={propMinWidth}
        propAlignSelf={propAlignSelf}
      />
    </FrameParentRoot>
  );
};

export default FrameComponent1;
