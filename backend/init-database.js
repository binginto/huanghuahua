const fs = require('fs')
const marked = require('marked')
const path = require('path')
// let database = require('./database')
process.env.mock = true


describe('init', async () => {
  it('markdown', async () => {
    const blogs = await fs.readdirSync(path.resolve(__dirname, './blog-md'))
    let database = []
    for (let i = 0; i < blogs.length; i++) {
      const blog = await fs.readFileSync(path.resolve(__dirname, './blog-md/' + blogs[i]))
      const htmlStr = marked(blog.toString())
      // 写入文件内容（如果文件不存在会创建一个文件）
      // 传递了追加参数 { 'flag': 'a' }
      const newFile = blogs[i].replace('.md', '')
      const params = {
        id: newFile,
        content: htmlStr
      }
      database.push(params)
    }
    const files = 'module.exports = ' + JSON.stringify(database, null, '\t')
    fs.writeFile('./database.js', files, { 'flag': 'w' }, function (err) {
      if (err) {
        throw err;
      }
    });
    fs.writeFile('../src/config/database.js', files, { 'flag': 'w' }, function (err) {
      if (err) {
        throw err;
      }
    });
  })
})
