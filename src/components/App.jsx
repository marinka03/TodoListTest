import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/WelcomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectError, selectIsLoading, selectTasks } from '../redux/selectors';
import GlobalStyles from './GlobalStyles';
import { AllTasks } from '../redux/tasksSlice';

const getInitialTodos = allTasks => {
  const storageTodos = localStorage.getItem('todos');
  const parsedTodos = JSON.parse(storageTodos);
  if (storageTodos) {
    return parsedTodos;
  }
  return allTasks;
};

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allTasks = useSelector(selectTasks);
  useEffect(() => {
    //ЗРОБИТИ ПЕРЕВІРКУ ЧИ Є ЩОСЬ В LOCAL
    const items = getInitialTodos(allTasks);
    // console.log({type:'AllTasks' ,payload: items})
    // dispatch({ type: 'tasks', payload: {items}});
    dispatch(AllTasks(items));
  }, []);
  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
