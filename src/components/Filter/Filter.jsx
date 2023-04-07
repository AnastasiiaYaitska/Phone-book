import { nanoid } from 'nanoid';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';

export const Filter = () => {
  const filterInputId = nanoid();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setContactsFilter(e.target.value));
  };

  return (
    <>
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterInputId}
        value={filter}
        onChange={onChange}
      />
    </>
  );
};
