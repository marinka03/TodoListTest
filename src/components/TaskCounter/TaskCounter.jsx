import { useSelector } from 'react-redux';
import style from './TaskCounter.module.css';
import { selectTaskCount } from '../../redux/selectors';

const TaskCounter = () => {
  const { active, completed } = useSelector(selectTaskCount); ///

  return (
    <div>
      <p className={style.text}>Active: {active}</p>
      <p className={style.text}>Completed: {completed}</p>
    </div>
  );
};

export default TaskCounter;
