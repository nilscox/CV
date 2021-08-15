import React from 'react';

const processLine = (line: string) => {
  return line
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
    .replace(/_([^*]+)_/g, '<em>$1</em>');
};

const processLines = (lines: string) => {
  return `<p>${lines}</p>`;
};

type MarkdownProps = {
  children: string;
};

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  // prettier-ignore
  const html = children
    .split('\n')
      .map(processLine)
    .join('\n')
    .split('\n\n')
      .map(processLines)
    .join('\n\n');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;
