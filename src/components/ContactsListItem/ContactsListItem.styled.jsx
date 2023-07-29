import { colors, transition } from 'helpers/variables';
import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  /* display: flex;
  align-items: center;
  gap: 8px; */
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  border: 1px solid rgba(117, 117, 117, 0.8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.22;
`;

export const Number = styled.p`
  font-size: 16px;
  line-height: 1.22;
  letter-spacing: 0.96px;
  margin-left: 14px;
`;

export const Button = styled.button`
  position: absolute;
  top: 29px;
  right: 20px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${colors.placeholderColor};
  transition: color ${transition};

  &:hover,
  &:focus {
    color: ${colors.mainAccentColor};
  }
`;
