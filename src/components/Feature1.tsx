import { FunctionComponent } from "react";
import styled from "styled-components";

export type Feature1Type = {
  className?: string;
  vuesaxboldelement4?: string;
  fullyCustomizableTo?: string;
  suitYourBusinessBest?: string;
};

const Vuesaxboldelement4Icon = styled.img`
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
const FullyCustomizableTo = styled.p`
  margin: 0;
`;
const FastToDeployContainer = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 600;
`;
const FeatureRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--body-2-04-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;

const Feature1: FunctionComponent<Feature1Type> = ({
  className = "",
  vuesaxboldelement4,
  fullyCustomizableTo,
  suitYourBusinessBest,
}) => {
  return (
    <FeatureRoot className={className}>
      <Icon>
        <Vuesaxboldelement4Icon alt="" src={vuesaxboldelement4} />
      </Icon>
      <FastToDeployContainer>
        <FullyCustomizableTo>{fullyCustomizableTo}</FullyCustomizableTo>
        <FullyCustomizableTo>{suitYourBusinessBest}</FullyCustomizableTo>
      </FastToDeployContainer>
    </FeatureRoot>
  );
};

export default Feature1;
