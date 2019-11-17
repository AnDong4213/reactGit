const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/a/:id', async ctx => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: { id }
    })
    ctx.respond = false
  })
  router.get('/b/:id', async ctx => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/b',
      query: { id }
    })
    ctx.respond = false
  })
  server.use(router.routes())

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('Koa server port 3000');
  })
})

/* const server = new Koa()
const router = new Router()
router.get('/test/:id', ctx => {
  // ctx.body = `<h4>request /test</h4> ${ctx.params.id}`
  ctx.body = { success: true }
  ctx.set('Content-Type', 'application/json')
})
server.use(async (ctx, next) => {
  // const path = ctx.path
  // const method = ctx.method
  // ctx.body = `<h4>Koa render ${method} ${path}</h4>`
  await next()
})

// server.use(async (ctx, next) => {
//   ctx.body = '<span>Koa render2</span>'
// })
server.use(router.routes())

server.listen(3000, () => {
  console.log('Koa server port 3000');
}) */
