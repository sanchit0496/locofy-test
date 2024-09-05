import { FunctionComponent } from "react";
import styled from "styled-components";

export type LogoType = {
  className?: string;
};

const GroupIcon = styled.img`
  position: absolute;
  height: 47.5%;
  width: 65.7%;
  top: 28.75%;
  right: 0%;
  bottom: 23.75%;
  left: 34.3%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupIcon1 = styled.img`
  position: absolute;
  height: 100%;
  width: 30.55%;
  top: 0%;
  right: 69.45%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Group = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
`;
const X39Cxy0u = styled.div`
  height: 32px;
  flex: 1;
  position: relative;
`;
const LogoRoot = styled.div`
  width: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Logo: FunctionComponent<LogoType> = ({ className = "" }) => {
  return (
    <LogoRoot className={className}>
      <X39Cxy0u>
        <Group>
          <GroupIcon alt="" src="/group-2.svg" />
          <GroupIcon1 alt="" src="/group-3.svg" />
        </Group>
      </X39Cxy0u>
    </LogoRoot>
  );
};

export default Logo;
