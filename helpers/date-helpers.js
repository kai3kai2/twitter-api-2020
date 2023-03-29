const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

// 根據官網，加 boolean 可以把 "ago" 消掉
module.exports = {
  relativeTime: a => dayjs(a).fromNow(true)
}
