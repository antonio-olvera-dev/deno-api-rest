import { Application, Router } from "https://deno.land/x/oak@v6.4.1/mod.ts";


class UsersRoutes {

    lista = ["Antonio", 'Pepe', 'Juan', 'Vicente', 'Victor', 'Pedro'];
    router: Router = new Router();
    constructor() {

        //---Get all users---
        this.router.get("/users", (ctx) => {
            ctx.response.body = this.lista;
        });

        //---Get user select---
        this.router.get("/users/:id", (ctx) => {
            const id = ctx.params.id
            ctx.response.body = `${this.lista[Number(id)]}`;
        });

        //---Push a user---
        this.router.post("/users/add", async (ctx) => {
            const { request, response } = ctx;
            const newUser = await request.body({ type: "json" }).value;
            this.lista.push(newUser.name);
            response.body = `Add: ${newUser.name}\nList: ${this.lista}`;
        });

        //---Delete a user---
        this.router.delete("/users/del/:id", (ctx) => {
            const id = ctx.params.id;
            const oldUser: string = this.lista[Number(id)];
            const newUser: string[] = [];
            for (let i = 0; i < this.lista.length; i++) {
                if (Number(id) != i) {
                    newUser.push(this.lista[i]);
                }
            }
            this.lista = newUser;
            ctx.response.body = `Del: ${oldUser}\nList: ${this.lista}`;
        });

        //---Update a user---
        this.router.put("/users/update/:id", async(ctx) => {
            const id = ctx.params.id;
            const oldUser: string = this.lista[Number(id)];
            const newUser: string[] = [];
            for (let i = 0; i < this.lista.length; i++) {
                if (Number(id) != i) {
                    newUser.push(this.lista[i]);
                }else{
                   const item = await ctx.request.body({type:"json"}).value
                    newUser.push(item.name);
                }
            }
            this.lista = newUser;
            ctx.response.body = `Update: ${oldUser}\nList: ${this.lista}`;
        });

    }
}


export const usersRoutes = new UsersRoutes().router;

