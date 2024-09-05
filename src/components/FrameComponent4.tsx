import { FunctionComponent } from "react";
import styled from "styled-components";
import FrameComponent7 from "./FrameComponent7";

export type FrameComponent4Type = {
  className?: string;
};

const TodayInSales = styled.div`
  height: 9px;
  position: relative;
  line-height: 17px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
`;
const SalesChartIcon = styled.div`
  height: 18px;
  position: relative;
  font-size: var(--heading-3-03-size);
  letter-spacing: -0.01em;
  line-height: 29px;
  color: var(--neutral-07);
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 23px;
  }
`;
const TodayInSalesParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Div = styled.div`
  position: relative;
  letter-spacing: -0.01em;
  line-height: 18px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 23px;
  }
`;
const RealtimeAnalyticsChild = styled.img`
  height: 9.6px;
  width: 62px;
  position: relative;
`;
const RealtimeAnalytics = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--heading-3-03-size);
  color: var(--neutral-07);
`;
const MockupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const InstanceParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-13xl);
`;
const PhoneMockupRoot = styled.div`
  background-color: var(--white);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: var(--gap-13xl);
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--neutral-04);
  font-family: var(--caption-03);
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <PhoneMockupRoot className={className}>
      <MockupContent>
        <TodayInSalesParent>
          <TodayInSales>Today in sales</TodayInSales>
          <SalesChartIcon>$12,472.00</SalesChartIcon>
        </TodayInSalesParent>
        <TodayInSalesParent>
          <TodayInSales>Customers reached</TodayInSales>
          <RealtimeAnalytics>
            <Div>456</Div>
            <RealtimeAnalyticsChild alt="" src="/vector-1.svg" />
          </RealtimeAnalytics>
        </TodayInSalesParent>
      </MockupContent>
      <InstanceParent>
        <FrameComponent7
          number="124"
          heading="Orders Today"
          value="+15%"
          propBackgroundColor="#edfff2"
          propColor="#0eb03b"
        />
        <FrameComponent7
          number="50"
          heading="New customers"
          value="-3%"
          propBackgroundColor="#fff2f2"
          propColor="#b60e0e"
        />
      </InstanceParent>
      <InstanceParent>
        <FrameComponent7
          number="110"
          heading="Delivered"
          value="+36%"
          propBackgroundColor="#edfff2"
          propColor="#0eb03b"
        />
        <FrameComponent7 number="256" heading="Returning" value="+25%" />
      </InstanceParent>
    </PhoneMockupRoot>
  );
};

export default FrameComponent4;
