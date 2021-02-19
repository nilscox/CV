import React from 'react';

import { Data } from '../types';
import withData from '../withData';
import Section from './Section';

import Phone from './icons/Phone';
import Envelope from './icons/Envelope';
import Globe from './icons/Globe';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';
import Twitter from './icons/Twitter';

type SocialProps = {
  icon: React.ComponentType;
  platform: string;
  name: string;
  link: string;
};

const Social: React.FC<SocialProps> = ({ icon: Icon, platform, name, link }) => (
  <a href={link} className={platform}>
    <div className="icon">
      <Icon />
    </div>
    <div className="platform">{platform}</div>
    <div className="name">{name}</div>
  </a>
);

const Contact: React.FC<Data> = ({ contact: { location, phone, email, website, social } }) => (
  <Section title="Contact" className="contact">
    <div className="location">{location}</div>

    {phone && (
      <a href={`tel:${phone}`} className="phone">
        {phone}
        <Phone />
      </a>
    )}

    {email && (
      <a href={`mailto:${email}`} className="email">
        {email}
        <Envelope />
      </a>
    )}

    <a href={website} className="website">
      {website}
      <Globe />
    </a>

    <div className="social">
      <Social platform="LinkedIn" icon={LinkedIn} {...social.LinkedIn} />
      <Social platform="GitHub" icon={GitHub} {...social.GitHub} />
      <Social platform="Twitter" icon={Twitter} {...social.Twitter} />
    </div>
  </Section>
);

export default withData(Contact);
