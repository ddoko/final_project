import axios from 'axios'

export const fetchMember = (user,pass)=>{
    console.log('passnya',pass)
    return (dispatch)=>{
        axios({
            method:'post',
            url:'https://reqres.in/api/login',
            data:{
                'username': user,
                'password': pass
            },
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            console.log(response)
            const token_baru = response.token
            dispatch(updateMembers(token_baru))
        }).catch(error =>{
            console.log('error')
            }   
        )
    }
}
export const updateMembers = (token) => {
    return {
        type: 'UPDATE_USER',
        payload : {
            token:token
        }
    }
}