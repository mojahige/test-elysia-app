import { Elysia } from "elysia";
import { Page } from "./components/page";

export const home = new Elysia();

home.get("/", () => <Page />);
