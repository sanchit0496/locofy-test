import { FunctionComponent, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

export type Button1Type = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  button?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const ButtonRoot = styled(Button)<{
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
}>`height: 48px;
  flex: 0.9322;
  min-width: 130px;
  @media screen and (max-width: 450px) {
  flex: 1;
  
  }
  flex: ${(p) => p.propFlex}
  min-width: ${(p) => p.propMinWidth}
  align-self: ${(p) => p.propAlignSelf}
`;

const Button1: FunctionComponent<Button1Type> = ({
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

export default Button1;
