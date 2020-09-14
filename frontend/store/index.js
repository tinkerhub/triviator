export const state = () => ({
  pin: "",
  status: "",
  nickname: ""
})

export const mutations = {
  setPin(state, payload) {
    state.pin = payload
  },
  setStatus(state, payload) {
    state.status = payload
  },
  setNickname(state, payload) {
    state.nickname = payload
  }
}

export const getters = {
  getPin: (state) => {
    return state.pin;
  },
  getStatus: (state) => {
    return state.status;
  },
  getNickname: (state) => {
    return state.nickname;
  }
}
