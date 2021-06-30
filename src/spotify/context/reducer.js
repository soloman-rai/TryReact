export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    nowPlaying: null,
    discoverWeekly: null,
    /// for development purposes only
    // token: 'LB0TBtuFKIYJ2tjGAGMJCprCVp4ISU9r2JmBsMvZ-X_2CXIuo1QgOV65RtYSLF2Efr00qmbxfgn_f6De8aNvunFlRNGb6zR0oi0ZE6PoD0A-wE1FRn1S9Tqu4g-BieSjJr0xlyDwZbGRHzmCtgrewUDvsoVFKIm5bIaH2Dt4cxWl7',
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discoverWeekly: action.discoverWeekly
            }
        default:
            return state;
    } 
}

export default reducer