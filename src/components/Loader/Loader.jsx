import { Oval } from 'react-loader-spinner';
import { BtnLoaderWrapper, LoaderWrapper } from './Loader.styled';
import { colors } from 'helpers/variables';

export const Loader = ({ size }) => {
  return (
    <LoaderWrapper>
      <Oval
        height={size}
        width={size}
        color={colors.mainAccentColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={colors.mainAccentColor}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderWrapper>
  );
};

export const DeleteBtnLoader = ({ size }) => {
  return (
    <BtnLoaderWrapper>
      <Oval
        height={size}
        width={size}
        color={colors.mainAccentColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={colors.mainAccentColor}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </BtnLoaderWrapper>
  );
};
