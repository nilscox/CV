import React from 'react';

import styled from '@emotion/styled';

import Markdown from '../Markdown';
import { fontSize, space } from '../theme';
import { Entry as EntryType } from '../types';

import { Entries, Entry } from './Entry';

type SectionProps = {
  title: string;
  entries: EntryType[];
};

export const Section: React.FC<SectionProps> = ({ title, entries }) => (
  <>
    <SectionTitle>{title}</SectionTitle>

    <Entries>
      {entries.map(
        ({ from, to, date, name, company, link, companyLink, location, description, technologies }, index) => (
          <Entry
            key={index}
            from={from}
            to={to}
            date={date}
            title={name}
            link={link}
            titleRight={<SectionTitleRight link={companyLink} company={company} location={location} />}
            right={technologies && <>{technologies.join(', ')}</>}
          >
            <Markdown>{description}</Markdown>
          </Entry>
        ),
      )}
    </Entries>
  </>
);

const SectionLink = styled.a`
  text-decoration: none;
`;

export const SectionTitle = styled.h2`
  margin: ${space(3, 0, 2)};
  font-size: ${fontSize('section')};
  color: ${({ theme }) => theme.colors.blue};
`;

type SectionTitleRightProps = {
  link?: string;
  company?: string;
  location?: string;
};

const SectionTitleRight: React.FC<SectionTitleRightProps> = ({ link, company, location }) => {
  if (!company && !location) {
    return null;
  }

  return (
    <SectionLink as={link ? 'a' : 'div'} href={link}>
      {company && <strong>{company}</strong>}
      {company && location && ', '}
      {location}
    </SectionLink>
  );
};
