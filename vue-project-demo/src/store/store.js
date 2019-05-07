import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app.module'
import user from './modules/user.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  }
})

/* store分模块管理，应对更多的实际的场景, 同时配合本地存储,能够完美的解决vuex存储不能持久化的缺陷 */
