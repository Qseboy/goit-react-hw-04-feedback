const { default: styled } = require('@emotion/styled');

export const FeedbacOptionsUl = styled.ul`
  margin: 20px 0px;
  list-style: none;
  display: flex;
  gap: 20px;
`;
export const FeedbacOptionsLi = styled.li``;
export const FeedbacOptionsButton = styled.button`
  padding: 5px 10px;
  border: 3px solid #000012;
  border-radius: 5px;

  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border-color: red;
  }
`;
