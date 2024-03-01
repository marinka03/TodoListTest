import { Link } from 'react-router-dom';
import style from './WelcomePage.module.css';

function WelcomePage() {
  return (
    <main className={style.wrapper}>
      <h1 className={style.title}>
        Your Todo List
      </h1>
      <Link className={style.link} to={'HomePage'}>
        Create
      </Link>
    </main>
  );
}

export default WelcomePage;
