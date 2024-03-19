import style from './TaskCounter.module.css';

const TaskCounter = () => {

  return (
    <div>
      <p className={style.text}>Active: </p>
      <p className={style.text}>Completed: </p>
    </div>
  );
};

export default TaskCounter;
