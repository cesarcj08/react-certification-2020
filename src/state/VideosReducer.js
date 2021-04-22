export default function reducer(state, action){
    const { id, title, description } = action;
    
    return { 
        id: id, 
        title: title, 
        description: description 
    }
}