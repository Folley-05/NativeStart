const initialState=[]

const testReducer=(state=initialState, action)=>{
    switch (action.type) {
        case 'ADD' : {
            return [...state, action.value]
        }
        default : {
            return state
        }
    }
}
export default testReducer