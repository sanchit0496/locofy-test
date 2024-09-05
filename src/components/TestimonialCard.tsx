import { FunctionComponent, type CSSProperties } from "react";
import Logo from "./Logo";
import styled from "styled-components";

export type TestimonialCardType = {
  className?: string;
  name1?: string;
  text?: string;
  avatar?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth3?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

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
const TestimonialInfo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const TestimonialContent = styled.div`
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
const AnaWilsonHead = styled.div<{
  propWidth3?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
}>`width: 155px;
  position: relative;
  line-height: 9px;
  font-weight: 500;
  display: inline-block;
  width: ${(p) => p.propWidth3}
  display: ${(p) => p.propDisplay}
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
const TestimonialCardRoot = styled.div<{
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
}>`flex: 1;
  box-shadow: 0px 6px 20px rgba(37, 98, 204, 0.18);
  border-radius: var(--br-5xl);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl);
  gap: var(--gap-42xl);
  text-align: left;
  font-size: var(--body-1-03-size);
  color: var(--neutral-06);
  font-family: var(--caption-03);
  width: ${(p) => p.propWidth}
  align-self: ${(p) => p.propAlignSelf}
`;

const TestimonialCard: FunctionComponent<TestimonialCardType> = ({
  className = "",
  name1 = "Angelina Jolie, Co-Founder",
  text = '"Plateform has really transformed the way we sell and deliver our food to all our customers!"',
  propWidth,
  propAlignSelf,
  avatar,
  propWidth3,
  propDisplay,
}) => {
  return (
    <TestimonialCardRoot
      propWidth={propWidth}
      propAlignSelf={propAlignSelf}
      className={className}
    >
      <TestimonialContent>
        <Logo />
        <TestimonialInfo>
          <AvatarIcon alt="" src={avatar} />
          <BestProductEver>{text}</BestProductEver>
        </TestimonialInfo>
      </TestimonialContent>
      <TestimonialAuthor>
        <TestimonialAuthorInner>
          <FrameChild />
        </TestimonialAuthorInner>
        <AnaWilsonHead propWidth3={propWidth3} propDisplay={propDisplay}>
          {name1}
        </AnaWilsonHead>
      </TestimonialAuthor>
    </TestimonialCardRoot>
  );
};

export default TestimonialCard;
