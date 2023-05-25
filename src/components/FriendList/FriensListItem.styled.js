import styled from '@emotion/styled';

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;

  margin-right: 10px;
  margin-left: 5px;

  background-color: ${({ online }) => (online ? 'green' : 'red')};
  //   background-color: ${props => (props.online ? 'green' : 'red')};
`;

export const Name = styled.p`
  margin-left: 10px;
`;