<template>
  <div>
    <div class="top-nav">
      <button @click.stop="showMenu" class="toggle-button navigation-toggle">
        <span class="toggle-button-menu-text">Menu</span>
        <span class="toggle-icon">
          <span class="toggle-button-icon-bar"></span>
          <span class="toggle-button-icon-bar"></span>
          <span class="toggle-button-icon-bar"></span>
        </span>
      </button>
    </div>
    <div class="show-menu showMenuActive" :class="{ active: isShowMenu, unactive: (!isShowMenu && !isFirst)}">
      <div class="top-nav">
        <button @click.stop="showMenu" class="toggle-button navigation-toggle toggle-button-active">
          <span class="toggle-button-menu-text">Menu</span>
          <span class="toggle-icon">
            <span class="toggle-button-icon-bar toggle-button-icon-bar-active-rotate-right"></span>
            <span class="toggle-button-icon-bar toggle-button-icon-bar-active-hide"></span>
            <span class="toggle-button-icon-bar toggle-button-icon-bar-active-rotate-left"></span>
          </span>
        </button>
      </div>
      <div class="my-container">
        <nav class="nav-container">
          <ul class="hide-nav hide-col">
            <li class="nav-item">
              <span @click.stop="routeLink('/aboutMe')" class="hide-link">About Me</span>
            </li>
            <li class="nav-item">
              <span @click.stop="routeLink('/myWork')" class="hide-link">My Work</span>
            </li>
            <li class="nav-item">
              <span @click.stop="routeLink('/myBlog')" class="hide-link">My Blog</span>
            </li>
            <li class="nav-item">
              <span @click.stop="routeLink('/contactMe')" class="hide-link">Contact Me</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowMenu: false,
        isFirst: true
      }
    },
    created() {},
    methods: {
      showMenu() {
        this.isShowMenu = !this.isShowMenu
        this.isFirst = false
      },
      routeLink(page) {
        this.$router.push({
          path: page
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/index';

  .hide-link:hover {
    color: #0dc3ad;
  }

  .active {
    animation: mymove infinite;
    animation-duration: 0.8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .unactive {
    animation: missmove infinite;
    animation-duration: 0.8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes mymove {
    from {
      top: -100vh;
    }

    to {
      top: 0;
    }
  }

  @keyframes missmove {
    from {
      top: 0;
    }

    to {
      top: -100vh;
    }
  }
</style>