import { ReactNode } from 'react';

import styled from '@emotion/styled';

import { fontSize, space } from '../theme';
import { Interest } from '../types';

type InterestsProps = {
  interests: Interest[];
};

export const Interests = ({ interests }: InterestsProps) => (
  <Container>
    {interests.map(({ name, description, link }, index) => (
      <Interest key={index} title={name} link={link}>
        {description}
      </Interest>
    ))}
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: ${space(3)};
`;

type InterestProps = {
  title: string;
  link?: string;
  children: ReactNode;
};

const Interest = ({ title, children, link }: InterestProps) => (
  <InterestContainer as={link ? 'a' : 'div'} href={link}>
    <Title>{title}</Title>
    {children}
  </InterestContainer>
);

const InterestContainer = styled.a`
  text-decoration: none;
`;

const Title = styled.div`
  font-size: ${fontSize('big')};
  margin-bottom: ${space(1)};
  text-align: center;
`;
