const state = {
    infoHeight: 340,
    resoureHeight: 395,
    resoureHeightWithPage: 435,
    bottomHeight: 0,
    isClickAble: true
}

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}