import { lazy } from 'react';

// project imports
import Loadable from '@components/loadable/index.jsx';
import MainLayout from '@layout/main-layout';

const DashboardDefault = Loadable(lazy(() => import('@views/dashboard')));
const UtilsTypography = Loadable(lazy(() => import('@views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('@views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('@views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('@views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('@views/utilities/TablerIcons')));
const SamplePage = Loadable(lazy(() => import('@views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const PrivateRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default PrivateRoutes;