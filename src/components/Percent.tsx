import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type PercentType = {
  className?: string;
  value?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const PerformancePercentValue = styled.div<{
  propColor?: CSSProperties["color"];
}>`
  position: relative;
  line-height: 9px;
  font-weight: 600;
  color: ${(p) => p.propColor};
`;
const PercentRoot = styled.div<{
  propBackgroundColor?: CSSProperties["backgroundColor"];
}>`
  border-radius: var(--br-45xl);
  background-color: var(--success-01);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--success-06);
  font-family: var(--caption-03);
  background-color: ${(p) => p.propBackgroundColor};
`;

const Percent: FunctionComponent<PercentType> = ({
  className = "",
  value = "+25%",
  propBackgroundColor,
  propColor,
}) => {
  return (
    <PercentRoot
      propBackgroundColor={propBackgroundColor}
      className={className}
    >
      <PerformancePercentValue propColor={propColor}>
        {value}
      </PerformancePercentValue>
    </PercentRoot>
  );
};

export default Percent;
