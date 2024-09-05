import { FunctionComponent } from "react";
import styled from "styled-components";
import PhoneGraphProgress from "./PhoneGraphProgress";

export type GraphContainerType = {
  className?: string;
};

const StoryChartChild = styled.div`
  width: 752.2px;
  height: calc(100% - 311.6px);
  position: absolute;
  margin: 0 !important;
  top: 531.89px;
  right: -28.9px;
  bottom: -220.29px;
  border-radius: var(--br-111xl);
  background: linear-gradient(45deg, #f0f6ff, #fcfdff);
  transform: rotate(-45deg);
  transform-origin: 0 0;
`;
const StoryChartContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-165xl);
`;
const Div = styled.div`
  position: relative;
  line-height: 9px;
  font-weight: 600;
`;
const Wrapper = styled.div`
  border-radius: var(--br-52xl);
  background-color: var(--success-05);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  z-index: 5;
  color: var(--white);
`;
const StoryChartRoot = styled.div`
  position: absolute;
  top: -231.6px;
  left: 716.7px;
  width: 723.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-288xl-6) var(--padding-61xl) var(--padding-548xl-2);
  box-sizing: border-box;
  gap: var(--gap-65xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;

const GraphContainer: FunctionComponent<GraphContainerType> = ({
  className = "",
}) => {
  return (
    <StoryChartRoot className={className}>
      <StoryChartChild />
      <StoryChartContent>
        <PhoneGraphProgress />
      </StoryChartContent>
      <Wrapper>
        <Div>+25%</Div>
      </Wrapper>
    </StoryChartRoot>
  );
};

export default GraphContainer;
