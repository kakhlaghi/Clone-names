
export function changeTurn (dispatches){
    return function(dispatch){
        const currentTeam = () => {
            if(dispatches.currentTeam == 'red'){
                return 'blue'
            } else {
                return 'red'
            }
        }
        dispatch({type: 'CHANGE TURN'})
    }
}

export function selectCard (dispatches){
    return function(dispatch){
        dispatch({type: 'SELECT CARD'})
    }
}