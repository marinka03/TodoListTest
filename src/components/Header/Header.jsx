import TaskCounter from '../TaskCounter';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.wrapper}>
      <section className={style.section}>
        <h2 className={style.title}>Tasks: 0</h2>
        <TaskCounter />
      </section>
    </header>
  );
};

export default Header;
