import { FunctionComponent } from "react";
import styled from "styled-components";

export type Logo1Type = {
  className?: string;
};

const GroupIcon = styled.img`
  position: absolute;
  height: 54.06%;
  width: 74.85%;
  top: 28.44%;
  right: 0%;
  bottom: 17.5%;
  left: 25.15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupIcon1 = styled.img`
  position: absolute;
  height: 100%;
  width: 20.25%;
  top: 0%;
  right: 79.75%;
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
const Axronf = styled.div`
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

const Logo1: FunctionComponent<Logo1Type> = ({ className = "" }) => {
  return (
    <LogoRoot className={className}>
      <Axronf>
        <Group>
          <GroupIcon loading="lazy" alt="" src="/group.svg" />
          <GroupIcon1 alt="" src="/group-1.svg" />
        </Group>
      </Axronf>
    </LogoRoot>
  );
};

export default Logo1;
