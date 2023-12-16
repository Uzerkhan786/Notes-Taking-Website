export const getTaskDelete=(id)=>{

    return fetch(`http://localhost:5000/api/v1/delete/${id}`,{
    method: 'DELETE', 
    headers: {
     'Content-type': 'application/json; charset=UTF-8'
    }})
}
