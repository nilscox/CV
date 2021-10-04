import React from 'react';

import styled from '@emotion/styled';

import { useLanguage } from '../Main/Flags';
import { color, fontSize, space } from '../theme';
import { Contact as ContactType } from '../types';

import Envelope from './icons/Envelope.svg';
import GitHub from './icons/GitHub.svg';
import LinkedIn from './icons/LinkedIn.svg';
import Phone from './icons/Phone.svg';
import Twitter from './icons/Twitter.svg';
import Web from './icons/Web.svg';

const socialIcons = {
  GitHub,
  LinkedIn,
  Twitter,
};

const useContactPlaceholders = (firstName: string) => {
  const language = useLanguage();

  if (language === 'fr') {
    return {
      subject: 'Prise de contact',
      body: `Salut ${firstName} ! J'aimerais échanger avec toi concernant...`,
    };
  } else {
    return {
      subject: 'First contact',
      body: `Hello ${firstName}! I'd like to talk with you about...`,
    };
  }
};

type ContactProps = {
  firstName: string;
  contact: ContactType;
};

export const Contact: React.FC<ContactProps> = ({ firstName, contact }) => {
  const language = useLanguage();
  const { subject, body } = useContactPlaceholders(firstName);

  return (
    <Container>
      {contact.location && <ContactItem>{contact.location}</ContactItem>}

      {contact.phone && (
        <ContactItem icon={Phone} link={`tel:${contact.phone}`}>
          {contact.phone}
        </ContactItem>
      )}

      {contact.email && (
        <ContactItem icon={Envelope} link={`mailto:${contact.email}?subject=${subject}&body=${body}`}>
          {contact.email}
        </ContactItem>
      )}

      {contact.website && (
        <ContactItem icon={Web} link={contact.website}>
          {contact.website}
        </ContactItem>
      )}

      {Object.entries(contact.social).map(([network, { name, link }]) => (
        <ContactItem
          key={network}
          icon={socialIcons[network as keyof ContactType['social']]}
          link={link}
          label={network}
        >
          {name}
        </ContactItem>
      ))}

      {language === 'fr' && <Tutoiement>On peut se tutoyer :)</Tutoiement>}
    </Container>
  );
};

const Container = styled.div`
  text-align: right;
`;

const Tutoiement = styled.div`
  font-size: ${fontSize('small')};
  color: ${color('textBold')};
  text-align: left;
`;

type ContactItemProps = {
  icon?: React.ComponentType;
  link?: string;
  label?: string;
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, link, label, children }) => (
  <ItemContainer as={link ? 'a' : 'div'} href={link}>
    {icon && <Icon as={icon} />}
    <Label>{label}</Label>
    <Value>{children}</Value>
  </ItemContainer>
);

const ItemContainer = styled.a`
  display: flex;
  align-items: center;
  margin: ${space(3, 0)};
  text-decoration: none;
`;

const Icon = styled.svg`
  width: 1.2em;
  height: 1.2em;
  color: ${color('icon')};
  margin-right: ${space(2)};
`;

const Label = styled.div`
  font-size: ${fontSize('big')};
`;

const Value = styled.div`
  margin-left: auto;
`;
