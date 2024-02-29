import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import { statusFilters } from '../../redux/constants';
import { selectStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filtersSlice';
import style from './StatusFilter.module.css';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={style.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        Create
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>

      {/* <ul>
        <li>
          <Link to="mission">Create</Link>
        </li>
        <li>
          <Link to="team">Active</Link>
        </li>
        <li>
          <Link to="reviews">Completed</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default StatusFilter;
