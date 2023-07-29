import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';
import { colors, transition } from 'helpers/variables';
import { Link } from 'react-router-dom';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  row-gap: 52px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.22;
  text-decoration: underline;
  text-transform: uppercase;
  margin-bottom: 30px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 17px;
  font-weight: 200;
  line-height: 1.22;
`;

export const Field = styled(FormikField)`
  width: 340px;
  padding: 9px 20px;
  border-radius: 10px;
  border: 1px solid #000;
  font-size: 16px;
  background-color: transparent;

  &:focus {
    outline: 1.5px solid ${colors.mainAccentColor};
  }

  &::placeholder {
    color: ${colors.placeholderColor};
    font-weight: 200;
    line-height: 1.22;
  }
`;

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 64px 40px 44px;
  background-color: ${colors.mainBgColor};
  /* z-index: 999; */
  border-radius: 10px;
  background: #cfcfd1;
  box-shadow: 0px 4px 11px 0px #000;
`;

export const Button = styled.button`
  padding: 6.5px 40px;
  border: none;
  border-radius: 10px;
  background: ${colors.mainAccentColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.2;
  transition: transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const AllInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 30px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 1.22;
`;
export const LogInLink = styled(Link)`
  color: ${colors.mainAccentColor};
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.22;
  text-decoration: underline;
`;

export const TextWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 40px;
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  bottom: -24px;
  left: 20px;
  color: #b40101;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.22;
`;
