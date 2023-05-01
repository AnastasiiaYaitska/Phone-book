import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selector';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setContactsFilter(e.target.value));
  };

  return (
    <>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={filter} onChange={onChange} />
    </>
  );
};

export default Filter;
