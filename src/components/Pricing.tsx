import { FunctionComponent } from "react";
import styled from "styled-components";
import FrameComponent1 from "./FrameComponent1";
import Button1 from "./Button1";

export type PricingType = {
  className?: string;
};

const Div = styled.div`
  width: 214px;
  position: relative;
  line-height: 266.5px;
  background: linear-gradient(45deg, #f0f6ff, #fcfdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: none;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-113xl);
    line-height: 160px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-64xl);
    line-height: 107px;
  }
`;
const Div1 = styled.div`
  width: 183px;
  position: relative;
  font-size: var(--font-size-263xl-2);
  line-height: 227.5px;
  background: linear-gradient(45deg, #f0f6ff, #fcfdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: none;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-94xl);
    line-height: 136px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-52xl);
    line-height: 91px;
  }
`;
const Icon = styled.img`
  height: 563.7px;
  width: 313.2px;
  position: absolute;
  margin: 0 !important;
  top: -149.5px;
  left: 307px;
`;
const Icon1 = styled.img`
  height: 315px;
  width: 175px;
  position: absolute;
  margin: 0 !important;
  top: -227.5px;
  right: 121px;
`;
const Icon2 = styled.img`
  height: 315px;
  width: 175px;
  position: absolute;
  margin: 0 !important;
  top: -239.5px;
  left: -2px;
`;
const Pricing1 = styled.h1`
  margin: 0;
  height: 30px;
  position: relative;
  font-size: inherit;
  line-height: 48px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-13xl);
    line-height: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--heading-3-03-size);
    line-height: 29px;
  }
`;
const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ChooseAPlan = styled.div`
  height: 13px;
  position: relative;
  font-size: var(--heading-4-03-size);
  line-height: 28px;
  display: inline-block;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const SmallChain = styled.div`
  position: relative;
  line-height: 13px;
  font-weight: 500;
`;
const Div2 = styled.div`
  position: relative;
  line-height: 10px;
  font-weight: 600;
`;
const BestSeller = styled.div`
  position: relative;
  font-size: var(--caption-03-size);
  line-height: 9px;
  font-weight: 600;
  color: var(--color-darkgoldenrod);
`;
const Group = styled.div`
  width: 114px;
  border-radius: var(--br-5xl);
  background-color: var(--color-oldlace);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  font-size: var(--body-2-04-size);
`;
const SmallChainParent = styled.div`
  align-self: stretch;
  height: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xl);
`;
const Span = styled.span`
  letter-spacing: -0.01em;
  line-height: 58px;
`;
const Month = styled.span`
  font-size: var(--body-2-04-size);
  line-height: 20px;
  color: var(--neutral-04);
`;
const Month1 = styled.div`
  height: 36px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  font-size: var(--font-size-29xl);
  color: var(--neutral-08);
`;
const DriversVehiclesLicenses = styled.li``;
const DriversVehiclesLicensesAn = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-lgi);
`;
const DriversVehiclesLicensesContainer = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
`;
const UnlimitedDeliveriesAndContainer = styled.div`
  align-self: stretch;
  height: 10px;
  position: relative;
  line-height: 22px;
  display: inline-block;
`;
const ChainDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--body-2-04-size);
  color: var(--neutral-05);
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const FrameDiv = styled.div`
  flex: 1;
  box-shadow: 0px 12px 24px rgba(37, 98, 204, 0.12);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  border: 2px solid var(--primary-05);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-21xl) var(--padding-19xl);
  min-width: 264px;
  min-height: 529px;
  max-width: 100%;
  @media screen and (max-width: 1400px) {
    min-height: auto;
  }
  @media screen and (max-width: 825px) {
    padding-top: var(--padding-7xl);
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
  }
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-13xl);
  max-width: 100%;
  font-size: var(--heading-4-03-size);
  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 825px) {
    gap: var(--gap-base);
  }
`;
const FrameParent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 825px) {
    gap: var(--gap-5xl);
  }
`;
const Parent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  font-size: var(--heading-1-02-size);
`;
const PricingRoot = styled.section`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-95xl-5) var(--padding-141xl) var(--padding-94xl-5);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-311xl-6);
  color: var(--neutral-07);
  font-family: var(--caption-03);
  @media screen and (max-width: 1200px) {
    padding-top: var(--padding-55xl);
    padding-bottom: var(--padding-55xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    padding-left: var(--padding-61xl);
    padding-right: var(--padding-61xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding: var(--padding-29xl) var(--padding-xl);
    box-sizing: border-box;
  }
`;

const Pricing: FunctionComponent<PricingType> = ({ className = "" }) => {
  return (
    <PricingRoot className={className}>
      <Div>$</Div>
      <Div1>$</Div1>
      <Parent1>
        <Icon loading="lazy" alt="" src="/.svg" />
        <Icon1 loading="lazy" alt="" src="/-1.svg" />
        <Icon2 loading="lazy" alt="" src="/-1.svg" />
        <FrameParent1>
          <FrameGroup>
            <PricingWrapper>
              <Pricing1>Pricing</Pricing1>
            </PricingWrapper>
            <ChooseAPlan>
              Choose a plan that suits your business best!
            </ChooseAPlan>
          </FrameGroup>
          <FrameContainer>
            <FrameComponent1
              singleRestaurant="Single restaurant"
              prop="$10"
              upTo20DriversTracked="up to 20 drivers tracked"
              manageSchelulesPricesAndOffer="manage schelules, prices and offer"
              unlimitedDeliveries="unlimited deliveries"
              basicAITools="Basic AI tools"
              bestChoiceForYourRestaurant="Best choice for your restaurant install and start deliveries today!"
              button="Choose this plan"
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="stretch"
            />
            <FrameDiv>
              <FrameParent>
                <SmallChainParent>
                  <SmallChain>Small chain</SmallChain>
                  <Group>
                    <Div2>🏆</Div2>
                    <BestSeller>Best seller</BestSeller>
                  </Group>
                </SmallChainParent>
                <Month1>
                  <Span>$50</Span>
                  <Month>/month</Month>
                </Month1>
                <ChainDescription>
                  <DriversVehiclesLicensesContainer>
                    <DriversVehiclesLicensesAn>
                      <DriversVehiclesLicenses>
                        300 drivers, vehicles, licenses and more
                      </DriversVehiclesLicenses>
                    </DriversVehiclesLicensesAn>
                  </DriversVehiclesLicensesContainer>
                  <DriversVehiclesLicensesContainer>
                    <DriversVehiclesLicensesAn>
                      <DriversVehiclesLicenses>
                        Pro scheduling, price levels and multiple offers
                      </DriversVehiclesLicenses>
                    </DriversVehiclesLicensesAn>
                  </DriversVehiclesLicensesContainer>
                  <UnlimitedDeliveriesAndContainer>
                    <DriversVehiclesLicensesAn>
                      <DriversVehiclesLicenses>
                        unlimited deliveries and orders
                      </DriversVehiclesLicenses>
                    </DriversVehiclesLicensesAn>
                  </UnlimitedDeliveriesAndContainer>
                  <UnlimitedDeliveriesAndContainer>
                    <DriversVehiclesLicensesAn>
                      <DriversVehiclesLicenses>
                        Pro AI tools and smart bot
                      </DriversVehiclesLicenses>
                    </DriversVehiclesLicensesAn>
                  </UnlimitedDeliveriesAndContainer>
                  <DriversVehiclesLicensesContainer>
                    <DriversVehiclesLicensesAn>
                      <DriversVehiclesLicenses>
                        Grow and expand your business like never before!
                      </DriversVehiclesLicenses>
                    </DriversVehiclesLicensesAn>
                  </DriversVehiclesLicensesContainer>
                </ChainDescription>
              </FrameParent>
              <Button1
                button="Choose this plan"
                propFlex="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
              />
            </FrameDiv>
            <FrameComponent1
              singleRestaurant="Enterprise"
              prop="$75+"
              propHeight="unset"
              propDisplay="unset"
              upTo20DriversTracked="unlimited drivers, licenses, vehicles and more"
              propHeight1="unset"
              propDisplay1="unset"
              manageSchelulesPricesAndOffer="Pro+scheduling price levels and multiple offers"
              unlimitedDeliveries="Unlimited deliveries and orders"
              basicAITools="Self-deployment for better security"
              bestChoiceForYourRestaurant="A big business doesn’t have to be difficult to manage!"
              button="Choose this plan"
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="stretch"
            />
          </FrameContainer>
        </FrameParent1>
      </Parent1>
    </PricingRoot>
  );
};

export default Pricing;
