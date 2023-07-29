import { IoSearchSharp, IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';
import { ClearBtn, Input, InputWrapper } from './Filter.styled';
import { colors } from 'helpers/variables';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search"
      />
      <IoSearchSharp
        color={colors.placeholderColor}
        size={24}
        style={{ position: 'absolute', top: '9.5px', left: '16px' }}
      />
      <ClearBtn onClick={() => dispatch(setFilter(''))}>
        <IoClose color={colors.placeholderColor} size={24} />
      </ClearBtn>
    </InputWrapper>
  );
};
