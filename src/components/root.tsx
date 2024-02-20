export const Root = ({
  title,
  headContents,
  bodyContents,
}: {
  title: string;
  headContents?: JSX.Element;
  bodyContents?: JSX.Element;
}) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {headContents}
      </head>
      <body>{bodyContents}</body>
    </html>
  );
};
