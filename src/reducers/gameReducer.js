export default function gameReducer (state = {loading: false, cards: [], errors: null}, action){
    switch(action.type){
        case 'CHANGE TURN':
            return {
                ...state
            }
        default:
            return state
    }
}