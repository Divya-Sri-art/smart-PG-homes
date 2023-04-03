
export default function reducer(){

const {type,payload} = action;

switch(type){
    case "LOGGED_IN ":
        localStorage.setItem('token',payload)
        return {...StaticRange,auth:true}
        default:
            return state
}
}