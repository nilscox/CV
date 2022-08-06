import { ReactNode, useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { color, fontSize, lineHeight, space } from '../theme';

type EntryProps = {
  from?: string;
  to?: string;
  date?: string;
  title: ReactNode;
  link?: string;
  titleRight?: ReactNode;
  right?: ReactNode;
  children: ReactNode;
};

export const Entry = ({ from, to, date, title, link, titleRight, right, children }: EntryProps) => (
  <Flex>
    <Dates from={from} to={to} date={date} />
    <Container>
      <Flex>
        <Title>{link ? <a href={link}>{title}</a> : title}</Title>
        {titleRight && <TitleRight>{titleRight}</TitleRight>}
      </Flex>
      <Flex>
        <Content>{children}</Content>
        {right && <Right>{right}</Right>}
      </Flex>
    </Container>
  </Flex>
);

export const Flex = styled.div`
  display: flex;
`;

export const Entries = styled.div`
  display: grid;
  row-gap: ${space(2)};
`;

const Container = styled.div`
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: ${space(0)};
  font-size: ${fontSize('big')};
  font-weight: bold;
  color: ${color('textBold')};

  & a {
    text-decoration: none;
  }
`;

const TitleRight = styled.div`
  margin-left: auto;
  color: ${color('muted')};
`;

const DatesContainer = styled.div`
  min-width: 62px;
  color: ${color('muted')};

  // fix because the entry title's font size is bigger
  position: relative;
  top: 2px;
`;

type DatesProps = {
  from?: string;
  to?: string;
  date?: string;
};

const Dates = ({ from, to: toProp, date }: DatesProps) => {
  const [to, setTo] = useState(toProp);

  useEffect(() => {
    if (!to) {
      const now = new Date();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = String(now.getFullYear());

      setTo(`${month}-${year}`);
    }
  }, [to]);

  return (
    <DatesContainer>
      {date ? (
        <div>{date}</div>
      ) : (
        <>
          <div>{from}</div>
          <div>{to}</div>
        </>
      )}
    </DatesContainer>
  );
};

const Content = styled.div``;

const Right = styled.div`
  min-width: 90px;
  margin-left: ${space(2)};
  padding-left: ${space(2)};
  padding-top: ${space(1)};
  border-left: 1px solid ${color('border')};
  font-size: ${fontSize('small')};
  line-height: ${lineHeight('big')};
  color: ${color('muted')};
`;
