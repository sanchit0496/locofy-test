import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import TestimonialCards from "../components/TestimonialCards";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import Feature from "../components/Feature";
import FrameComponent from "../components/FrameComponent";
import FrameComponent5 from "../components/FrameComponent5";
import GraphContainer from "../components/GraphContainer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import OurStory from "../components/OurStory";
import BoostContainer from "../components/BoostContainer";
import Footer from "../components/Footer";

const HeaderImage = styled.div`
  width: 344.6px;
  height: 344.6px;
  position: absolute;
  margin: 0 !important;
  top: -56.71px;
  left: 391.4px;
  border-radius: 64.1px;
  background: linear-gradient(
    -45deg,
    rgba(214, 230, 255, 0.3),
    rgba(242, 247, 255, 0.3)
  );
  transform: rotate(113.1deg);
  transform-origin: 0 0;
`;
const TrustedBrands = styled.div`
  position: absolute;
  top: 19.72px;
  left: 0px;
  border-radius: var(--br-10xs-2);
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  width: 9.5px;
  height: 9.5px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
`;
const TestimonialsLayout = styled.div`
  position: absolute;
  top: 27.72px;
  left: 8.8px;
  border-radius: var(--br-10xs-2);
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  width: 9.5px;
  height: 9.5px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 9.26px;
  left: 6.2px;
  border-radius: var(--br-10xs-5);
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  width: 13.1px;
  height: 13.1px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 19.72px;
  left: 17.6px;
  border-radius: var(--br-10xs-2);
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  width: 9.5px;
  height: 9.5px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
  z-index: 2;
`;
const TrustedBrandsParent = styled.div`
  height: 34.5px;
  width: 31px;
  position: relative;
`;
const Plateform = styled.div`
  height: 10px;
  position: relative;
  line-height: 150%;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
`;
const TrustedBrands1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi-2) 0px 0px;
`;
const BrandsLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const AboutUs1 = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 20px;
  font-weight: 500;
  color: inherit;
  white-space: nowrap;
`;
const Features = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 132px;
  line-height: 20px;
  font-weight: 500;
  color: inherit;
`;
const Testimonials1 = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 263px;
  line-height: 20px;
  font-weight: 500;
  color: inherit;
`;
const Intergrations = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 418px;
  line-height: 20px;
  font-weight: 500;
  color: inherit;
`;
const Pricing1 = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 576px;
  line-height: 20px;
  font-weight: 500;
  color: inherit;
`;
const FooterTop = styled.nav`
  margin: 0;
  align-self: stretch;
  height: 10px;
  position: relative;
  text-align: left;
  font-size: var(--body-2-04-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;
const FooterContainer = styled.nav`
  margin: 0;
  width: 623px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi-2) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    display: none;
  }
`;
const ContentLayout = styled.header`
  width: 1220px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  flex-shrink: 0;
  top: 0;
  z-index: 99;
  position: sticky;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--body-2-04-size);
  color: var(--primary-09);
  font-family: var(--caption-03);
  @media screen and (max-width: 825px) {
    width: 597px;
  }
`;
const ChartContainer = styled.div`
  height: 236.3px;
  width: 236.3px;
  position: absolute;
  margin: 0 !important;
  bottom: 387.29px;
  left: 138.76px;
  border-radius: 44px;
  background: linear-gradient(
    -45deg,
    rgba(214, 230, 255, 0.3),
    rgba(242, 247, 255, 0.3)
  );
  transform: rotate(51deg);
  transform-origin: 0 0;
`;
const Chart = styled.div`
  position: absolute;
  top: 51.01px;
  left: 183.82px;
  border-radius: 36.9px;
  background: linear-gradient(
    -45deg,
    rgba(214, 230, 255, 0.3),
    rgba(242, 247, 255, 0.3)
  );
  width: 198.2px;
  height: 198.2px;
  transform: rotate(68deg);
  transform-origin: 0 0;
`;
const PlaceholderIcon = styled.img`
  position: absolute;
  top: 13.1px;
  left: 1.1px;
  width: 698.9px;
  height: 698.9px;
  object-fit: cover;
`;
const Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
`;
const Div = styled.div`
  position: absolute;
  top: 31px;
  left: 20px;
  line-height: 17px;
  font-weight: 600;
  display: none;
`;
const Decor01Child = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  border-radius: 50%;
  background-color: var(--success-05);
  width: 48px;
  height: 48px;
  z-index: 1;
`;
const ProgressInSales = styled.p`
  margin: 0;
`;
const ProgressInSalesContainer = styled.div`
  position: absolute;
  top: 23px;
  left: 72px;
  line-height: 17px;
  font-weight: 500;
`;
const Decor = styled.div`
  position: absolute;
  top: 287px;
  left: 87.3px;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  border-radius: var(--br-63xl);
  background-color: var(--white);
  width: 191px;
  height: 72px;
  z-index: 3;
`;
const ClientsProgressChild = styled.div`
  position: absolute;
  width: calc(100% - 16px);
  top: 8px;
  right: 8px;
  left: 8px;
  border-radius: 50%;
  border: 0px solid var(--white);
  box-sizing: border-box;
  height: 94px;
  opacity: 0.5;
  z-index: 3;
`;
const ClientsProgressItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  border: 0px solid var(--white);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 4;
`;
const ClientsProgressInner = styled.img`
  position: absolute;
  top: 17px;
  left: 17px;
  width: 76px;
  height: 76px;
  z-index: 5;
`;
const ClientsProgress = styled.div`
  position: absolute;
  top: 219px;
  left: 569.3px;
  width: 110px;
  height: 110px;
`;
const NewClients = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  line-height: 17px;
  font-weight: 500;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xl);
  background-color: var(--neutral-01);
  width: 100%;
  height: 100%;
  display: none;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xl);
  background-color: var(--success-05);
  width: 53px;
  height: 4px;
  z-index: 1;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 45px;
  left: 24px;
  border-radius: var(--br-8xl);
  background-color: var(--neutral-01);
  width: 74px;
  height: 4px;
`;
const Span = styled.span``;
const Span1 = styled.span`
  color: var(--neutral-07);
`;
const ClientBarSpacingContainer = styled.div`
  position: absolute;
  top: 61px;
  left: 24px;
  line-height: 17px;
  font-weight: 500;
  color: var(--success-05);
`;
const Returning = styled.div`
  position: absolute;
  top: 24px;
  left: 122px;
  line-height: 17px;
  font-weight: 500;
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xl);
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  width: 53px;
  height: 4px;
  z-index: 1;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 45px;
  left: 122px;
  border-radius: var(--br-8xl);
  background-color: var(--neutral-01);
  width: 74px;
  height: 4px;
`;
const Span2 = styled.span`
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ClientBarSpacingContainer1 = styled.div`
  position: absolute;
  top: 61px;
  left: 122px;
  line-height: 17px;
  font-weight: 500;
  color: var(--success-05);
`;
const Decor1 = styled.div`
  position: absolute;
  top: 558px;
  left: 478.3px;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  border-radius: 20px;
  background-color: var(--white);
  width: 220px;
  height: 94px;
  z-index: 3;
`;
const AvatarIcon = styled.img`
  position: absolute;
  top: 587px;
  left: 126.3px;
  width: 56px;
  height: 56px;
  z-index: 3;
`;
const Vuesaxboldbag2Icon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;
const NewOrder = styled.div`
  height: 9px;
  position: relative;
  font-size: var(--caption-03-size);
  line-height: 17px;
  font-weight: 500;
  font-family: var(--caption-03);
  color: var(--neutral-07);
  text-align: left;
  display: inline-block;
`;
const NewOrderLabel = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-5xs) var(--padding-base);
  background-color: var(--white);
  position: absolute;
  top: 569px;
  left: 166.3px;
  box-shadow: 0px 4px 9px rgba(39, 97, 197, 0.2);
  border-radius: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  white-space: nowrap;
  z-index: 4;
  &:hover {
    background-color: #e6e6e6;
  }
`;
const NewOrderIndicatorChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 4px 9px rgba(39, 97, 197, 0.2);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  width: 100%;
  height: 100%;
  display: none;
`;
const NewOrderIndicatorItem = styled.img`
  position: absolute;
  top: 12.5px;
  left: 20.5px;
  width: 31.5px;
  height: 42.1px;
  z-index: 4;
`;
const NewOrderIndicator = styled.div`
  position: absolute;
  top: 119px;
  left: 205.3px;
  box-shadow: 0px 4px 9px rgba(39, 97, 197, 0.2);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  width: 74px;
  height: 74px;
  z-index: 3;
`;
const Calling = styled.div`
  position: relative;
  line-height: 9px;
  font-weight: 600;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 104px;
  left: 259.3px;
  border-radius: var(--br-52xl);
  background-color: var(--success-05);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs);
  z-index: 4;
  color: var(--white);
`;
const LegendContent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 698.9px;
  background-image: url("/161082337161082337-2@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
`;
const PlaceholderParent = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 131.7px;
  width: 699.9px;
  z-index: 2;
`;
const ChartContent = styled.div`
  height: 712px;
  width: 831.6px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 110.4px;
`;
const FrameChild2 = styled.div`
  width: 778.3px;
  height: calc(100% - 322.4px);
  position: absolute;
  margin: 0 !important;
  top: -0.01px;
  right: -528.65px;
  bottom: 322.41px;
  border-radius: var(--br-111xl);
  background: linear-gradient(-45deg, #d9e8ff, #f2f7ff);
  transform: rotate(45deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const CallingWrapper = styled.div`
  border-radius: var(--br-52xl);
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  z-index: 6;
`;
const RectangleContainer = styled.div`
  align-self: stretch;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 236px 106px;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    padding-top: var(--padding-134xl);
    padding-bottom: var(--padding-134xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const CallingChart = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
  color: var(--white);
`;
const ChartContainerParent = styled.div`
  align-self: stretch;
  height: 1100.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
`;
const FooterStats = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 1101px;
  flex-shrink: 0;
  max-width: 100%;
`;
const Header = styled.section`
  align-self: stretch;
  height: 800px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-29xl) 0px 717.5px 120px;
  box-sizing: border-box;
  position: relative;
  gap: 19.5px;
  max-width: 100%;
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
  @media screen and (max-width: 1400px) {
    padding-top: 31px;
    padding-bottom: 466px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1200px) {
    padding-top: var(--padding-xl);
    padding-bottom: 303px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    padding-left: var(--padding-41xl);
    padding-bottom: 197px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    height: auto;
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ThisIsPlateform = styled.b`
  position: relative;
  letter-spacing: 0.2em;
  line-height: 9px;
  text-transform: uppercase;
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Title1 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-01);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xl);
  white-space: nowrap;
`;
const RestaurantReimagined = styled.h1`
  margin: 0;
  height: 30px;
  position: relative;
  font-size: var(--heading-1-02-size);
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
const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const WeAreOneStopContainer = styled.div`
  width: 580px;
  position: relative;
  font-size: var(--heading-4-03-size);
  line-height: 28px;
  text-align: center;
  display: inline-block;
  max-width: 100%;
`;
const VuesaxboldtruckFastIcon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
`;
const Icon1 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--primary-01);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const FastToDeploy = styled.div`
  height: 10px;
  position: relative;
  line-height: 20px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
`;
const IconParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Features1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-45xl);
  font-size: var(--body-2-04-size);
  @media screen and (max-width: 825px) {
    gap: var(--gap-13xl);
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const TestimonialCard1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  max-width: 100%;
  @media screen and (max-width: 825px) {
    gap: var(--gap-5xl);
  }
`;
const TestimonialCardWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  z-index: unset;
`;
const SoftwareBuildFor = styled.b`
  position: relative;
  letter-spacing: 0.2em;
  line-height: 10px;
  text-transform: uppercase;
`;
const SoftwareBuildForAndTrustedWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  z-index: unset;
`;
const Image11Icon = styled.img`
  position: absolute;
  top: 16.4px;
  left: 0px;
  width: 120px;
  height: 100.8px;
  object-fit: cover;
`;
const Image11Wrapper = styled.div`
  height: 120px;
  width: 120px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Image8Icon = styled.img`
  position: absolute;
  top: 17.6px;
  left: 14.8px;
  width: 95.6px;
  height: 84px;
  object-fit: cover;
`;
const Image12Icon = styled.img`
  position: absolute;
  top: 16.8px;
  left: 0px;
  width: 113.6px;
  height: 103.2px;
  object-fit: cover;
`;
const Image9Icon = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 14.8px;
  max-height: 100%;
  width: 105.2px;
  object-fit: cover;
`;
const BrandLogoTwo = styled.img`
  height: 120px;
  width: 120px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 120px;
`;
const Image16Icon = styled.img`
  position: absolute;
  top: 15.6px;
  left: 0px;
  width: 120px;
  height: 104.4px;
  object-fit: cover;
`;
const LogoGrid = styled.div`
  width: 1460px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
`;
const FrameParent = styled.div`
  margin-left: -60px;
  width: 1560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  flex-shrink: 0;
  max-width: 109%;
  @media screen and (max-width: 825px) {
    gap: var(--gap-base);
  }
`;
const AboutUsInner = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  font-size: var(--body-2-04-size);
  color: var(--neutral-03);
`;
const AboutUs2 = styled.section`
  align-self: stretch;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-58xl-5) 0px;
  box-sizing: border-box;
  gap: var(--gap-141xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--caption-03-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
  @media screen and (max-width: 825px) {
    gap: var(--gap-61xl);
    padding-top: var(--padding-31xl);
    padding-bottom: var(--padding-31xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-21xl);
    padding-top: var(--padding-13xl);
    padding-bottom: var(--padding-13xl);
    box-sizing: border-box;
  }
`;
const Feature1Child = styled.div`
  height: 232.6px;
  width: 232.6px;
  position: relative;
  border-radius: 38px;
  background-color: #f5f9ff;
  transform: rotate(135deg);
  display: none;
  z-index: 0;
`;
const AvatarIcon1 = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
`;
const HelloAngelina = styled.div`
  height: 12px;
  position: relative;
  line-height: 22px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
`;
const AvatarParent = styled.div`
  border-radius: var(--br-5xl) var(--br-5xl) 0px 0px;
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl) 238px var(--padding-xl) var(--padding-5xl);
  gap: var(--gap-xs);
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const MostPolular = styled.div`
  height: 9px;
  position: relative;
  line-height: 17px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
`;
const PizzaaTomate = styled.div`
  height: 13px;
  position: relative;
  font-size: var(--heading-4-03-size);
  line-height: 28px;
  color: var(--neutral-07);
  display: flex;
  align-items: flex-end;
`;
const PizzaTypes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Popularity = styled.div`
  align-self: stretch;
  border-radius: 0px 0px var(--br-5xl) var(--br-5xl);
  background-color: var(--white);
  border-top: 1px solid var(--neutral-01);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xl) 97px var(--padding-5xl) var(--padding-5xl);
  gap: var(--gap-xl);
  font-size: var(--caption-03-size);
  color: var(--neutral-04);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const GroupIcon = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div1 = styled.div`
  position: relative;
  line-height: 13px;
  font-weight: 600;
  z-index: 1;
`;
const FrameContainer = styled.div`
  margin: 0 !important;
  position: absolute;
  top: -13px;
  right: 182px;
  filter: drop-shadow(0px 4px 8px rgba(29, 72, 145, 0.6));
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12.8px var(--padding-base) 18.2px;
  z-index: 3;
  font-size: 17.9px;
`;
const FrameGroup = styled.div`
  width: 430px;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
  z-index: 1;
`;
const FrameChild3 = styled.img`
  position: absolute;
  top: 585.6px;
  left: 45.3px;
  width: 148.2px;
  height: 142.3px;
  object-fit: contain;
  z-index: 3;
`;
const FrameChild4 = styled.div`
  position: absolute;
  top: 506.57px;
  left: 0px;
  border-radius: var(--br-111xl);
  background: linear-gradient(45deg, #f0f6ff, #fcfdff);
  width: 716.4px;
  height: 716.4px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
`;
const FooterCommunicationIcon = styled.img`
  position: absolute;
  top: 644.5px;
  left: 519.3px;
  width: 119.4px;
  height: 112.4px;
  object-fit: cover;
  z-index: 3;
`;
const FrameChild5 = styled.div`
  position: absolute;
  top: 44.56px;
  left: 19px;
  filter: blur(15px);
  border-radius: 10px;
  background-color: var(--color-darkslateblue-100);
  width: 96.8px;
  height: 95.4px;
  transform: rotate(-15.3deg);
  transform-origin: 0 0;
`;
const Image23Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 332.5px;
  left: 481px;
  width: 151px;
  height: 143px;
  z-index: 3;
`;
const FirstBenefitTriangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
const FrameDiv = styled.div`
  height: 1013.2px;
  width: 745px;
  position: absolute;
  margin: 0 !important;
  top: -234.5px;
  right: 0px;
`;
const Feature2 = styled.section`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 170px 180px;
  box-sizing: border-box;
  position: relative;
  min-height: 800px;
  max-width: 100%;
  text-align: left;
  font-size: var(--body-1-03-size);
  color: var(--white);
  font-family: var(--caption-03);
  @media screen and (max-width: 825px) {
    padding: 110px 90px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Title2 = styled(Button)`
  width: 134px;
  height: 41px;
`;
const WeAnalyseYour = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.01em;
  line-height: 48px;
  font-weight: 600;
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
const TitleParent = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  max-width: 100%;
`;
const FrameParent2 = styled.div`
  position: absolute;
  top: calc(50% - 300px);
  left: 120px;
  width: 632px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  max-width: 100%;
  z-index: 1;
`;
const SalesThisMonth = styled.div`
  height: 12px;
  position: relative;
  line-height: 22px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
`;
const K = styled.div`
  height: 10px;
  position: relative;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
`;
const K1 = styled.div`
  position: relative;
  line-height: 10px;
  font-weight: 500;
`;
const FirstPointHighlight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 7px;
`;
const SecondPointHighlight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-3xs);
`;
const K2 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  opacity: 0;
`;
const ThirdPointHighlight = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-7xs);
  color: var(--neutral-05);
`;
const KParent = styled.div`
  height: 127px;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 29px;
`;
const BenefitSpacing = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--neutral-01);
  box-sizing: border-box;
`;
const Div2 = styled.div`
  position: relative;
  line-height: 9px;
  font-weight: 500;
  white-space: pre-wrap;
`;
const BenefitSpacing1 = styled.div`
  position: absolute;
  top: 31px;
  left: 279.5px;
  border-right: 1px dashed var(--neutral-02);
  box-sizing: border-box;
  width: 1px;
  height: 77px;
`;
const FirstBenefitTriangle = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const FirstBenefitOuterCircle = styled.div`
  position: absolute;
  top: 33px;
  left: 72.5px;
  border-radius: 50%;
  background-color: var(--white);
  border: 0px solid var(--success-05);
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  z-index: 3;
`;
const FirstBenefitInnerCircle = styled.div`
  position: absolute;
  top: 21px;
  left: 271.5px;
  border-radius: 50%;
  background-color: var(--white);
  border: 0px solid var(--success-05);
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  z-index: 3;
`;
const PolygonIcon = styled.img`
  position: absolute;
  top: 21px;
  left: 76px;
  width: 8px;
  height: 8px;
  object-fit: contain;
  z-index: 4;
`;
const FirstBenefitHighlight = styled.div`
  height: 108.5px;
  width: 333.5px;
  position: absolute;
  margin: 0 !important;
  right: -217px;
  bottom: -85.5px;
`;
const Parent1 = styled.div`
  border-radius: 37px;
  background-color: var(--success-05);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xs);
  position: relative;
  gap: var(--gap-5xs);
  z-index: 3;
`;
const FirstBenefitContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 45px;
`;
const FirstBenefitIcon = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1px;
`;
const FirstBenefit = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const BenefitSpacing2 = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--neutral-01);
  box-sizing: border-box;
  z-index: 1;
`;
const BenefitsHighlight = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 38px;
`;
const BenefitSpacing3 = styled.div`
  height: 1px;
  width: 336px;
  position: absolute;
  margin: 0 !important;
  bottom: 13px;
  left: -257px;
  border-top: 1px solid var(--neutral-01);
  box-sizing: border-box;
`;
const Div3 = styled.div`
  position: relative;
  line-height: 12px;
  font-weight: 500;
`;
const Container = styled.div`
  box-shadow: 0px 4px 9px rgba(39, 97, 197, 0.2);
  border-radius: 35px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
  z-index: 3;
`;
const SecondBenefitIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const SecondBenefit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 30px;
  font-size: var(--body-1-03-size);
  color: var(--neutral-07);
`;
const ManagementContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const ManagementContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 0px 0px;
  box-sizing: border-box;
  min-width: 218px;
  max-width: 100%;
  font-size: var(--caption-03-size);
  color: var(--white);
`;
const FrameParent3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 9px;
  max-width: 100%;
  font-size: var(--body-2-04-size);
  color: var(--neutral-04);
`;
const SalesThisMonthParent = styled.div`
  position: absolute;
  top: 124px;
  left: 880px;
  box-shadow: 0px 0px 10px rgba(37, 98, 204, 0.05),
    0px 8px 16px rgba(37, 98, 204, 0.15);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  width: 416px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  z-index: 1;
  font-size: var(--body-1-03-size);
`;
const OurStoryBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-5xl);
  border: 2px solid var(--white);
  box-sizing: border-box;
  opacity: 0.3;
  z-index: 4;
`;
const OurStoryContentChild = styled.div`
  position: absolute;
  width: calc(100% - 16px);
  top: 8px;
  right: 8px;
  left: 8px;
  box-shadow: 0px 8px 16px rgba(37, 98, 204, 0.15);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  height: 74px;
  z-index: 2;
`;
const OurStoryContentItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xl);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 3;
`;
const OurStoryContentInner = styled.img`
  position: absolute;
  top: 20.5px;
  left: 28.5px;
  width: 31.5px;
  height: 42.1px;
  z-index: 5;
`;
const OurStoryContent = styled.div`
  height: 90px;
  flex: 1;
  position: relative;
`;
const OurStoryBackgroundParent = styled.div`
  position: absolute;
  top: 231px;
  left: 727px;
  width: 106px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  box-sizing: border-box;
`;
const Feature3 = styled.section`
  align-self: stretch;
  height: 800px;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: var(--heading-1-02-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
  @media screen and (max-width: 825px) {
    height: auto;
    min-height: 800;
  }
`;
const DesktopRoot = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
`;

const Desktop: FunctionComponent = () => {
  return (
    <DesktopRoot>
      <Header>
        <HeaderImage />
        <ContentLayout>
          <BrandsLayout>
            <TrustedBrandsParent>
              <TrustedBrands />
              <TestimonialsLayout />
              <FrameChild />
              <FrameItem />
            </TrustedBrandsParent>
            <TrustedBrands1>
              <Plateform>Plateform</Plateform>
            </TrustedBrands1>
          </BrandsLayout>
          <FooterContainer>
            <FooterTop>
              <AboutUs1>About us</AboutUs1>
              <Features>Features</Features>
              <Testimonials1>Testimonials</Testimonials1>
              <Intergrations>Intergrations</Intergrations>
              <Pricing1>Pricing</Pricing1>
            </FooterTop>
          </FooterContainer>
        </ContentLayout>
        <FooterStats>
          <ChartContainerParent>
            <ChartContainer />
            <ChartContent>
              <Chart />
              <PlaceholderParent>
                <PlaceholderIcon alt="" src="/placeholder@2x.png" />
                <LegendContent>
                  <Icon alt="" src="/161082337161082337-2@2x.png" />
                  <Decor>
                    <Div>+21%</Div>
                    <Decor01Child />
                    <ProgressInSalesContainer>
                      <ProgressInSales>Progress in sales</ProgressInSales>
                      <ProgressInSales>this month</ProgressInSales>
                    </ProgressInSalesContainer>
                  </Decor>
                  <ClientsProgress>
                    <ClientsProgressChild />
                    <ClientsProgressItem />
                    <ClientsProgressInner alt="" src="/group-4.svg" />
                  </ClientsProgress>
                  <Decor1>
                    <NewClients>New clients</NewClients>
                    <RectangleParent>
                      <FrameInner />
                      <RectangleDiv />
                    </RectangleParent>
                    <ClientBarSpacingContainer>
                      <Span>{`+120 `}</Span>
                      <Span1>(+15%)</Span1>
                    </ClientBarSpacingContainer>
                    <Returning>Returning</Returning>
                    <RectangleGroup>
                      <FrameInner />
                      <FrameChild1 />
                    </RectangleGroup>
                    <ClientBarSpacingContainer1>
                      <Span2>+120</Span2>
                      <Span>{` `}</Span>
                      <Span1>(+15%)</Span1>
                    </ClientBarSpacingContainer1>
                  </Decor1>
                  <AvatarIcon alt="" src="/avatar.svg" />
                  <NewOrderLabel>
                    <Vuesaxboldbag2Icon alt="" src="/vuesaxboldbag2.svg" />
                    <NewOrder>New order</NewOrder>
                  </NewOrderLabel>
                  <NewOrderIndicator>
                    <NewOrderIndicatorChild />
                    <NewOrderIndicatorItem alt="" src="/group-7.svg" />
                  </NewOrderIndicator>
                  <Wrapper>
                    <Calling>+25%</Calling>
                  </Wrapper>
                </LegendContent>
              </PlaceholderParent>
            </ChartContent>
            <CallingChart>
              <RectangleContainer>
                <FrameChild2 />
                <CallingWrapper>
                  <Calling>Calling</Calling>
                </CallingWrapper>
              </RectangleContainer>
            </CallingChart>
          </ChartContainerParent>
          <TestimonialCards />
        </FooterStats>
      </Header>
      <AboutUs2>
        <TestimonialCardWrapper>
          <TestimonialCard1>
            <TestimonialContent>
              <Title1>
                <ThisIsPlateform>THIS IS PLATEFORM</ThisIsPlateform>
              </Title1>
              <RestaurantReimagined>Restaurant reimagined</RestaurantReimagined>
            </TestimonialContent>
            <WeAreOneStopContainer>
              <ProgressInSales>
                We are one-stop solution to track, optimize and deliver food
              </ProgressInSales>
              <ProgressInSales>
                with an easy to use mobile app for ordering and our award
                winning desktop app for manament.
              </ProgressInSales>
            </WeAreOneStopContainer>
            <Features1>
              <IconParent>
                <Icon1>
                  <VuesaxboldtruckFastIcon
                    alt=""
                    src="/vuesaxboldtruckfast.svg"
                  />
                </Icon1>
                <FastToDeploy>Fast to deploy</FastToDeploy>
              </IconParent>
              <IconParent>
                <Icon1>
                  <VuesaxboldtruckFastIcon alt="" src="/vuesaxboldaward.svg" />
                </Icon1>
                <FastToDeploy>Easy to learn</FastToDeploy>
              </IconParent>
              <IconParent>
                <Icon1>
                  <VuesaxboldtruckFastIcon
                    alt=""
                    src="/vuesaxbolddollarcircle.svg"
                  />
                </Icon1>
                <FastToDeploy>Future rich</FastToDeploy>
              </IconParent>
            </Features1>
          </TestimonialCard1>
        </TestimonialCardWrapper>
        <AboutUsInner>
          <FrameParent>
            <SoftwareBuildForAndTrustedWrapper>
              <SoftwareBuildFor>
                software build for and trusted by 100+ brands
              </SoftwareBuildFor>
            </SoftwareBuildForAndTrustedWrapper>
            <LogoGrid>
              <Image11Wrapper>
                <Image11Icon loading="lazy" alt="" src="/image-11@2x.png" />
              </Image11Wrapper>
              <Image11Wrapper>
                <Image8Icon loading="lazy" alt="" src="/image-8@2x.png" />
              </Image11Wrapper>
              <Image11Wrapper>
                <Image12Icon loading="lazy" alt="" src="/image-12@2x.png" />
              </Image11Wrapper>
              <Image11Wrapper>
                <Image9Icon loading="lazy" alt="" src="/image-9@2x.png" />
              </Image11Wrapper>
              <BrandLogoTwo loading="lazy" alt="" src="/frame-882@2x.png" />
              <BrandLogoTwo loading="lazy" alt="" src="/frame-888@2x.png" />
              <BrandLogoTwo loading="lazy" alt="" src="/frame-889@2x.png" />
              <Image11Wrapper>
                <Image16Icon loading="lazy" alt="" src="/image-16@2x.png" />
              </Image11Wrapper>
              <Image11Wrapper>
                <Image9Icon loading="lazy" alt="" src="/image-13@2x.png" />
              </Image11Wrapper>
            </LogoGrid>
          </FrameParent>
        </AboutUsInner>
      </AboutUs2>
      <Feature2>
        <Feature1Child />
        <FrameGroup>
          <AvatarParent>
            <AvatarIcon1 alt="" src="/avatar-1.svg" />
            <HelloAngelina>Hello! Angelina</HelloAngelina>
          </AvatarParent>
          <FrameComponent4 />
          <Popularity>
            <PizzaTypes>
              <MostPolular>Most polular</MostPolular>
              <PizzaaTomate>Pizzaa Tomate</PizzaaTomate>
            </PizzaTypes>
            <PizzaTypes>
              <MostPolular>Least popular</MostPolular>
              <PizzaaTomate>Pizza Zucchini</PizzaaTomate>
            </PizzaTypes>
          </Popularity>
          <FrameComponent2 />
          <FrameContainer>
            <GroupIcon alt="" src="/group-10.svg" />
            <Div1>👋</Div1>
          </FrameContainer>
        </FrameGroup>
        <FrameDiv>
          <FrameChild3 loading="lazy" alt="" src="/group-13@2x.png" />
          <FirstBenefitTriangleParent>
            <FrameChild4 />
            <FooterCommunicationIcon
              loading="lazy"
              alt=""
              src="/frame-14@2x.png"
            />
            <GroupDiv>
              <FrameChild5 />
              <Image23Icon loading="lazy" alt="" src="/image-23@2x.png" />
            </GroupDiv>
          </FirstBenefitTriangleParent>
        </FrameDiv>
      </Feature2>
      <Feature />
      <Feature3>
        <FrameParent2>
          <TitleParent>
            <Title2
              disableElevation
              variant="contained"
              sx={{
                color: "linear-gradient(249.46deg, #2878ff, #2c65c8)",
                fontSize: "12",
                background: "#f1f6ff",
                borderRadius: "8px",
                "&:hover": { background: "#f1f6ff" },
                width: 134,
                height: 41,
              }}
            >
              ANALYTICS
            </Title2>
            <WeAnalyseYour>
              We analyse your date, to give you a roadmap to success
            </WeAnalyseYour>
          </TitleParent>
          <FrameParent1>
            <FrameComponent
              vuesaxboldfavoriteChart="/vuesaxboldfavoritechart.svg"
              salesAnalytics="Sales analytics"
              weMonitorYourSalesInRealTime="We monitor your sales in real-time and"
              determinePatternsForGrowth="determine patterns for growth."
            />
            <FrameComponent
              vuesaxboldfavoriteChart="/vuesaxboldpresentionchart.svg"
              salesAnalytics="Marketing analytics"
              weMonitorYourSalesInRealTime="Track your campaigns with multiple metrics"
              determinePatternsForGrowth="and correlation to in-house data."
            />
            <FrameComponent
              vuesaxboldfavoriteChart="/vuesaxboldchart.svg"
              salesAnalytics="Employee analytics"
              weMonitorYourSalesInRealTime="Help your employees perform their best, take"
              determinePatternsForGrowth="the time off when needed and more."
            />
          </FrameParent1>
        </FrameParent2>
        <FrameComponent5 />
        <SalesThisMonthParent>
          <SalesThisMonth>Sales this month</SalesThisMonth>
          <FrameParent3>
            <KParent>
              <K>10k</K>
              <FirstPointHighlight>
                <K1>5k</K1>
              </FirstPointHighlight>
              <SecondPointHighlight>
                <K1>1k</K1>
              </SecondPointHighlight>
              <ThirdPointHighlight>
                <K2>0k</K2>
              </ThirdPointHighlight>
            </KParent>
            <ManagementContentWrapper>
              <ManagementContent>
                <BenefitsHighlight>
                  <FirstBenefit>
                    <FirstBenefitIcon>
                      <BenefitSpacing />
                      <FirstBenefitContent>
                        <Parent1>
                          <Div2>👍 150%</Div2>
                          <FirstBenefitHighlight>
                            <BenefitSpacing1 />
                            <FirstBenefitTriangleParent>
                              <FirstBenefitTriangle
                                alt=""
                                src="/first-benefit-triangle.svg"
                              />
                              <FirstBenefitOuterCircle />
                              <FirstBenefitInnerCircle />
                              <PolygonIcon alt="" src="/polygon-2.svg" />
                            </FirstBenefitTriangleParent>
                          </FirstBenefitHighlight>
                        </Parent1>
                      </FirstBenefitContent>
                    </FirstBenefitIcon>
                    <BenefitSpacing />
                  </FirstBenefit>
                  <BenefitSpacing2 />
                </BenefitsHighlight>
                <SecondBenefit>
                  <SecondBenefitIcon>
                    <BenefitSpacing3 />
                    <Container>
                      <Div3>🚩</Div3>
                    </Container>
                  </SecondBenefitIcon>
                </SecondBenefit>
              </ManagementContent>
            </ManagementContentWrapper>
          </FrameParent3>
        </SalesThisMonthParent>
        <OurStoryBackgroundParent>
          <OurStoryBackground />
          <OurStoryContent>
            <OurStoryContentChild />
            <OurStoryContentItem />
            <OurStoryContentInner loading="lazy" alt="" src="/group-7.svg" />
          </OurStoryContent>
        </OurStoryBackgroundParent>
        <GraphContainer />
      </Feature3>
      <Pricing />
      <Testimonials />
      <OurStory />
      <BoostContainer />
      <Footer />
    </DesktopRoot>
  );
};

export default Desktop;
