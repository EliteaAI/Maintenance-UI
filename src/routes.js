import { DEV, VITE_BASE_URI } from '@/common/constants';

const RouteDefinitions = {
  // ExampleShowcase: '/examples/showcase',

  
  Maintenance: '/maintenance',
};

export const getBasename = () => {
  return DEV ? '' : VITE_BASE_URI;
};

export default RouteDefinitions;
