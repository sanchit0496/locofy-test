import styled from "styled-components";
import PropTypes from "prop-types";

const VuesaxboldfavoriteChartIcon = styled.img`
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
const SalesAnalytics = styled.div`
  height: 13px;
  position: relative;
  line-height: 32px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
`;
const WeMonitorYour = styled.p`
  margin: 0;
`;
const WeMonitorYourContainer = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
`;
const SalesAnalyticsParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 354px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const IconParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  gap: var(--gap-5xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--heading-4-03-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;

const FrameComponent = ({
  className = "",
  vuesaxboldfavoriteChart,
  salesAnalytics,
  weMonitorYourSalesInRealTime,
  determinePatternsForGrowth,
}) => {
  return (
    <IconParentRoot className={className}>
      <Icon>
        <VuesaxboldfavoriteChartIcon alt="" src={vuesaxboldfavoriteChart} />
      </Icon>
      <SalesAnalyticsParent>
        <SalesAnalytics>{salesAnalytics}</SalesAnalytics>
        <WeMonitorYourContainer>
          <WeMonitorYour>{weMonitorYourSalesInRealTime}</WeMonitorYour>
          <WeMonitorYour>{determinePatternsForGrowth}</WeMonitorYour>
        </WeMonitorYourContainer>
      </SalesAnalyticsParent>
    </IconParentRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  vuesaxboldfavoriteChart: PropTypes.string,
  salesAnalytics: PropTypes.string,
  weMonitorYourSalesInRealTime: PropTypes.string,
  determinePatternsForGrowth: PropTypes.string,
};

export default FrameComponent;
