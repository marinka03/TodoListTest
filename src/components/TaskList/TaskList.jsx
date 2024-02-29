import { selectVisibleTasks } from '../../redux/selectors';
import style from './TaskList.module.css';
import { useSelector } from 'react-redux';
import Task from '../Task';

function TaskList() {
  const tasks = useSelector(selectVisibleTasks);
  return (
    <ul className={style.list}>
      {tasks?.map((task, id) => (
        <li className={style.listItem} key={id}>
          <Task task={task} id={id} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
