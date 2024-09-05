import { FunctionComponent } from "react";
import styled from "styled-components";
import Button1 from "./Button1";

export type TestimonialCardsType = {
  className?: string;
};

const MadeAsEasy = styled.p`
  margin: 0;
`;
const RestaurantManagementMadeContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 54px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-16xl);
    line-height: 43px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-7xl);
    line-height: 32px;
  }
`;
const PlateformWillHelpContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--heading-4-03-size);
  line-height: 150%;
  color: var(--neutral-05);
`;
const PlayButton = styled.div`
  width: 376px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const RestaurantManagementRoot = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-29xl);
  max-width: 100%;
  z-index: 3;
  margin-top: -940.2px;
  text-align: left;
  font-size: var(--font-size-25xl);
  color: var(--neutral-09);
  font-family: var(--caption-03);
  @media screen and (max-width: 825px) {
    gap: var(--gap-5xl);
  }
`;

const TestimonialCards: FunctionComponent<TestimonialCardsType> = ({
  className = "",
}) => {
  return (
    <RestaurantManagementRoot className={className}>
      <RestaurantManagementMadeContainer>
        <MadeAsEasy>Restaurant Management</MadeAsEasy>
        <MadeAsEasy>made as easy as pie</MadeAsEasy>
      </RestaurantManagementMadeContainer>
      <PlateformWillHelpContainer>
        <MadeAsEasy>
          Plateform will help you manage your store easily with its outstanding
          features. Trusted be ten of thousands of
        </MadeAsEasy>
        <MadeAsEasy>customers all over the world.</MadeAsEasy>
      </PlateformWillHelpContainer>
      <PlayButton>
        <Button1
          button="Watch video"
          propFlex="1"
          propMinWidth="117px"
          propAlignSelf="unset"
        />
        <Button1
          button="Try the demo"
          propFlex="0.7458"
          propMinWidth="117px"
          propAlignSelf="unset"
        />
      </PlayButton>
    </RestaurantManagementRoot>
  );
};

export default TestimonialCards;
