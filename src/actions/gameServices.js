
export function changeTurn (dispatches){
    return function(dispatch){
        dispatch({type: 'CHANGE TURN'})
    }
}

export function selectCard (dispatches){
    return function(dispatch){
        dispatch({type: 'SELECT CARD'})
    }
}