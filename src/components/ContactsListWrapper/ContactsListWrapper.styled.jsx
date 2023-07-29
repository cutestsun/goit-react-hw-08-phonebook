import { colors, transition } from 'helpers/variables';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 52px;
  border-radius: 10px;
  background: ${colors.transparentBgColor};
  box-shadow: 0px 4px 11px 0px #000;
  height: 100%;
`;

export const ListTitle = styled.p`
  font-weight: 500;
  line-height: 1.22;
  margin-bottom: 30px;
`;

export const AddContactBtn = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${colors.placeholderColor};
  cursor: pointer;
  transition: color ${transition};

  &:hover,
  &:focus {
    color: ${colors.mainAccentColor};
  }
`;
