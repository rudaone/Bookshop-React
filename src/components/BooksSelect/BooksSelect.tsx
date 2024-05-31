import './BooksSelect.css';
import { useDispatch, useSelector } from 'react-redux';
import { setBookLimit } from '../../redux/actionCreators';
import { IStoreState } from '../../types';

const BooksSelect = () => {
  const dispatch = useDispatch();
  const selectedLimit = useSelector((state: IStoreState) => state.books.limit);
  const handleChangeLimit = (e: any) => {
        dispatch(setBookLimit(e.target.value))}

  return (
    <div className='select__wrapper'>
      <div className={`select__title`}>Choose posts view</div>
      <select
        className={`select`}
        onChange={(e) => handleChangeLimit(e)}
        defaultValue={selectedLimit}
      >
        <option value={6}>6 posts</option>
        <option value={12}>12 posts</option>
        <option value={18}>18 posts</option>
      </select>
    </div>
  );
};

export { BooksSelect }