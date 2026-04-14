import { getEnvVar } from '@/utils/env';

export const VITE_SERVER_URL = getEnvVar('VITE_SERVER_URL');
export const VITE_BASE_URI = getEnvVar('VITE_BASE_URI');
export const VITE_PUBLIC_PROJECT_ID = getEnvVar('VITE_PUBLIC_PROJECT_ID');
export const DEV = getEnvVar('DEV');

export const MISSING_ENVS = [
  // { key: 'VITE_SERVER_URL', value: VITE_SERVER_URL },
  // { key: 'VITE_BASE_URI', value: VITE_BASE_URI },
  // { key: 'VITE_PUBLIC_PROJECT_ID', value: VITE_PUBLIC_PROJECT_ID },
]
  .filter(item => item.value === null || item.value === undefined)
  .map(item => item.key);
