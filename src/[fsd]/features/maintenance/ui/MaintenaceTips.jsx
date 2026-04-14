import { memo } from 'react';

import { Box, Link, Typography } from '@mui/material';

import { MaintenaceTipsContainer } from '@/[fsd]/features/maintenance/ui';

const TIPS_LINK = 'https://elitea.ai/docs/home/onboarding-tips/';
const DOCS_LINK = 'https://elitea.ai/docs/';

const MaintenaceTips = memo(() => {
  const styles = getStyles();

  return (
    <MaintenaceTipsContainer sx={styles.tipsContainer}>
      <Typography
        component="div"
        variant="bodyMedium"
        color="text.secondary"
      >
        While we get things ready behind the scenes, why not explore some helpful resources?
      </Typography>
      <Box
        component="ul"
        sx={styles.tipsList}
      >
        <Typography
          component="li"
          variant="bodyMedium"
          color="text.secondary"
        >
          Discover our{' '}
          <Link
            href={TIPS_LINK}
            target="_blank"
            rel="noopener"
            sx={styles.link}
          >
            Tips & Features
          </Link>{' '}
          to get the most out of Elitea
        </Typography>
        <Typography
          component="li"
          variant="bodyMedium"
          color="text.secondary"
        >
          Browse our guides in{' '}
          <Link
            href={DOCS_LINK}
            target="_blank"
            rel="noopener"
            sx={styles.link}
          >
            Documentation.
          </Link>
        </Typography>
      </Box>
    </MaintenaceTipsContainer>
  );
});

/** @type {MuiSx} */
const getStyles = () => ({
  tipsContainer: {},
  tipsList: {
    margin: 0,
    paddingLeft: '1.25rem',
    listStyleType: 'disc',
  },
  link: ({ palette }) => ({
    color: palette.text.link,
    textDecoration: 'underline',

    '&:visited': {
      color: palette.icon.fill.magicAssistant,
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  }),
});

MaintenaceTips.displayName = 'MaintenaceTips';

export default MaintenaceTips;
