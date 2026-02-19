import { Elysia } from "elysia"
import { openapi } from "@elysiajs/openapi"
import { CloudflareAdapter } from "elysia/adapter/cloudflare-worker"
import helloRoute from "./routes/hello.route"

const app = new Elysia({
  adapter: CloudflareAdapter,
})
  .use(
    openapi({
      documentation: {
        info: {
          title: "Elysia on Cloudflare",
          version: "0.1.0",
          description: "Elysia running on Cloudflare Worker with R2 and KV",
        },
      },
    }),
  )
  .use(helloRoute)
  .get("/", () => ({ hello: "Bun👋" }))
  .compile()

export type AppType = typeof app
export default app
