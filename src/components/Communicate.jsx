import styled from "styled-components";
import PropTypes from "prop-types";

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

const Communicate = ({
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

Communicate.propTypes = {
  className: PropTypes.string,
  manageDeliveriesWith: PropTypes.string,
  yourSuppliers: PropTypes.string,
  group16: PropTypes.string,
};

export default Communicate;
