import { ComponentProps, ComponentType, PropsWithChildren, useEffect } from 'react';

import { createInstance, MatomoProvider, useMatomo } from '@datapunt/matomo-tracker-react';
import { useLocation } from 'react-router-dom';

const NODE_ENV = process.env.NODE_ENV;
const TRACKING_URL = process.env.TRACKING_URL;
const TRACKING_SITE_ID = process.env.TRACKING_SITE_ID;

const instance = createInstance({
  urlBase: TRACKING_URL as string,
  siteId: Number(TRACKING_SITE_ID),
  disabled: NODE_ENV !== 'production',
});

const MatomoProviderWithChildren = MatomoProvider as ComponentType<
  PropsWithChildren<ComponentProps<typeof MatomoProvider>>
>;

export const TrackingProvider = ({ children }: PropsWithChildren) => (
  <MatomoProviderWithChildren value={instance}>{children}</MatomoProviderWithChildren>
);

export const TrackPageView = () => {
  const location = useLocation();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({});
  }, [location.pathname, trackPageView]);

  return null;
};
