import styled from "styled-components";

export const Pill = styled.button`
  border: 1px solid #043339;
  border-radius: 20px;
  background-color: #fbfbfb;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  min-width: 80px;

  &:hover {
    border-color: #fbccc6;
    color: #fbccc6;
    cursor: pointer;
  }
`;
