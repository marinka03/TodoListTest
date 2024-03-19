import { IoIosClose } from 'react-icons/io';
import style from './Task.module.css';
// import { useDispatch } from 'react-redux';

// import { toggleCompleted } from '../../redux/filtersSlice';

const Task = ({ task, id }) => {
  // const dispatch = useDispatch();

  // const handleToggle = () => dispatch(toggleCompleted(task));
  const description =
    task.description.length > 30
      ? `${task.description.split('').splice(0, 30).join('')}...`
      : task.description;
 
      // const handleDelete = () => dispatch(deleteTask(id)) //Redux
      const handleDelete = () => {
        const currentValue = JSON.parse(localStorage.getItem('todos'));
      //  const result = currentValue.filter((item, idx) => {
      //    return currentValue.indexOf(idx) !== id
      //  })
      const result = currentValue.filter((item) => {
        return item.name !== currentValue[id].name
      })
        return localStorage.setItem('todos', JSON.stringify(result))
      }
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <input
          id="ch"
          type="checkbox"
          className={style.checkbox}
          checked={task.completed}
          // onChange={handleToggle}
        />
        <label htmlFor="ch" className={style.text}>
          {task.name} <span className={style.description}>{description}</span>
        </label>
      </div>
      <button className={style.btn} onClick={handleDelete}>
        <IoIosClose size={24} fill="orangered" />
      </button>
    </div>
  );
};

export default Task;
