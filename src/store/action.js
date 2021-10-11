const SET_USER='SET_USER'

const setUser=(data)=>({
    type: SET_USER,
    data: data
})

export { setUser, SET_USER }