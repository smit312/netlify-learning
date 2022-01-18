const initialstate ={
    page : 1,
}
const ChangePages = (state = initialstate ,action) =>{
    switch(action.type) {
        case "firstpage":
            return ({page : 1})
        case "secondpage":
            return ({page : 2})
        default :
            return state;
    }

}
export default ChangePages;