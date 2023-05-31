import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-routes-path.js";

const database = new Database();
export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const users = database.select("users");
      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const { name, email, cnpj } = req.body;
      const user = {
        id: randomUUID(),
        name,
        email,
        cnpj,
      };

      database.insert("users", user);
      return res.writeHead(201).end("criar");
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {},
  },
];
