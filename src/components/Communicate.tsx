import { FunctionComponent } from "react";
import styled from "styled-components";

export type CommunicateType = {
  className?: string;
  manageDeliveriesWith?: string;
  yourSuppliers?: string;
  group16?: string;
};

const ManageDeliveriesWith = styled.p`
  margin: 0;
`;
const CommunicateWithYourContainer = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 600;
`;
const PlaceholderContainerChild = styled.img`
  height: 48px;
  width: 48px;
  position: relative;
`;
const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-34xl);
`;
const CommunicateRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: var(--body-2-04-size);
  color: var(--neutral-07);
  font-family: var(--caption-03);
`;

const Communicate: FunctionComponent<CommunicateType> = ({
  className = "",
  manageDeliveriesWith,
  yourSuppliers,
  group16,
}) => {
  return (
    <CommunicateRoot className={className}>
      <CommunicateWithYourContainer>
        <ManageDeliveriesWith>{manageDeliveriesWith}</ManageDeliveriesWith>
        <ManageDeliveriesWith>{yourSuppliers}</ManageDeliveriesWith>
      </CommunicateWithYourContainer>
      <PlaceholderContainer>
        <PlaceholderContainerChild loading="lazy" alt="" src={group16} />
      </PlaceholderContainer>
    </CommunicateRoot>
  );
};

export default Communicate;
