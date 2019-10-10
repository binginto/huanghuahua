const fs = require('fs')
const marked = require('marked')
const path = require('path')
process.env.mock = true


describe('init', async () => {
  it('markdown', async () => {
    const blogs = await fs.readdirSync(path.resolve(__dirname, './blog-md'))
    for (let i = 0; i < blogs.length; i++) {
      const blog = await fs.readFileSync(path.resolve(__dirname, './blog-md/' + blogs[i]))
      const htmlStr = marked(blog.toString())
      // 写入文件内容（如果文件不存在会创建一个文件）
      // 传递了追加参数 { 'flag': 'a' }
      const newFile = blogs[i].replace('.md', '.html')
      fs.writeFile('./blog-html/' + newFile, htmlStr, { 'flag': 'a' }, function (err) {
        if (err) {
          throw err;
        }
      });
    }
  })
})
