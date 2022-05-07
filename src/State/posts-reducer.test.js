import { addPost, postsReducer,deletePost } from './postsReducer'

let state = {
    postsData: [
        { post: 'Kren hello', likes: 32, id: 1 },
        { post: 'Nike hello', likes: 32, id: 2 },
        { post: 'Sj hello', likes: 32, id: 3 },
        { post: 'Jake hello', likes: 32, id: 4 }
    ],

}

it('Posts object length should be incremented', () => {
    let action = addPost('Barev apehh')
    let newState = postsReducer(state, action)

    expect(newState.postsData.length).toBe(5)
})


it('Posts object length should be decremented', () => {
    let action = deletePost(1)
    let newState = postsReducer(state, action)

    
})