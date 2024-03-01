import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
