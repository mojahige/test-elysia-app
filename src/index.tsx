import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import { Root } from "./components/root";

// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

const app = new Elysia();

app
  .use(html())
  .get("/", () => (
    <Root
      title="🦊 Hello ElysiaJS"
      bodyContents={
        <>
          <h1>🦊 Hello ElysiaJS</h1>
          <p>ElysiaJS is Ergonomic Framework for Humans</p>
          <p>
            <a href="https://elysiajs.com/" target="_blank" rel="noreferrer">
              Document
            </a>
          </p>
        </>
      }
    />
  ))
  .get("/dog.html", () => <p>🐶</p>);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
