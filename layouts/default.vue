<template>
  <v-app>
    <!-- SideBar -->
    <v-navigation-drawer disable-resize-watcher v-model="sideDrawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in sideMenu"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Top App Bar -->
    <v-app-bar fixed app>
      <NuxtLink to="/" class="text-decoration-none">
        <v-toolbar-title v-text="title" :to="to" />
      </NuxtLink>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fill-height fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Bottom Navigation -->
    <v-bottom-navigation horizontal fixed height="10vh" color="primary" app>
      <v-app-bar-nav-icon
        @click.stop="sideDrawer = !sideDrawer"
        v-ripple="false"
        plain
      />

      <v-btn
        v-for="(item, i) in bottomMenu"
        :key="i"
        :to="item.to"
        v-ripple="false"
        plain
        large
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
      <v-spacer />
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideDrawer: false,
      sideMenu: [
        {
          icon: 'mdi-account',
          title: 'Account',
          to: '/account',
        },
        {
          icon: 'mdi-bell',
          title: 'Notification',
          to: '/notification',
        },
      ],
      bottomMenu: [
        {
          icon: 'mdi-home',
          title: 'Application',
          to: '/',
        },
      ],
      title: 'Cashier',
    }
  },

  methods: {
    isWelcomeScreen() {
      if (this.$router.currentRoute.path == '/') {
        this.$router.push('/register')
      }
    },
  },
  // Watch digunakan untuk melakukan pengecekan
  watch: {
    $route() {
      this.isWelcomeScreen()
    },
  },
  // Mounted dijalankan pertama setelah component di load browser
  mounted() {
    this.isWelcomeScreen()
  },
}
</script>
