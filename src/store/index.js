import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/base-services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listData: null,
        listDataLike: [],
        listDataRemove: [],
        loading: true,
        keySearch: 'apollo 11',
        page: 1
    },
    mutations: {
        storeListData(state, data) {
            state.listData = data.listData
        },
        storeDataLike(state, data) {
            state.listDataLike = data.listDataLike
        },
        storeDataRemove(state, data) {
            state.listDataRemove = data.listDataRemove
        },
        changeKey(state, data) {
            state.keySearch = data.keySearch
        },
        changeLoad(state, data) {
            state.loading = data.loading
        }
    },
    actions: {
        getListData({ commit, dispatch }) {
            dispatch('changeLoading', true)
            api.get(`search?q=${this.state.keySearch}&page=${this.state.page}`).then(res => {
                res.data.collection.items.forEach(child => {
                    child.data[0].isLike = false;
                    child.data[0].isDelete = false
                })
                commit('storeListData', {
                    listData: res.data,
                })
                dispatch('changeLoading', false)
            })
        },
        changeKeySearch({ commit, dispatch }, keySearch) {
            if (keySearch === null || keySearch === "") {
                keySearch = " "
            }
            commit('changeKey', { keySearch: keySearch })
            dispatch('getListData')
        },
        changeLoading({ commit }, loading) {
            commit('changeLoad', { loading: loading })
        },
        likeData({ commit, dispatch }, likeItem) {
            let dataRaw = JSON.parse(JSON.stringify(this.state.listData))
            dataRaw.collection.items.forEach(child => {
                if (child.data[0].nasa_id === likeItem.nasa_id) {
                    child.data[0].isLike = true
                }
            })
            commit('storeListData', { listData: dataRaw })
            //Add store
            let listLikeRaw = JSON.parse(JSON.stringify(this.state.listDataLike))
            listLikeRaw.push(likeItem)
            commit('storeDataLike', { listDataLike: listLikeRaw })
        },
        unlikeData({commit,dispatch}, unlikeItem) {
            let dataRaw = JSON.parse(JSON.stringify(this.state.listData))
            dataRaw.collection.items.forEach(child => {
                if (child.data[0].nasa_id === unlikeItem.nasa_id) {
                    child.data[0].isLike = false
                }
            })
            commit('storeListData', { listData: dataRaw })
            //Add store
            let listLikeRaw = JSON.parse(JSON.stringify(this.state.listDataLike))
            listLikeRaw = listLikeRaw.filter(item => item.nasa_id !== unlikeItem.nasa_id)
            commit('storeDataLike', { listDataLike: listLikeRaw })
        },
        removeData({ commit, dispatch }, removeItem) {
            let dataRaw = JSON.parse(JSON.stringify(this.state.listData))
            dataRaw.collection.items.forEach(child => {
                if (child.data[0].nasa_id === removeItem.nasa_id) {
                    child.data[0].isDelete = true;
                }
            })
            commit('storeListData', { listData: dataRaw })
            //Add store
            let listRemoveRaw = JSON.parse(JSON.stringify(this.state.listDataRemove))
            listRemoveRaw.push(removeItem)
            commit('storeDataRemove', { listDataRemove: listRemoveRaw })
        },
        undoData({commit,dispatch},undoItem){
            let dataRaw = JSON.parse(JSON.stringify(this.state.listData))
            dataRaw.collection.items.forEach(child => {
                if (child.data[0].nasa_id === undoItem.nasa_id) {
                    child.data[0].isDelete = false;
                }
            })
            commit('storeListData', { listData: dataRaw })
            //Add store
            let listRemoveRaw = JSON.parse(JSON.stringify(this.state.listDataRemove))
            listRemoveRaw = listRemoveRaw.filter(item => item.nasa_id !== undoItem.nasa_id)
            commit('storeDataRemove', { listDataRemove: listRemoveRaw })
        }
    },
    getters: {
        loading(state) {
            return state.loading
        },
        listData(state) {
            return state.listData.collection
        },
        listDataLike(state) {
            return state.listDataLike
        },
        listDataRemove(state) {
            return state.listDataRemove
        }
    }
})
