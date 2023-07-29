import styled from 'styled-components';

export const ContactsContainer = styled.div`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  min-width: 320px;
  max-width: 414px;
  width: 100%;
  height: calc(100% - (64px * 2));
  min-height: 480px;
  max-height: 1024px;

  display: flex;
  justify-content: space-around;
  /* column-gap: 19%; */
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 920px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1200px;
  }
`;
