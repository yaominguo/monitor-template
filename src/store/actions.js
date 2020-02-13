import ajax from '@/server/ajax'
import api from '@/server/api'
import common from '@/util/common'
export default {
  GET_THEME_LIST({commit}, data = {}) {
    ajax.post({
      url: api.POST_THEME_LIST,
      params: {pageNo: 1, pageSize: 10000, ...data},
      showLoading: false,
    }).then(res => {
      commit('SET_THEME_LIST', common.confirm(res, 'data.content', []))
    })
  },
  GET_COMMUNITY_LIST({commit}, data = {}) {
    ajax.post({
      url: api.POST_COMMUNITY_LIST,
      params: {isPublish: 0, pageNo: 1, pageSize: 10000, ...data},
      showLoading: false,
    }).then(res => {
      const checkedData = common.confirm(res, 'data.content', [])
      commit('SET_ORIGIN_CHECKED_LIST', JSON.parse(JSON.stringify(checkedData)))
      ajax.post({
        url: api.POST_COMMUNITY_LIST,
        params: {isPublish: 1, pageNo: 1, pageSize: 10000, ...data},
        showLoading: false,
      }).then(res => {
        const rectifyData = common.confirm(res, 'data.content', [])
        checkedData.forEach(item => {
          if (rectifyData.some(el => el.COMMUNITYID == item.COMMUNITYID)) {
            item.icon = 'red.png'
          }
        })
        commit('SET_RECTIFY_LIST', rectifyData)
        commit('SET_CHECKED_LIST', checkedData)
      })
    })
  },
  GET_PERSON_LIST({commit}, data = {}) {
    ajax.post({
      url: api.POST_PERSON_LIST,
      params: {pageNo: 1, pageSize: 10000, ...data},
      showLoading: false,
    }).then(res => {
      commit('SET_PERSON_LIST', common.confirm(res, 'data.content', []))
    })
  },
}
