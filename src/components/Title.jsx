import styled from "styled-components";
import PropTypes from "prop-types";

const ThisIsPlateform = styled.b`
  position: relative;
  letter-spacing: 0.2em;
  line-height: 9px;
  text-transform: uppercase;
  background: linear-gradient(249.46deg, #2878ff, #2c65c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TitleRoot = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-01);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xl);
  white-space: nowrap;
  text-align: left;
  font-size: var(--caption-03-size);
  font-family: var(--caption-03);
`;

const Title = ({ className = "", text = "WE LOVE TO SEE YOU GROW" }) => {
  return (
    <TitleRoot className={className}>
      <ThisIsPlateform>{text}</ThisIsPlateform>
    </TitleRoot>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Title;
