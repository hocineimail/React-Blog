import { GET_POSTS ,DELETE_POST,ADD_POST } from '../actions/types'
const initialState = {
    posts: [
        {    id: 1,
            title: 'Welcome to my blog!',
            url: 'https://static1.squarespace.com/static/57d814df414fb5d1ebeecc91/t/5a840d564192025a996c949d/1518603610664/M%2BC+033-XL.jpg?format=750w',
            body: 'Hi everyone, and welcome to my blog! I m an artist by day, designer by night, all other stuff in between and Ive got a new blog. I’m not sure if it’s new, but at least being online it’s new',

           like: 150,
        },
        {    id: 2,
            title: 'this is first post',
            url: 'https://www.afjv.com/2018/01/180104-developpeur-web.jpg',
            body: 'this is ,y fisr application blog with react natrive ',
            like: 10,
        },
      
    ]
} ;
export default function(state = initialState , action) {
    switch(action.type){
        case GET_POSTS:
        return {
            ...state
        };
        case DELETE_POST:
        return {
            ...state,
            posts: state.posts.filter(post => post.id !== action.payload)
        };
        case ADD_POST:
        return {
            ...state,
            posts: [action.payload,...state.posts]
        }
        default:
        return state;
    }
}