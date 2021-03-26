<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">E2C</span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <md-card class="md-layout-item md-size-75">
          <md-card-header>
            <div class="md-layout">
              <div class="md-layout-item md-size-25">
                <md-avatar class="md-large">
                  <img
                    src="https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat-1024x681.jpg"
                    alt="Avatar"
                  />
                </md-avatar>
              </div>

              <div class="md-layout-item md-size-25">
                <div class="md-title">
                  Athus
                </div>
                <div class="md-subhead">Recebeu: 1200 Tokens E2C</div>
              </div>

              <div class="md-layout-item md-size-25">
                <md-avatar class="md-large">
                  <img
                    src="https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat-1024x681.jpg"
                    alt="Avatar"
                  />
                </md-avatar>
              </div>
            </div>
          </md-card-header>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            itaque ea nostrum.
          </md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>

      </md-app-content>
    </md-app>
       
  </div>
</template>
<script>

export default {
  name: "MenuApp", 
  data: () => ({
    menuVisible: false,
  }),
};
</script>
<style lang="scss" scoped>
.md-app {
  max-height: 900px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 180px;
  max-width: calc(100vw - 125px);
}
.img {
  max-width: 250px;
}
</style>
