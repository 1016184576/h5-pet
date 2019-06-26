/**
 * @description  Action生命位置
 */
const SET_TAB_ACTIVE = 'SET_TAB_ACTIVE';

const home = {
  state: {
    tabActive: 0
  },
  mutations: {
    [SET_TAB_ACTIVE](state,value){
      state.tabActive = value;
    }
  },
  actions: {
    setTabActive({ commit }, value){
      sessionStore.set("tabActive",value)
      commit(SET_TAB_ACTIVE, value);
    }
  },
  getters: {
    getTabActive: state => {
      /* let tabActive = sessionStore.get('tabActive');
      return tabActive ? parseInt(tabActive) : state.tabActive; */
      return state.tabActive;
    }
  }
}



export default home;