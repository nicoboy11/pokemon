const INITIAL_STATE = {
    list: [],
    selected: {},
    loadingAll: false,
    loadingOne: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'FETCHINGONE':
            return { ...state, loadingOne: true };
        case 'FETCHINGALL':
            return { ...state, loadingAll: true };
        case 'FETCHINGONE_SUCCESS':
            return { ...state, loadingOne: false, selected: action.payload };
        case 'FETCHINGALL_SUCCESS':
            return { ...state, loadingAll: false, list: action.payload.results };            
        default:
            return state;
    }
};