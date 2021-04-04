
const initialState = {
    materials : [
        {key: 1, hint : 'this is hint 1', image : 'test image 1', mainText : 'test main text 1', title : 'this is test title 1'},
        {key: 2, hint : 'this is hint 2', image : 'test image 2', mainText : 'test main text 2', title : 'this is test title 2'},
        {key: 3, hint : 'this is hint 3', image : 'test image 3', mainText : 'test main text 3', title : 'this is test title 3'},
        {key: 4, hint : 'this is hint 4', image : 'test image 4', mainText : 'test main text 4', title : 'this is test title 4'},
    ]
}

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}