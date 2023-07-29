import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';
import { colors, transition } from 'helpers/variables';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 52px;
  width: 100%;
`;

export const AllInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 36px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-size: 17px;

  font-weight: 200;
  line-height: 1.22;
`;

export const Field = styled(FormikField)`
  border-radius: 10px;
  border: 1px solid #000;
  background-color: transparent;
  padding: 8px 20px;
  font-size: 16px;

  &:focus {
    outline: 1.5px solid ${colors.mainAccentColor};
  }

  &::placeholder {
    color: ${colors.placeholderColor};

    font-weight: 300;
  }
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  color: #fff;
  border-radius: 10px;
  background: ${colors.mainAccentColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 6px 40px;
  font-size: 18px;
  cursor: pointer;
  transition: transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  bottom: -24px;
  left: 20px;
  color: #b40101;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.22;
`;
