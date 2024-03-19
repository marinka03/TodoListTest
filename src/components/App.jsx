import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import ActiveTasks from './ActiveTasks';
import CreateTasks from './CreateTasks';
import CompletedTasks from './CompletedTasks';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/HomePage" element={<HomePage />} >
          <Route path='active' element={<ActiveTasks/>}/>
          <Route path='create' element={<CreateTasks/>}/>
          <Route path='completed' element={<CompletedTasks/>}/>
        </Route>
        <Route path='*' element={'Not found...'}/>
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
