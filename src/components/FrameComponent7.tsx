import { FunctionComponent } from "react";
import styled from "styled-components";
import Percent from "./Percent";

export type FrameComponent7Type = {
  className?: string;
  number?: string;
  heading?: string;
  value?: string;
  propBackgroundColor?: string;
  propColor?: string;
};

const OrdersToday = styled.div`
  height: 9px;
  position: relative;
  line-height: 17px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
`;
const PerformancePercentIcon = styled.div`
  position: relative;
  letter-spacing: -0.01em;
  line-height: 18px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 23px;
  }
`;
const EmployeeHelp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--heading-3-03-size);
  color: var(--neutral-07);
`;
const OrdersTodayParentRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--neutral-04);
  font-family: var(--caption-03);
`;

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
  number = "256",
  heading = "Returning",
  value,
  propBackgroundColor,
  propColor,
}) => {
  return (
    <OrdersTodayParentRoot className={className}>
      <OrdersToday>{heading}</OrdersToday>
      <EmployeeHelp>
        <PerformancePercentIcon>{number}</PerformancePercentIcon>
        <Percent
          value={value}
          propBackgroundColor={propBackgroundColor}
          propColor={propColor}
        />
      </EmployeeHelp>
    </OrdersTodayParentRoot>
  );
};

export default FrameComponent7;
