import { Link } from 'react-router-dom';
import style from './WelcomePage.module.css';

function WelcomePage() {
  return (
    <div className={style.wrapper}>
      <h1
        style={{
          fontSize: 40,
          color: '#010101',
        }}
      >
        Your Todo List
      </h1>
      <Link
        style={{
          fontSize: 30,
          color: '#d0fafd',
          backgroundColor: '#0abad0',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          padding: '5px 25px',
          textDecoration: 'none',
        }}
        to={'HomePage'}
      >
        Create
      </Link>
    </div>
  );
}

export default WelcomePage;
