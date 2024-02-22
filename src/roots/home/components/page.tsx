import { Root } from "src/components/root";

export const Page = () => {
  return (
    <Root
      title="🦊 Hello ElysiaJS"
      bodyContents={
        <>
          <h1>🦊 Hello ElysiaJS</h1>
          <blockquote>
            <p>
              Ergonomic Framework for Humans TypeScript with End-to-End Type
              <br />
              Safety, unified type system and outstanding developer experience.
              <br />
              Supercharged by Bun.
            </p>
          </blockquote>
          <cite>
            <a href="https://elysiajs.com/" target="_blank" rel="noreferrer">
              https://elysiajs.com/
            </a>
          </cite>
        </>
      }
    />
  );
};
