import { colors, transition } from 'helpers/variables';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 28px;
  background-color: ${colors.transparentBgColor};
  border-radius: 10px;
  background: rgba(207, 207, 209, 0.8);
  box-shadow: 0px 4px 11px 0px #000;
  padding: 36px;
`;

export const Username = styled.p`
  font-weight: 500;
  line-height: 1.22;
  white-space: nowrap;
`;

export const Email = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: 0.9px;
`;

export const Button = styled.button`
  border: none;
  color: #fff;
  border-radius: 10px;
  padding: 6px 40px;
  background: ${colors.mainAccentColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 17px;
  font-weight: 300;
  line-height: 1.22;
  cursor: pointer;
  transition: transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
