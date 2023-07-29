import { colors } from 'helpers/variables';
import styled from 'styled-components';

export const Input = styled.input`
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid #000;
  font-size: 18px;
  padding: 6px 40px;
  padding-left: 44px;
  width: 380px;

  &:focus {
    outline: 1.5px solid ${colors.mainAccentColor};
  }

  &::placeholder {
    font-size: 16px;
    color: ${colors.placeholderColor};
    font-weight: 300;
    line-height: 1.22;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 28px;
`;

export const ClearBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 9.5px;
  right: 16px;
  cursor: pointer;
`;
