import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Maintenance from '@/[fsd]/pages/maintenance/index.jsx';
import { MISSING_ENVS } from '@/common/constants';
import EnvMissingPage from '@/pages/EnvMissingPage';
import { getBasename } from '@/routes';

const App = () => {
  const basename = getBasename();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="*"
        element={<Maintenance />}
      />
    ),
    { basename },
  );

  return MISSING_ENVS.length > 0 ? <EnvMissingPage /> : <RouterProvider router={router} />;
};

export default App;
