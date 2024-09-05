import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`
  position: absolute;
  top: 19px;
  left: 8px;
  line-height: 17px;
  font-weight: 600;
  display: none;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--success-05);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Parent1 = styled.div`
  height: 48px;
  width: 48px;
  position: relative;
`;
const ProgressInSales = styled.p`
  margin: 0;
`;
const ProgressInSalesContainer = styled.div`
  position: relative;
  line-height: 17px;
  font-weight: 500;
`;
const StoryProgressCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) 0px 0px;
`;
const StoryProgressRoot = styled.div`width: 191px;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  border-radius: var(--br-63xl);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-xs);
  z-index: 5;
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
  margin: ${(p) => p.propMargin}
  position: ${(p) => p.propPosition}
  bottom: ${(p) => p.propBottom}
  left: ${(p) => p.propLeft}
`;

const PhoneGraphProgress = ({
  className = "",
  propMargin,
  propPosition,
  propBottom,
  propLeft,
}) => {
  return (
    <StoryProgressRoot
      propMargin={propMargin}
      propPosition={propPosition}
      propBottom={propBottom}
      propLeft={propLeft}
      className={className}
    >
      <Parent1>
        <Div>+21%</Div>
        <FrameChild />
      </Parent1>
      <StoryProgressCaption>
        <ProgressInSalesContainer>
          <ProgressInSales>Progress in sales</ProgressInSales>
          <ProgressInSales>this month</ProgressInSales>
        </ProgressInSalesContainer>
      </StoryProgressCaption>
    </StoryProgressRoot>
  );
};

PhoneGraphProgress.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
  propPosition: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
};

export default PhoneGraphProgress;
