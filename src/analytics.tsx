import { useEffect } from 'react';

import { createInstance, MatomoProvider, useMatomo } from '@jonkoops/matomo-tracker-react';
import { useLocation } from 'react-router-dom';

const NODE_ENV = process.env.NODE_ENV;
const ANALYTICS_URL = process.env.ANALYTICS_URL;
const ANALYTICS_SITE_ID = process.env.ANALYTICS_SITE_ID;

const instance = createInstance({
  urlBase: ANALYTICS_URL as string,
  siteId: Number(ANALYTICS_SITE_ID),
  disabled: NODE_ENV !== 'production',
});

type AnalyticsProviderProps = {
  children: React.ReactNode;
};

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => (
  <MatomoProvider value={instance}>{children}</MatomoProvider>
);

export const TrackPageView = () => {
  const location = useLocation();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({});
  }, [location.pathname, trackPageView]);

  return null;
};
