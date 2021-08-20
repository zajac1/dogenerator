import styled from "styled-components";

export const CloseButton = styled.span`
  font-size: 30px;
  font-weight: bold;
  padding: 12px 24px;
  position: absolute;
  top: 0;
  right: 0;
  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "X";
    display: block;
  }
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: capitalize;
  display: inline-block;
  vertical-align: middle;
`;

export const Button = styled.button`
  margin-left: 12px;
  font-size: 16px;
  background-color: #fbfbfb;
  border-radius: 2px;
  border: 1px solid #043339;
  padding: 5px;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
    border-color: #fbccc6;
  }
`;

export const PictureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DogPicture = styled.img`
  max-width: 400px;
  max-height: 400px;
`;
