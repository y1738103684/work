const Koa = require('koa')
const Router = require('@koa/router')
const body = require('koa-bodyparser');

const mongoose = require('mongoose')

const app = new Koa();
const router = new Router();

mongoose.connect('mongodb://localhost/test');

const schema = mongoose.Schema({
  room_id: {
    type: String,
  },
  start_time: {
    type: String,
  },
  end_time: {
    type: String,
  },
  playback_url: {
    type: String,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const PlaybackRecord = mongoose.model('playback_records', schema);

const playbackRecord = new PlaybackRecord({
  room_id: "12345",
  start_time: "1997-03-13 11:22:33",
  end_time: "1997-03-13 11:22:33",
  playback_url: "www.baidu.com"
});

app.use(body())

router.post('/find', async (ctx, next) => {
  // const docs = await PlaybackRecord.find({room_id: "12345"}).skip(1).limit(5);
  const params = ctx.request.body
  ctx.state = 200
  ctx.body = params
})
  


app.use(router.routes(), router.allowedMethods());
app.listen(8888);