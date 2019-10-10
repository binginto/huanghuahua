const fs = require('fs')
const marked = require('marked')
const path = require('path')
process.env.mock = true

const title = '测试'

describe('init', async () => {
  it('markdown', async () => {
    const blog = await fs.readFileSync(path.resolve(__dirname, './blog-md/' + title + '.md'))
    const htmlStr = marked(blog.toString())
    console.log(htmlStr)
  })
})