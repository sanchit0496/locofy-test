import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  position: absolute;
  top: 19.72px;
  left: 0px;
  border-radius: var(--br-10xs-2);
  background-color: var(--white);
  width: 9.5px;
  height: 9.5px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 27.72px;
  left: 8.8px;
  border-radius: var(--br-10xs-2);
  background-color: var(--white);
  width: 9.5px;
  height: 9.5px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 9.26px;
  left: 6.2px;
  border-radius: var(--br-10xs-5);
  background-color: var(--white);
  width: 13.1px;
  height: 13.1px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 19.72px;
  left: 17.6px;
  border-radius: var(--br-10xs-2);
  background-color: var(--white);
  width: 9.5px;
  height: 9.5px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
  z-index: 2;
`;
const RectangleParent = styled.div`
  height: 34.5px;
  width: 31px;
  position: relative;
`;
const Plateform = styled.b`
  position: relative;
  line-height: 12px;
  text-transform: uppercase;
`;
const LeftFooter = styled.div`
  height: 11px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
`;
const Features = styled.b`
  height: 13px;
  position: relative;
  line-height: 32px;
  display: inline-block;
`;
const Management = styled.div`
  height: 10px;
  position: relative;
  line-height: 22px;
  display: inline-block;
`;
const SubLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--body-2-04-size);
`;
const TopLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-58xl) 0px 0px;
  gap: var(--gap-21xl);
`;
const Social = styled.div`
  flex: 0.8913;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-21xl);
  min-width: 120px;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const VuesaxlinearinstagramIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;
const Instagram = styled.div`
  position: relative;
  line-height: 10px;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  font-size: var(--body-2-04-size);
`;
const MainStreetCityville = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
`;
const Helloplateformio = styled.div`
  height: 10px;
  position: relative;
  line-height: 22px;
  display: inline-block;
  white-space: nowrap;
`;
const ContactDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--body-2-04-size);
`;
const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-21xl);
  min-width: 120px;
`;
const RightFooter = styled.div`
  width: 856px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  max-width: 100%;
  font-size: var(--heading-4-03-size);
  @media screen and (max-width: 825px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const FooterContent = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const FooterRoot = styled.footer`
  align-self: stretch;
  background-color: var(--primary-09);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-45xl) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--body-1-03-size);
  color: var(--white);
  font-family: var(--caption-03);
`;

const Footer = ({ className = "" }) => {
  return (
    <FooterRoot className={className}>
      <FooterContent>
        <LeftFooter>
          <RectangleParent>
            <FrameChild />
            <FrameItem />
            <FrameInner />
            <RectangleDiv />
          </RectangleParent>
          <Plateform>Plateform</Plateform>
        </LeftFooter>
        <RightFooter>
          <TopLinks>
            <Features>Features</Features>
            <SubLinks>
              <Management>Management</Management>
              <Management>Communication</Management>
              <Management>Analytic</Management>
            </SubLinks>
          </TopLinks>
          <Social>
            <Features>Success stories</Features>
            <SubLinks>
              <Management>Avoburger</Management>
              <Management>StarCoffee</Management>
              <Management>Forest Hotdogs</Management>
            </SubLinks>
          </Social>
          <Social>
            <Features>Social Media</Features>
            <SocialIcons>
              <Icons>
                <VuesaxlinearinstagramIcon
                  alt=""
                  src="/vuesaxlinearinstagram.svg"
                />
                <Instagram>Instagram</Instagram>
              </Icons>
              <Icons>
                <VuesaxlinearinstagramIcon
                  alt=""
                  src="/vuesaxlinearfacebook.svg"
                />
                <Instagram>Facebook</Instagram>
              </Icons>
              <Icons>
                <VuesaxlinearinstagramIcon
                  alt=""
                  src="/vuesaxlinearyoutube.svg"
                />
                <Instagram>Youtube</Instagram>
              </Icons>
            </SocialIcons>
          </Social>
          <ContactInfo>
            <Features>Contact</Features>
            <ContactDetails>
              <MainStreetCityville>
                123 Main Street, Cityville, Stateville, ZIP Code
              </MainStreetCityville>
              <Helloplateformio>hello@plateform.io</Helloplateformio>
            </ContactDetails>
          </ContactInfo>
        </RightFooter>
      </FooterContent>
    </FooterRoot>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
