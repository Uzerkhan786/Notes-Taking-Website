export const getTaskDelete=(id)=>{

    return fetch(`https://notetaking-iu1x.onrender.com/api/v1/delete/${id}`,{
    method: 'DELETE', 
    headers: {
     'Content-type': 'application/json; charset=UTF-8'
    }})
}
