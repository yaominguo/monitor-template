export default {
  SET_LOADING(state, val) {
    state.showLoading = val
  },
  SET_THEME_LIST(state, data) {
    state.themeList = data
    state.situation[0].count = (data && data.length) || 0
  },
  SET_THEME_COUNT(state, val) {
    state.situation[0].count = val
  },
  SET_PERSON_LIST(state, data) {
    state.personList = data
    state.situation[1].count = (data && data.length) || 0
  },
  SET_ORIGIN_CHECKED_LIST(state, data) {
    state.originCheckedList = data
  },
  SET_CHECKED_LIST(state, data) {
    state.checkedList = data
    state.situation[2].count = (data && data.length) || 0
  },
  SET_RECTIFY_LIST(state, data) {
    state.rectifyList = data
    state.situation[3].count = (data && data.length) || 0
  },
  SET_CURDATE(state, date) {
    state.curDate = date
  },
}
