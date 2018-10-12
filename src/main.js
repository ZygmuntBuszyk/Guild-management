import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; //do podstron
import vueResource from 'vue-resource'; //do api
import Members from './components/Members.vue';
import Home from './components/Home.vue';
import Add from './components/AddMember.vue';

Vue.use(vueResource);
Vue.use(VueRouter);

// const Home = { template: '<div>This is Home</div>' };
// const Members = { template: '<div>This is Foo</div>' };

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/members', name: 'members', component: Members },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/addMember',
      name: 'add',
      component: Add
    }
  ]
});

Vue.config.productionTip = true;
//{{ $route.name }}
//  <p>Current route name: </p>
// render: h => h(App),
new Vue({
  router,
  template: `
  <div id="app">

 
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <router-link to="/" class="navbar-brand" > Guild</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <router-link :to="{ name: 'home' }"class="nav-link" >Home <span class="sr-only">(current)</span> </router-link>
          </li>
          <li class="nav-item active">
          <router-link :to="{ name: 'members' }"class="nav-link" >Members <span class="sr-only">(current)</span> </router-link>
        </li>
       
        </ul>
        <ul class="navbar-nav navbar-right">
        <li class="nav-item active">
          <router-link :to="{ name: 'add' }"class="nav-link" >Add Member <span class="sr-only">(current)</span> </router-link>
        </li> 
        </ul>
      </div>
    </nav>



  <router-view class="view"> </router-view>
  </div>
  `
  // render: h => h(App)
}).$mount('#app');

// render: h => h(App)    , TO SKRÓT OD DOLNEJ FUNKCJI
// render: function (createElement) {
//   return createElement(App);
// }
