import { Elysia } from "elysia";
import { Page } from "./components/page";
import {
  CatContent,
  DogContent,
  HorseContent,
} from "./components/tabs/content";
import { Demo as TabsDemo } from "./components/tabs/demo";

export const htmz = new Elysia({ prefix: "/htmz" });

htmz
  .get("/", () => <Page />)
  .get("/tabs.html", () => <TabsDemo />)
  .group("/tabs", (app) =>
    app
      .get("/cat.html", () => <CatContent />)
      .get("/dog.html", () => <DogContent />)
      .get("/horse.html", () => <HorseContent />)
  );
