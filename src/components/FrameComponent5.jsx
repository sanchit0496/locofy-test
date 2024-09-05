import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`
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
const Parent1 = styled.div`
  border-radius: var(--br-5xl);
  background-color: var(--color-oldlace);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-5xs);
`;
const MostLovedBy = styled.div`
  height: 10px;
  position: relative;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
`;
const MostLovedByTheCustomersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  color: var(--neutral-05);
`;
const FrameGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FrameWrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Image25Icon = styled.img`
  position: absolute;
  top: 8.1px;
  left: 0px;
  width: 138px;
  height: 138px;
  object-fit: cover;
`;
const Image26Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 138px;
  height: 138px;
  object-fit: cover;
  z-index: 1;
`;
const Pizza = styled.div`
  height: 146.1px;
  width: 138px;
  position: relative;
  min-width: 138px;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const PizzaTomate = styled.h2`
  margin: 0;
  height: 18px;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.01em;
  line-height: 29px;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 23px;
  }
`;
const VuesaxboldshoppingCartIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;
const Span = styled.span`
  font-weight: 600;
`;
const SoldThisMonth = styled.span`
  color: var(--neutral-03);
`;
const SoldThisMonthContainer = styled.div`
  position: relative;
  line-height: 10px;
`;
const Placeholder = styled.div`
  height: 9px;
  position: relative;
  font-size: var(--caption-03-size);
  line-height: 17px;
  font-weight: 600;
  color: var(--success-05);
  display: flex;
  align-items: flex-end;
`;
const SoldMetric = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const StarIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  border-radius: var(--br-12xs-8);
`;
const RatingMetric = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const BestsellerMetrics = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-9xs);
  gap: var(--gap-5xs);
  font-size: var(--body-2-04-size);
  color: var(--neutral-07);
`;
const BestsellerCard = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const BestsellerCardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-9xl);
  box-sizing: border-box;
  min-width: 135px;
`;
const PizzaParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FrameDiv = styled.div`
  width: 440px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-3xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameChild = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--neutral-01);
  box-sizing: border-box;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base-9);
  max-width: 100%;
  font-size: var(--heading-3-03-size);
  color: var(--neutral-08);
`;
const AvatarIcon = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
`;
const AmyNewYork = styled.div`
  height: 9px;
  position: relative;
  font-size: var(--caption-03-size);
  line-height: 17px;
  color: var(--neutral-03);
  display: flex;
  align-items: flex-end;
`;
const ItsMyFavoriteSimplyDelicParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const QuoteContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
`;
const QuoteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const FooterQuote = styled.div`
  width: 318px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
  box-sizing: border-box;
`;
const FrameParentRoot = styled.div`
  position: absolute;
  top: 386px;
  left: 752px;
  box-shadow: 0px 0px 10px rgba(37, 98, 204, 0.05),
    0px 8px 16px rgba(37, 98, 204, 0.15);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  width: 472px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-4xl-5);
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: var(--body-2-04-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;

const FrameComponent5 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameWrapper>
        <FrameGroup>
          <Parent1>
            <Div>🏆</Div>
            <BestSeller>Best seller</BestSeller>
          </Parent1>
          <MostLovedByTheCustomersWrapper>
            <MostLovedBy>Most loved by the customers</MostLovedBy>
          </MostLovedByTheCustomersWrapper>
        </FrameGroup>
      </FrameWrapper>
      <FrameContainer>
        <FrameDiv>
          <PizzaParent>
            <Pizza>
              <Image25Icon alt="" src="/image-25@2x.png" />
              <Image26Icon loading="lazy" alt="" src="/image-26@2x.png" />
            </Pizza>
            <BestsellerCardWrapper>
              <BestsellerCard>
                <PizzaTomate>Pizza Tomate</PizzaTomate>
                <BestsellerMetrics>
                  <SoldMetric>
                    <VuesaxboldshoppingCartIcon
                      alt=""
                      src="/vuesaxboldshoppingcart.svg"
                    />
                    <SoldThisMonthContainer>
                      <Span>2390</Span>
                      <SoldThisMonth> sold this month</SoldThisMonth>
                    </SoldThisMonthContainer>
                    <Placeholder>+15%</Placeholder>
                  </SoldMetric>
                  <RatingMetric>
                    <StarIcon alt="" src="/star-icon.svg" />
                    <SoldThisMonthContainer>
                      <Span>4.9</Span>
                      <SoldThisMonth> average rating</SoldThisMonth>
                    </SoldThisMonthContainer>
                    <Placeholder>+14%</Placeholder>
                  </RatingMetric>
                </BestsellerMetrics>
              </BestsellerCard>
            </BestsellerCardWrapper>
          </PizzaParent>
        </FrameDiv>
        <FrameChild />
      </FrameContainer>
      <FooterQuote>
        <QuoteContainer>
          <AvatarIcon alt="" src="/avatar-1.svg" />
          <QuoteContent>
            <ItsMyFavoriteSimplyDelicParent>
              <MostLovedBy>It’s my favorite! Simply delicious!</MostLovedBy>
              <AmyNewYork>Amy, New York</AmyNewYork>
            </ItsMyFavoriteSimplyDelicParent>
          </QuoteContent>
        </QuoteContainer>
      </FooterQuote>
    </FrameParentRoot>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
