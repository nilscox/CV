import styled from '@emotion/styled';

import { space } from '../theme';

type SkillsProps = {
  skills: Record<string, string>;
};

export const Skills = ({ skills }: SkillsProps) => (
  <Container>
    {Object.entries(skills).map(([skill, level], index) => (
      <Skill key={index} level={level.length}>
        {skill}
      </Skill>
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Skill = styled.div<{ level: number }>`
  font-size: ${({ level }) => ['', '0.9em', '1.1em', '1.4em'][level]};
  margin: ${space(2, 1)};
`;
