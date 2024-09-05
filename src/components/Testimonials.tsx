import { FunctionComponent } from "react";
import styled from "styled-components";
import Logo2 from "./Logo2";
import TestimonialCard from "./TestimonialCard";

export type TestimonialsType = {
  className?: string;
};

const Icon = styled.img`
  position: absolute;
  top: -53px;
  left: 1054px;
  width: 261.4px;
  height: 277.3px;
  object-fit: contain;
`;
const Icon1 = styled.img`
  height: 277.3px;
  width: 261.4px;
  position: absolute;
  margin: 0 !important;
  top: -167px;
  left: 284px;
`;
const Image10Icon = styled.img`
  height: 44.2px;
  width: 184px;
  position: absolute;
  margin: 0 !important;
  bottom: -12.2px;
  left: -10px;
  object-fit: cover;
`;
const Logo3 = styled.div`
  width: 200px;
  height: 32px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const AvatarIcon = styled.img`
  width: 48px;
  height: 48px;
  position: relative;
`;
const BestProductEver = styled.blockquote`
  margin: 0;
  align-self: stretch;
  position: relative;
  line-height: 26px;
`;
const Testimonial = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const Logo1Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-37xl);
`;
const FrameChild = styled.div`
  width: 17px;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--neutral-03);
  box-sizing: border-box;
`;
const TestimonialAuthorInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-5) 0px 0px;
`;
const AnaWilsonHead = styled.div`
  width: 174px;
  position: relative;
  line-height: 9px;
  font-weight: 500;
  display: inline-block;
`;
const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--caption-03-size);
  color: var(--neutral-03);
`;
const TestimonialCard1 = styled.div`
  flex: 1;
  box-shadow: 0px 6px 20px rgba(37, 98, 204, 0.18);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl);
  gap: var(--gap-16xl);
`;
const EmptyCard = styled.div`
  width: 312px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-45xl);
  box-sizing: border-box;
`;
const BestProductEver1 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 26px;
`;
const CommunicationContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--body-1-03-size);
  color: var(--neutral-06);
  font-family: var(--caption-03);
`;
const CommunicationAuthorChild = styled.div`
  height: 1px;
  width: 17px;
  position: relative;
  border-top: 1px solid var(--neutral-03);
  box-sizing: border-box;
`;
const AnaWilsonHead1 = styled.div`
  position: relative;
  line-height: 9px;
  font-weight: 500;
`;
const CommunicationAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--caption-03-size);
  color: var(--neutral-03);
  font-family: var(--caption-03);
`;
const TestimonialCard2 = styled.div`
  height: 408px;
  flex: 1;
  box-shadow: 0px 6px 20px rgba(37, 98, 204, 0.18);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-21xl);
  box-sizing: border-box;
`;
const EmptyCard1 = styled.div`
  width: 312px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) 0px 0px;
  box-sizing: border-box;
  font-size: var(--font-size-9xl);
  color: var(--neutral-05);
  font-family: var(--font-puritan);
`;
const Logo4 = styled.img`
  width: 200px;
  height: 32px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const EmptyAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--caption-03-size);
  color: var(--neutral-03);
`;
const TestimonialCard3 = styled.div`
  flex: 1;
  box-shadow: 0px 6px 20px rgba(37, 98, 204, 0.18);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-21xl);
  box-sizing: border-box;
  min-height: 408px;
`;
const AuthCard = styled.div`
  width: 312px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) 0px 0px;
  box-sizing: border-box;
`;
const EmptyCardParent = styled.div`
  width: 1460px;
  overflow-x: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-21xl);
  max-width: 100%;
`;
const Parent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
`;
const FrameWrapper = styled.div`
  width: 1720px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-148xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const WhatPeopleSay = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 30px;
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
const WhatPeopleSayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const OurCustomerAre = styled.p`
  margin: 0;
`;
const OurCustomerAreContainer = styled.div`
  position: relative;
  line-height: 28px;
`;
const OurCustomerAreOurTopPriorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
  text-align: center;
  font-size: var(--heading-4-03-size);
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  margin-left: -1022.5px;
  font-size: var(--heading-1-02-size);
  color: var(--neutral-07);
`;
const FrameParent = styled.div`
  position: absolute;
  top: calc(50% - 319px);
  left: calc(50% - 860px);
  width: 1720px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
`;
const TestimonialsRoot = styled.section`
  align-self: stretch;
  height: 880px;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--body-1-03-size);
  color: var(--neutral-06);
  font-family: var(--caption-03);
`;

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <TestimonialsRoot className={className}>
      <Icon loading="lazy" alt="" src="/-3.svg" />
      <FrameParent>
        <FrameWrapper>
          <Parent1>
            <Icon1 alt="" src="/-4.svg" />
            <EmptyCardParent>
              <EmptyCard>
                <TestimonialCard1>
                  <Logo1Parent>
                    <Logo3>
                      <Image10Icon
                        loading="lazy"
                        alt=""
                        src="/image-10@2x.png"
                      />
                    </Logo3>
                    <Testimonial>
                      <AvatarIcon loading="lazy" alt="" src="/avatar-4.svg" />
                      <BestProductEver>
                        “Best product. Ever! Very easy to use. I strongly
                        recommend plateform to every one involved in running a
                        restaurant business!”
                      </BestProductEver>
                    </Testimonial>
                  </Logo1Parent>
                  <TestimonialAuthor>
                    <TestimonialAuthorInner>
                      <FrameChild />
                    </TestimonialAuthorInner>
                    <AnaWilsonHead>Ana Wilson, Head of Marketing</AnaWilsonHead>
                  </TestimonialAuthor>
                </TestimonialCard1>
              </EmptyCard>
              <EmptyCard1>
                <TestimonialCard2>
                  <Logo1Parent>
                    <Logo2 />
                    <CommunicationContent>
                      <AvatarIcon loading="lazy" alt="" src="/avatar-5.svg" />
                      <BestProductEver1>
                        "We've been seeing amazing results already! I can't
                        believe how we ran the company before plateform.
                        Groundbreaking!
                      </BestProductEver1>
                    </CommunicationContent>
                  </Logo1Parent>
                  <CommunicationAuthor>
                    <CommunicationAuthorChild />
                    <AnaWilsonHead1>Mark Churry, CEO</AnaWilsonHead1>
                  </CommunicationAuthor>
                </TestimonialCard2>
              </EmptyCard1>
              <EmptyCard>
                <TestimonialCard3>
                  <Logo1Parent>
                    <Logo4 loading="lazy" alt="" src="/logo--3.svg" />
                    <Testimonial>
                      <AvatarIcon loading="lazy" alt="" src="/avatar-6.svg" />
                      <BestProductEver1>
                        "Plateform is exactly what our business needed to grow!
                        It saves us soo much time and effort it's unbelievable!
                      </BestProductEver1>
                    </Testimonial>
                  </Logo1Parent>
                  <EmptyAuthor>
                    <CommunicationAuthorChild />
                    <AnaWilsonHead1>Dirk Michon, Co-Founder</AnaWilsonHead1>
                  </EmptyAuthor>
                </TestimonialCard3>
              </EmptyCard>
              <AuthCard>
                <TestimonialCard
                  name1="Derpina Wickers, CEO"
                  text={`"I am completely blown away! We are growing at a rate that's unprecedented for both the industry and the city!"`}
                  propWidth="unset"
                  propAlignSelf="unset"
                  avatar="/avatar1.svg"
                  propWidth3="unset"
                  propDisplay="unset"
                />
              </AuthCard>
              <EmptyCard>
                <TestimonialCard
                  name1="Angelina Jolie, Co-Founder"
                  text={`"Plateform has really transformed the way we sell and deliver our food to all our customers!"`}
                  avatar="/avatar2.svg"
                />
              </EmptyCard>
            </EmptyCardParent>
          </Parent1>
        </FrameWrapper>
        <FrameGroup>
          <WhatPeopleSayWrapper>
            <WhatPeopleSay>What people say</WhatPeopleSay>
          </WhatPeopleSayWrapper>
          <OurCustomerAreOurTopPriorWrapper>
            <OurCustomerAreContainer>
              <OurCustomerAre>Our customer are our top priority</OurCustomerAre>
              <OurCustomerAre>Let’s hear what they have to say.</OurCustomerAre>
            </OurCustomerAreContainer>
          </OurCustomerAreOurTopPriorWrapper>
        </FrameGroup>
      </FrameParent>
    </TestimonialsRoot>
  );
};

export default Testimonials;
