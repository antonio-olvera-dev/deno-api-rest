import { Application, Router } from "https://deno.land/x/oak@v6.4.1/mod.ts";
import { usersRoutes } from "./routes/users.routes.ts";
const app = new Application();

//-ROUTES-
//---Users---
app.use(usersRoutes.routes());
app.use(usersRoutes.allowedMethods());



const port = 8000;
console.log(`http://localhost:${port}/`);
await app.listen({ port: port });
