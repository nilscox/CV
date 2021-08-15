import React from 'react';

import styled from '@emotion/styled';

import { color, fontSize, letterSpacing, lineHeight, space } from '../theme';
import { Data } from '../types';

import { About } from './About';
import { Flags } from './Flags';
import { Interests } from './Interests';
import { Section, SectionTitle } from './Section';

export const Main: React.FC<{ data: Data }> = ({ data }) => (
  <Container>
    <Flags />

    <Title>
      <FirstName>{data.firstName}</FirstName>
      <LastName>{data.lastName}</LastName>
    </Title>

    <About link={data.cvLink}>{data.aboutMe}</About>

    <Separator />

    <Headline>{data.headline}</Headline>

    <Section title={data.labels.jobs} entries={data.experience} />
    <Section title={data.labels.projects} entries={data.projects} />
    <Section title={data.labels.education} entries={data.education} />

    <SectionTitle>{data.labels.interests}</SectionTitle>
    <Interests interests={data.interests} />
  </Container>
);

const Container = styled.main`
  position: relative;
  flex: 4;
  padding: ${space(2)};
`;

const Title = styled.h1`
  margin: ${space(3, 0)};
  text-align: center;
  font-weight: normal;
  font-size: ${fontSize('title')};
  letter-spacing: ${letterSpacing('title')};

  & > * {
    display: inline-block;
  }
`;

const FirstName = styled.span`
  margin-right: ${space(3)};

  &::first-letter {
    color: ${color('orange')};
  }
`;

const LastName = styled.span`
  &::first-letter {
    color: ${color('blue')};
  }
`;

const Separator = styled.hr`
  margin: 0;
  border: 0;
  border-bottom: 1px solid ${color('border')};
`;

const Headline = styled.div`
  margin: ${space(4, 3)};
  font-size: ${fontSize('big')};
  line-height: ${lineHeight('big')};
  text-align: justify;
`;
