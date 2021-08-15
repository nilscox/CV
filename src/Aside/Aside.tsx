import React from 'react';

import styled from '@emotion/styled';

import { color, fontSize, space } from '../theme';
import { Data } from '../types';

import { Contact } from './Contact';
import { Languages } from './Languages';
import photo from './photo.jpg';
import { Skills } from './Skills';

export const Aside: React.FC<{ data: Data }> = ({ data }) => (
  <Container>
    <Photo src={photo} alt="My face =)" />

    <SectionTitle>{data.labels.contact}</SectionTitle>
    <Contact contact={data.contact} />

    <SectionTitle>{data.labels.skills}</SectionTitle>
    <Skills skills={data.skills} />

    <SectionTitle>{data.labels.languages}</SectionTitle>
    <Languages languages={data.languages} />

    <SectionTitle>{data.labels.ambitions}</SectionTitle>
    {data.ambitions.map((text, index) => (
      <Ambition key={index}>{text}</Ambition>
    ))}
  </Container>
);

const Container = styled.aside`
  flex: 1;
  padding: ${space(2)};
  border-right: 1px solid ${color('border')};
  background: ${color('aside')};
`;

const Photo = styled.img`
  width: 100%;
  opacity: 0.85;
  transition: 1000ms filter ease-out;
  filter: grayscale(100%) brightness(120%) contrast(130%);

  &:hover {
    filter: grayscale(20%) brightness(110%) contrast(130%);
    transition-timing-function: cubic-bezier(0.7, 0.1, 0.9, 0.7);
    transition-delay: 1100ms;
  }

  @media print {
    filter: grayscale(100%) brightness(130%) contrast(100%);
    opacity: 1;
  }
`;

const SectionTitle = styled.h2`
  margin-top: ${space(4)};
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${fontSize('section')};
  text-align: right;
`;

const Ambition = styled.div`
  margin: ${space(3, 0)};
`;
