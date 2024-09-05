import { Button } from "@mui/material";
import styled from "styled-components";
import Communicate from "./Communicate";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  height: calc(100% - 296.8px);
  width: calc(100% - 296.8px);
  position: absolute;
  margin: 0 !important;
  top: 506.57px;
  right: 296.8px;
  bottom: -209.77px;
  left: 0px;
  border-radius: var(--br-111xl);
  background: linear-gradient(45deg, #f0f6ff, #fcfdff);
  transform: rotate(-45deg);
  transform-origin: 0 0;
`;
const Iphone12MockupFrontView = styled.img`
  height: 413.8px;
  width: 292.4px;
  position: absolute;
  margin: 0 !important;
  right: 270.8px;
  bottom: 282.4px;
  object-fit: contain;
  z-index: 3;
`;
const RectangleParent = styled.div`
  margin-top: -335px;
  width: 1013.2px;
  height: 1013.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  flex-shrink: 0;
  max-width: 152%;
`;
const CallCustomer = styled.div`
  position: relative;
  line-height: 9px;
  font-weight: 600;
`;
const Div = styled.div`
  position: relative;
  font-size: var(--body-2-04-size);
  line-height: 10px;
  font-weight: 600;
  color: var(--primary-08);
`;
const CallingButtons = styled.div`
  box-shadow: 0px 4px 9px rgba(39, 97, 197, 0.2);
  border-radius: var(--br-63xl);
  background-color: var(--primary-09);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-9xs);
  z-index: 1;
`;
const CallingCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-xl);
`;
const AwaitingOrder = styled.div`
  position: relative;
  line-height: 10px;
  font-weight: 600;
`;
const InDelivery = styled.div`
  position: relative;
  font-size: var(--caption-03-size);
  line-height: 9px;
  font-weight: 600;
  color: var(--success-06);
`;
const OrderStatus = styled.div`
  align-self: stretch;
  border-radius: var(--br-base) var(--br-base) 0px 0px;
  background-color: var(--white);
  border-bottom: 0.5px solid var(--neutral-01);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xl) var(--padding-xl) var(--padding-lgi);
  gap: var(--gap-xl);
`;
const VuesaxboldlocationIcon = styled.img`
  height: 18px;
  width: 18px;
  position: relative;
`;
const HillmoreSt121a = styled.div`
  height: 9px;
  position: relative;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
`;
const LocationAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const NewYork = styled.div`
  position: relative;
  line-height: 9px;
  font-weight: 500;
`;
const LocationCity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xl);
  color: var(--neutral-02);
`;
const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--gap-7xs);
`;
const Pm = styled.div`
  height: 10px;
  position: relative;
  font-size: var(--body-2-04-size);
  line-height: 20px;
  font-weight: 600;
  color: var(--neutral-05);
  display: inline-block;
  white-space: nowrap;
`;
const LocationCard = styled.div`
  align-self: stretch;
  border-radius: 0px 0px var(--br-base) var(--br-base);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xl);
  gap: var(--gap-xl);
  font-size: var(--caption-03-size);
`;
const OrdersCard = styled.div`
  align-self: stretch;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -10px;
  font-size: var(--body-2-04-size);
  color: var(--neutral-07);
`;
const CallingCardParent = styled.div`
  width: 285px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  z-index: 2;
`;
const DriverButtons = styled.div`
  box-shadow: 0px 4px 9px rgba(39, 97, 197, 0.2);
  border-radius: var(--br-63xl);
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-9xs);
  z-index: 1;
`;
const ActiveDriverCount = styled.div`
  align-self: stretch;
  border-radius: var(--br-base) var(--br-base) 0px 0px;
  background-color: var(--white);
  border-bottom: 0.5px solid var(--neutral-01);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-xl) var(--padding-lgi);
  white-space: nowrap;
`;
const AvatarIcon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
`;
const DeliveriesToday = styled.div`
  height: 9px;
  position: relative;
  line-height: 17px;
  font-weight: 500;
  color: var(--neutral-02);
  display: inline-block;
`;
const DriverInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const DriverItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-2xs);
`;
const ActiveDriverListChild = styled.img`
  align-self: stretch;
  width: 46px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
  min-height: 32px;
`;
const ActiveDriverList = styled.div`
  align-self: stretch;
  border-radius: 0px 0px var(--br-base) var(--br-base);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-xl);
  gap: var(--gap-xl);
  font-size: var(--caption-03-size);
`;
const ActiveDrivers = styled.div`
  align-self: stretch;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -16px;
  font-size: var(--body-2-04-size);
  color: var(--neutral-07);
`;
const DriverActionsParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  z-index: 2;
`;
const DriversCard = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-smi);
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const FrameContainer = styled.div`
  width: 298px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
  min-width: 298px;
  @media screen and (max-width: 1400px) {
    flex: 1;
  }
`;
const Title1 = styled(Button)`
  width: 186px;
  height: 41px;
`;
const GreatCommunicationMeans = styled.h1`
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
const TestimonialHeading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const CommunicationIsKey = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
`;
const CommunicationCard = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--heading-4-03-size);
  @media screen and (max-width: 825px) {
    gap: var(--gap-base);
  }
`;
const TestimonialHeadingParent = styled.div`
  width: 544px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  min-width: 544px;
  max-width: 100%;
  font-size: var(--heading-1-02-size);
  color: var(--neutral-07);
  @media screen and (max-width: 1400px) {
    flex: 1;
    min-width: 100%;
  }
  @media screen and (max-width: 825px) {
    gap: var(--gap-5xl);
  }
`;
const FrameGroup = styled.div`
  width: 968px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;
const FrameWrapper = styled.div`
  width: 1744px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameItem = styled.div`
  position: absolute;
  top: calc(50% + 29px);
  left: calc(50% - 1000px);
  border-top: 3px solid var(--success-06);
  box-sizing: border-box;
  width: 2003px;
  height: 3px;
`;
const CommunicateParent = styled.div`
  position: absolute;
  top: calc(50% - 51px);
  left: calc(50% - 514px);
  width: 1027px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const LineParent = styled.div`
  align-self: stretch;
  height: 102px;
  position: relative;
  max-width: 100%;
  text-align: center;
  font-size: var(--body-2-04-size);
  color: var(--neutral-07);
  @media screen and (max-width: 1200px) {
    height: auto;
    min-height: 102;
  }
`;
const FrameParent = styled.div`
  margin-right: -1040.8px;
  width: 2000px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-144xl);
  flex-shrink: 0;
  max-width: 300%;
  z-index: 1;
  margin-top: -678.2px;
  @media screen and (max-width: 1400px) {
    gap: var(--gap-62xl);
  }
  @media screen and (max-width: 825px) {
    gap: var(--gap-22xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const FeatureRoot = styled.section`
  align-self: stretch;
  height: 800px;
  background-color: var(--white);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-106xl) var(--padding-753xl) var(--padding-67xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--white);
  font-family: var(--caption-03);
  @media screen and (max-width: 1400px) {
    height: auto;
    padding-right: var(--padding-367xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1200px) {
    padding-top: var(--padding-62xl);
    padding-bottom: var(--padding-37xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    padding-top: var(--padding-34xl);
    padding-right: var(--padding-174xl);
    padding-bottom: var(--padding-17xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const Feature = ({ className = "" }) => {
  return (
    <FeatureRoot className={className}>
      <RectangleParent>
        <FrameChild />
        <Iphone12MockupFrontView
          alt=""
          src="/iphone-12-mockup-front-view@2x.png"
        />
      </RectangleParent>
      <FrameParent>
        <FrameWrapper>
          <FrameGroup>
            <FrameContainer>
              <FrameDiv>
                <CallingCardParent>
                  <CallingCard>
                    <CallingButtons>
                      <CallCustomer>Call customer</CallCustomer>
                      <Div>💬</Div>
                    </CallingButtons>
                  </CallingCard>
                  <OrdersCard>
                    <OrderStatus>
                      <AwaitingOrder>Awaiting order</AwaitingOrder>
                      <InDelivery>In delivery</InDelivery>
                    </OrderStatus>
                    <LocationCard>
                      <LocationDetails>
                        <LocationAddress>
                          <VuesaxboldlocationIcon
                            alt=""
                            src="/vuesaxboldlocation.svg"
                          />
                          <HillmoreSt121a>Hillmore St 121A</HillmoreSt121a>
                        </LocationAddress>
                        <LocationCity>
                          <NewYork>New York</NewYork>
                        </LocationCity>
                      </LocationDetails>
                      <Pm>12:20 PM</Pm>
                    </LocationCard>
                  </OrdersCard>
                </CallingCardParent>
                <DriversCard>
                  <DriverActionsParent>
                    <CallingCard>
                      <DriverButtons>
                        <CallCustomer>Call driver</CallCustomer>
                        <Div>👋</Div>
                      </DriverButtons>
                    </CallingCard>
                    <ActiveDrivers>
                      <ActiveDriverCount>
                        <AwaitingOrder>Active drivers</AwaitingOrder>
                      </ActiveDriverCount>
                      <ActiveDriverList>
                        <DriverItem>
                          <AvatarIcon alt="" src="/avatar-2.svg" />
                          <DriverInfo>
                            <HillmoreSt121a>Mick Morrison</HillmoreSt121a>
                            <DeliveriesToday>
                              21 deliveries Today
                            </DeliveriesToday>
                          </DriverInfo>
                        </DriverItem>
                        <ActiveDriverListChild alt="" src="/frame-943@2x.png" />
                      </ActiveDriverList>
                    </ActiveDrivers>
                  </DriverActionsParent>
                </DriversCard>
              </FrameDiv>
            </FrameContainer>
            <TestimonialHeadingParent>
              <TestimonialHeading>
                <Title1
                  disableElevation
                  variant="contained"
                  sx={{
                    color: "linear-gradient(249.46deg, #2878ff, #2c65c8)",
                    fontSize: "12",
                    background: "#f1f6ff",
                    borderRadius: "8px",
                    "&:hover": { background: "#f1f6ff" },
                    width: 186,
                    height: 41,
                  }}
                >
                  COMMUNICATION
                </Title1>
                <GreatCommunicationMeans>
                  Great communication means more time and profit
                </GreatCommunicationMeans>
              </TestimonialHeading>
              <CommunicationCard>
                <CommunicationIsKey>
                  Communication is key! That’s why we make it easy and
                  hassle-free, so you don’t waster time on unnecessary
                  interactions.
                </CommunicationIsKey>
                <CommunicationIsKey>
                  Keep track of your employees, drivers and vehicles, manage
                  social media and stay in touch with your customers.
                </CommunicationIsKey>
              </CommunicationCard>
            </TestimonialHeadingParent>
          </FrameGroup>
        </FrameWrapper>
        <LineParent>
          <FrameItem />
          <CommunicateParent>
            <Communicate
              manageDeliveriesWith="Communicate with your"
              yourSuppliers="employees"
              group16="/group-16.svg"
            />
            <Communicate
              manageDeliveriesWith="Track both drivers"
              yourSuppliers="and orders"
              group16="/group-16-1.svg"
            />
            <Communicate
              manageDeliveriesWith="Keep in touch with"
              yourSuppliers="the customers"
              group16="/group-16-1.svg"
            />
            <Communicate
              manageDeliveriesWith="Manage deliveries with"
              yourSuppliers="your suppliers"
              group16="/group-16-1.svg"
            />
          </CommunicateParent>
        </LineParent>
      </FrameParent>
    </FeatureRoot>
  );
};

Feature.propTypes = {
  className: PropTypes.string,
};

export default Feature;
