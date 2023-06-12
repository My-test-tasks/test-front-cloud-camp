import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ROUTES from '@configs/routes';
import Main from '@pages/Main';
import Create from '@pages/Create';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.main} element={<Main />} />
        <Route path={ROUTES.create} element={<Create />} />
        <Route path={ROUTES.all} element={<Navigate to={ROUTES.index} replace />} />
        <Route index element={<Main />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
