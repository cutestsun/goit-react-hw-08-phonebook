import styled from 'styled-components';
import LoginBgImage from 'img/login-bg-img.jpg';
import LoginBgImage2x from 'img/login-bg-img@2x.jpg';
import ContactsBgImage from 'img/contacts-bg-img.jpg';
import ContactsBgImage2x from 'img/contacts-bg-img@2x.jpg';

export const LoginBgWrapper = styled.div`
  min-width: 320px;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${LoginBgImage});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  filter: blur(1.5px);

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(${LoginBgImage2x});
    background-size: cover;
    background-position: center;
  }
`;

export const ContactsBgWrapper = styled.div`
  min-width: 320px;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${ContactsBgImage});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(${ContactsBgImage2x});
    background-size: cover;

    background-position: top right;
  }
`;
