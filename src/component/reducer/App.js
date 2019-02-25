const INITIAL_STATE = {
    token : ''
}

//state diisi INITIAL_STATE supaya pas awal load isinya initial state dan bukan undifined
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case  'UPDATE_USER':
        return{
            ...state,
            token: action.payload.token
        }
        default : return state
    }
}