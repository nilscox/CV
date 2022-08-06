import styled from '@emotion/styled';

import { fontSize, lineHeight } from '../theme';
import { Languages as LanguagesType } from '../types';

type LanguagesProps = {
  languages: LanguagesType;
};

export const Languages = ({ languages }: LanguagesProps) => (
  <div>
    {Object.entries(languages).map(([language, level], index) => (
      <Language key={index}>
        <Label>{language}</Label>
        <div>{level}</div>
      </Language>
    ))}
  </div>
);

const Language = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: ${lineHeight('big')};
`;

const Label = styled.label`
  font-size: ${fontSize('big')};
`;
