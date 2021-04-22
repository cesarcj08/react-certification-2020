export default function reducer(state, action){
    const { id, title, description, thumbnail, shortthumbnail } = action;
    
    return { 
        id: id, 
        title: title, 
        description: description,
        thumbnail: thumbnail,
        shortthumbnail: shortthumbnail
    }
}