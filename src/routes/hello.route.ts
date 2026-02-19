import { Elysia } from "elysia"

const app = new Elysia()

app.get("/hello", () => {
  return { message: "Hello this is hello route!!!!!!!!!" }
})

export default app
