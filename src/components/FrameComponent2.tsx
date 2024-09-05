import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import Feature1 from "./Feature1";

export type FrameComponent2Type = {
  className?: string;
};

const Title1 = styled(Button)`
  width: 157px;
  height: 41px;
`;
const FocusOnThe = styled.p`
  margin: 0;
`;
const FocusOnTheContainer = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 48px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-13xl);
    line-height: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--heading-3-03-size);
    line-height: 29px;
  }
`;
const PricingHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Plateform = styled.span`
  line-height: 32px;
  font-weight: 600;
`;
const TakesOfYour = styled.span`
  line-height: 28px;
`;
const PlateformTakesOfContainer = styled.div`
  align-self: stretch;
  position: relative;
`;
const WithOurAi = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
`;
const BusinessPlan = styled.div`
  width: 448px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  font-size: var(--heading-4-03-size);
`;
const PricingContent = styled.div`
  width: 544px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  max-width: 100%;
`;
const PlanFeatures = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  font-size: var(--body-2-04-size);
  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const PricingContentParentRoot = styled.div`
  width: 1200px;
  margin: 0 !important;
  position: absolute;
  bottom: -197px;
  left: -710px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-141xl);
  z-index: 2;
  text-align: left;
  font-size: var(--heading-1-02-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <PricingContentParentRoot className={className}>
      <PricingContent>
        <PricingHeader>
          <Title1
            disableElevation
            variant="contained"
            sx={{
              color: "linear-gradient(249.46deg, #2878ff, #2c65c8)",
              fontSize: "12",
              background: "#f1f6ff",
              borderRadius: "8px",
              "&:hover": { background: "#f1f6ff" },
              width: 157,
              height: 41,
            }}
          >
            MANAGEMENT
          </Title1>
          <FocusOnTheContainer>
            <FocusOnThe>Focus on the essentials</FocusOnThe>
            <FocusOnThe>we’ll do the rest</FocusOnThe>
          </FocusOnTheContainer>
        </PricingHeader>
        <BusinessPlan>
          <PlateformTakesOfContainer>
            <Plateform>Plateform</Plateform>
            <TakesOfYour>
              {" "}
              takes of your orders and employees, let you manage sales,
              marketing campaigns - easy and all in one place.
            </TakesOfYour>
          </PlateformTakesOfContainer>
          <WithOurAi>
            With our Ai based optimization tool, the system will suggest small,
            easy to implement changes to make your business run better and
            smoother.
          </WithOurAi>
        </BusinessPlan>
      </PricingContent>
      <PlanFeatures>
        <Feature1
          vuesaxboldelement4="/vuesaxboldchartsquare.svg"
          fullyCustomizableTo="All sales statistics"
          suitYourBusinessBest="in one place"
        />
        <Feature1
          vuesaxboldelement4="/vuesaxboldmenu.svg"
          fullyCustomizableTo="Manage multiple"
          suitYourBusinessBest="locations and menu"
        />
        <Feature1
          vuesaxboldelement4="/vuesaxboldfavoritechart.svg"
          fullyCustomizableTo="Keep track of"
          suitYourBusinessBest="marketing campaigns"
        />
        <Feature1
          vuesaxboldelement4="/vuesaxboldelement4.svg"
          fullyCustomizableTo="Fully customizable to"
          suitYourBusinessBest="suit your business best"
        />
      </PlanFeatures>
    </PricingContentParentRoot>
  );
};

export default FrameComponent2;
