
const initialState = {
    materials : [
        {key: 1, hint : 'this is hint 1', image : 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424', mainText : 'test main text 1', title : 'this is test title 1'},
        {key: 2, hint : 'this is hint 2', image : 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', mainText : 'test main text 2', title : 'this is test title 2'},
        {key: 3, hint : 'this is hint 3', image : 'https://images.theconversation.com/files/377334/original/file-20210106-15-jyki6r.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop', mainText : 'test main text 3', title : 'this is test title 3'},
        {key: 4, hint : 'this is hint 4', image : 'https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327448/maine-coon-cat.jpg', mainText : 'test main text 4', title : 'this is test title 4'},
    ]
}

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}