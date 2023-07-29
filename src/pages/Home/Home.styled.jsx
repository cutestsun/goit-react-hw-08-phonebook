import styled from 'styled-components';
import bgImage from 'img/home-bg-img.jpg';
import bgImage2x from 'img/home-bg-img@2x.jpg';

export const HomeSection = styled.section`
  min-width: 320px;

  position: relative;
  padding-top: 64px;
  /* padding-bottom: 46px; */
  height: calc(100vh - 96px);
  max-height: 920px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 25vh;
  max-height: 300px;

  @media screen and (min-height: 1500px) {
    row-gap: 375px;
  }
`;

export const Title = styled.h1`
  font-family: 'Julius Sans One';
  font-weight: 400;
  text-align: right;
  font-size: 62px;
  letter-spacing: 0.64px;
  line-height: 1.09;
  width: 650px;
  margin-left: auto;
`;

export const Description = styled.p`
  font-family: 'Julius Sans One';
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.24px;
  width: 748px;
  text-indent: 20px;
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
  background-size: cover;
  background-position: 0 -62px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImage2x});
  }
`;
