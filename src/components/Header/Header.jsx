import { useSelector } from 'react-redux';
import TaskCounter from '../TaskCounter';
import style from './Header.module.css';
import { selectTasks } from '../../redux/selectors';

const Header = () => {
  const tasks = useSelector(selectTasks);
  return (
    <header className={style.wrapper}>
      <section className={style.section}>
        <h2 className={style.title}>Tasks: {tasks.length}</h2>
        <TaskCounter />
      </section>
    </header>
  );
};

export default Header;
