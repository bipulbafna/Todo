const initialState = {
    posts: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            const { posts } = state;
            const newPosts = JSON.parse(JSON.stringify(posts))
            newPosts.push(action.payload);
            return { ...state, posts: newPosts };
        }
        default: return state;
    }
}
export default rootReducer;