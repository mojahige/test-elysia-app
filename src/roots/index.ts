import { Elysia } from "elysia";
import { home } from "src/roots/home";
import { htmz } from "src/roots/htmz";

export const roots = new Elysia();

roots.use(home).use(htmz);
