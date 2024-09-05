import { Button } from "@mui/material";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonRoot = styled(Button)`height: 48px;
  flex: 0.9322;
  min-width: 130px;
  @media screen and (max-width: 450px) {
  flex: 1;
  
  }
  flex: ${(p) => p.propFlex}
  min-width: ${(p) => p.propMinWidth}
  align-self: ${(p) => p.propAlignSelf}
`;

const Button1 = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  button,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  return (
    <ButtonRoot
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "14",
        background: "linear-gradient(249.46deg, #2878ff, #2c65c8)",
        borderRadius: "8px",
        "&:hover": {
          background: "linear-gradient(249.46deg, #2878ff, #2c65c8)",
        },
        height: 48,
      }}
      propFlex={propFlex}
      propMinWidth={propMinWidth}
      propAlignSelf={propAlignSelf}
      className={className}
    >
      {button}
    </ButtonRoot>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  button: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Button1;
