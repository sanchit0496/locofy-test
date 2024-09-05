import styled from "styled-components";
import PropTypes from "prop-types";

const Image27Icon = styled.img`
  height: 46.5px;
  width: 46.5px;
  position: relative;
  object-fit: cover;
`;
const Vegancake = styled.h1`
  margin: 0;
  height: 18px;
  position: relative;
  font-size: inherit;
  line-height: 26px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: 21px;
  }
`;
const LogoRoot = styled.div`
  height: 32px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--font-size-9xl);
  color: var(--neutral-05);
  font-family: var(--font-puritan);
`;

const Logo2 = ({ className = "" }) => {
  return (
    <LogoRoot className={className}>
      <Image27Icon alt="" src="/image-27@2x.png" />
      <Vegancake>Vegancake</Vegancake>
    </LogoRoot>
  );
};

Logo2.propTypes = {
  className: PropTypes.string,
};

export default Logo2;
