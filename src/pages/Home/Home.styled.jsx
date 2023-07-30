import styled from 'styled-components';
import bgImage from 'img/home-bg-img.jpg';
import bgImage2x from 'img/home-bg-img@2x.jpg';
import { colors } from 'helpers/variables';

export const HomeSection = styled.section`
  min-width: 320px;

  position: relative;
  padding-top: 64px;
  padding-bottom: 64px;
  height: calc(100vh - 94px);
  max-height: 820px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1439.98px) {
    height: calc(100vh - 86px);
    padding-top: 48px;
    padding-bottom: 48px;
    max-height: 760px;
  }
  @media screen and (max-width: 1023.98px) {
    height: calc(100vh - 76px);
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 767.98px) {
    height: calc(100vh - 65px);
    padding-top: 28px;
    padding-bottom: 28px;
    max-height: 850px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: calc(100vh - 94px - 128px);
  justify-content: space-between;
  max-height: 692px;

  @media screen and (max-width: 1439.98px) {
    height: calc(100vh - 86px - 96px);
    max-height: 664px;
  }
  @media screen and (max-width: 1023.98px) {
    height: calc(100vh - 76px - 80px);
    max-height: 680px;
  }
  @media screen and (max-width: 767.98px) {
    height: calc(100vh - 65px - 56px);
    max-height: 794px;
  }
`;

export const Title = styled.h1`
  font-family: 'Julius Sans One';
  font-weight: 400;
  text-align: right;
  font-size: 66px;
  letter-spacing: 0.64px;
  line-height: 1.09;
  width: 650px;

  @media screen and (max-width: 1439.98px) {
    width: 500px;
    font-size: 50px;
  }
  @media screen and (max-width: 1023.98px) {
    width: 450px;
    font-size: 43px;
  }
  @media screen and (max-width: 767.98px) {
    width: 320px;
    font-size: 31px;
  }
  @media screen and (max-width: 413.98px) {
    width: 77vw;
    font-size: 7.5vw;
  }
  @media screen and (max-width: 319.98px) {
    width: 246px;
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-family: 'Julius Sans One';
  font-size: 22px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0.24px;
  width: 748px;
  text-indent: 20px;

  @media screen and (max-width: 1439.98px) {
    font-size: 18px;
    width: 608px;
  }
  @media screen and (max-width: 1023.98px) {
    line-height: 1.3;
    font-size: 15px;
    width: 508px;
  }
  @media screen and (max-width: 969.98px) {
    font-size: 15px;
    width: 488px;
  }
  @media screen and (max-width: 899.98px) {
    width: 460px;
  }
  @media screen and (max-width: 767.98px) {
    text-indent: 14px;
    padding: 2px;
    background-color: ${colors.transparentBgColor};
    border-radius: 4px;
    font-weight: 500;
    font-size: 16.8px;
    width: 100%;
  }
  @media screen and (max-width: 413.98px) {
    font-size: 4.05vw;
  }
  @media screen and (max-width: 359.98px) {
    font-size: 3.95vw;
  }
  @media screen and (max-width: 339.98px) {
    /* font-size: 3.85vw; */
  }
  @media screen and (max-width: 319.98px) {
    font-size: 12.64px;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 50%;

  height: 100%;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImage2x});
  }

  @media screen and (max-width: 767.98px) {
    width: 100%;
    background-position: top;
  }
`;
