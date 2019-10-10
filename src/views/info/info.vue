<template>
  <div>
    <div class="new-container" :style="{backgroundImage: 'url(' + bgImage + ')'}">
      <nav-container></nav-container>
      <state-info :currentInfo="currentInfo"></state-info>
    </div>
    <div id="article">
    </div>
  </div>
</template>

<script>
  import 'jquery'
  import util from '../util/util'
  import navContainer from '../../components/navContainer/navContainer'
  import stateInfo from './components/stateInfo'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/googlecode.css'
  import info from '@/config/info.js'
  import database from '@/config/database.js'

  export default {
    data() {
      return {
        title: 'info',
        currentInfo: {},
        bgImage: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2422436610,701962099&fm=26&gp=0.jpg',
        dataContent: ''
      }
    },
    created() {
      const id = this.$route.query.id
      for (let i in info) {
        if (info[i].id === id) {
          this.currentInfo = info[i]
          this.bgImage = info[i].banner
          break
        }
      }
      const that = this
      setTimeout(() => {
        that.getArticle(id)
      }, 100);
    },
    methods: {
      getArticle(id) {
        let data = ''
        for (let i in database) {
          if (database[i].id === id) {
            data = database[i].content
            this.dataContent = data
            this.hasRichText = true
            break
          }
        }
        $('#article').html(data)
        var blocks = $('#article pre code')
        var bLength = blocks.length
        for (var k = 0; k < bLength; k++) {
          hljs.highlightBlock(blocks[k])
        }
        var tables = $('#article table')
        var tLength = tables.length
        var tbody = $('#article tbody tr td')
        var z = 0
        for (var i = 0; i < tLength; i++) {
          var rows = tables[i].rows
          var cols = tables[i].rows[0].cells
          if (i > 0) {
            z -= cols.length
          }
          for (var j = 0; j < rows.length; j++) {
            for (var t = 0; t < rows[j].cells.length; t++) {
              $(tbody[z]).attr('data-label', rows[0].cells[t].innerText)
              z++
            }
          }
        }
      }
    },
    components: {
      navContainer,
      stateInfo
    }
  }
</script>

<style lang="scss">
  @import '@/styles/variable';

  .new-container {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    color: #fff;
  }

  #article {
    padding: 50px 10vw 100px;
    text-align: left;
    font-family: AvenirNextLTW01-Regular;
    font-size: 17px;
    line-height: 1.75;
    font-weight: 400;

    th,
    td {
      border: solid 1px #dfe2e5;
      padding: 5px 15px;
      font-size: 16px;
    }

    th {
      text-align: center;
    }

    tr:nth-child(even) {
      background: #eee;
    }

    table {
      margin-bottom: 50px;
      overflow: scroll
    }

    @media screen and (max-width: 768px) {
      table {
        border: 0;
      }

      table thead {
        display: none;
      }

      table tr {
        margin-bottom: 10px;
        display: block;
        width: 80vw;
        border-bottom: 2px solid #ddd;
      }

      table td {
        display: block;
        text-align: right;
        font-size: 13px;
        border-bottom: 1px dotted #ccc;
      }

      table td:last-child {
        border-bottom: 0;
      }

      table td:before {
        content: attr(data-label);
        float: left;
        text-transform: uppercase;
        font-weight: bold;
      }
    }

    ul {
      padding: 0;
    }

    li {
      list-style-type: none;

      p {
        text-indent: 0;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 50px 0 20px 0;
      padding-bottom: 5px;
      border-bottom: #eee solid 1px;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
    }

    p {
      text-indent: 2em;
      font-size: 16px;
    }

    pre {
      background: #eee;
      padding: 20px;
      word-break: break-all;
      white-space: pre-wrap;

      code {
        background: #eee;
      }
    }
  }
</style>