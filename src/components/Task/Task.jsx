import { IoIosClose } from 'react-icons/io';
import style from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasksSlice';
import { toggleCompleted } from '../../redux/filtersSlice';

const Task = ({ task, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(task));
  const description =
    task.description.length > 30
      ? `${task.description.split('').splice(0, 30).join('')}...`
      : task.description;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <input
          id="ch"
          type="checkbox"
          className={style.checkbox}
          checked={task.completed}
          onChange={handleToggle}
        />
        <label htmlFor="ch" className={style.text}>
          {task.name} <span className={style.description}>{description}</span>
        </label>
      </div>
      <button className={style.btn} onClick={dispatch(deleteTask(id))}>
        <IoIosClose size={24} fill="orangered" />
      </button>
    </div>
  );
};

export default Task;
