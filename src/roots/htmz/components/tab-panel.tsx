export const TabPanel = ({
  children,
  ...attributes
}: { children?: JSX.Element } & JSX.HtmlTag) => {
  return (
    <div role="tabpanel" {...attributes}>
      {children}
    </div>
  );
};
