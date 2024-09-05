import { FunctionComponent } from "react";
import styled from "styled-components";

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
const AboutUsInnerRoot = styled.div`
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

const FrameComponent6: FunctionComponent = ({ className = "" }) => {
  return (
    <AboutUsInnerRoot className={className}>
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
    </AboutUsInnerRoot>
  );
};

export default FrameComponent6;
