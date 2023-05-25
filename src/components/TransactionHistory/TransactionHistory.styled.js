import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 30px;
  width: 330px;
`;

export const Thead = styled.thead`
  text-transform: uppercase;
  height: 30px;
  background-color: #53afb2;
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const TableEl = styled.tr`
  height: 25px;
  color: #656969;

  &:nth-of-type(2n) {
    background-color: #c6e9ea;
  }
`;