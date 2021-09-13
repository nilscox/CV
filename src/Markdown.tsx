import React from 'react';

const processLine = (line: string) => {
  return (
    line
      // [a link](https://location)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      // _bold_
      .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
      // _italic_
      .replace(/_([^*]+)_/g, '<em>$1</em>')
      // 42^{ème}
      .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
  );
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
    .join('');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;
