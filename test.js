const Router = require('@koa/router')

let router = new Router()

router.use(async (ctx, next) => {
    console.log('router prev use')
    await next()
})

router.get("/test", two, one, three)

router.use(async (ctx, next) => {
    console.log('router next use')
    await next()
})



async function one(ctx, next) {
  console.log('第一个')
  console.log(ctx.name)
  await next()
}

async function two(ctx, next) {
  console.log('第二个')
  await next()
}

async function three(ctx, next) {
  console.log('第三个')
  await next()
}



module.exports = router