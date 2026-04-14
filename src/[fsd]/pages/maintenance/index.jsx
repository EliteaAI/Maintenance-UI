import { memo } from 'react';

import { Box, Typography } from '@mui/material';

import {
  VITE_MAINTENANCE_END,
  VITE_MAINTENANCE_MESSAGE,
  VITE_MAINTENANCE_START,
} from '@/[fsd]/features/maintenance/lib/constants';
import { MaintenaceTips } from '@/[fsd]/features/maintenance/ui';
import WelcomeImage from '@/assets/chat-welcome.png';
import Logo from '@/assets/logo.svg?react';

const Maintenance = memo(() => {
  const styles = getStyles();

  return (
    <Box sx={styles.page}>
      <Box sx={styles.body}>
        <Box sx={styles.logo}>
          <Logo />
        </Box>
        <Box sx={styles.gradientBorder}>
          <Box sx={styles.mainPanel}>
            <Box
              component="img"
              height={60}
              width={60}
              src={WelcomeImage}
              alt="EliteA"
            />
            <Box sx={styles.header}>
              <Typography
                component="div"
                variant="headingLarge"
                color="text.secondary"
              >
                Elitea is under maintenance!
              </Typography>
              {VITE_MAINTENANCE_START && VITE_MAINTENANCE_END && (
                <>
                  <Typography
                    component="div"
                    variant="headingSmall"
                    sx={styles.timeInfo}
                  >
                    {`From ${VITE_MAINTENANCE_START} to ${VITE_MAINTENANCE_END}`}
                  </Typography>
                  {VITE_MAINTENANCE_MESSAGE && (
                    <Typography
                      component="div"
                      variant="headingSmall"
                      sx={styles.timeInfo}
                    >
                      {VITE_MAINTENANCE_MESSAGE}
                    </Typography>
                  )}
                </>
              )}
            </Box>
            <MaintenaceTips />
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

/** @type {MuiSx} */
const getStyles = () => ({
  page: ({ palette }) => ({
    width: '100%',
    minWidth: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
    background: palette.background.default,
    position: 'relative',
  }),
  body: ({ breakpoints }) => ({
    width: '100%',
    maxWidth: '46.25rem',
    boxSizing: 'border-box',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '2rem',
    [breakpoints.down('md')]: {
      width: '34.5rem',
      height: 'auto',
    },
  }),
  logo: {
    width: '6.1875rem',
    height: '1.25rem',
  },
  gradientBorder: ({ palette, breakpoints }) => ({
    // minHeight: '24.2rem',
    height: 'auto',
    width: '100%',
    padding: '0.0625rem',
    borderRadius: '1.5rem',
    background: palette.background.onboarding,
    boxShadow: palette.boxShadow.onboarding,
    [breakpoints.down('md')]: {
      minHeight: '23.6875rem',
      height: 'auto',
    },
  }),
  mainPanel: ({ palette }) => ({
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    background: palette.background.onboardingBody,
    borderRadius: 'calc(1.5rem - 0.0625rem)',
    padding: '2rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }),
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  timeInfo: ({ palette }) => ({
    width: '100%',
    color: palette.icon.fill.magicAssistant,
    textAlign: 'center',
  }),
});

Maintenance.displayName = 'Maintenance';

export default Maintenance;
