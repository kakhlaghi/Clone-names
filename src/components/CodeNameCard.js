import React, {useState} from 'react'
import WordList from '../components/WordList'
import {connect} from 'react-redux'


const CodeNameCard = ({props}) => {

    //const [words, setWords] = useState(this.state)
    const List = [
        'ARES', 'AUSTRALIA', 'APPLE', 'AXE',
        'BERRY', 'BOTTOMS UP', 'BONE', 'BAR',
        'CAPTAIN', 'CREAM', 'CENTAUR', 'COCKTAIL',
        'DAGGER', 'DIAMOND', 'DRINK', 'DISPATCHER',
        'EDGE', 'ELASTIC', 'EEL', 'EROTIC',
        'FUDGE', 'FRAISER', 'FRAME', 'FILM',
        'GOOSE', 'GERMANY', 'GRAPES', 'GOLD',
        'HAWK', 'HOLLANDAISE', 'HUGO', 'HALTERTOP',
        'ICE', 'ISLAND', 'IVAN', 'INTERN',
        'JOUST', 'JUMPER', 'JOKER', 'JUICE',
        'KETCHUP', 'KANGAROO', 'KEYBOARD', 'KICKER',
        'LEMONADE', 'LASER', 'LUNAR', 'LUCHADOR',
        'MUSTARD', 'MONTANA', 'MAKO', 'MIXER',
        'NEW ZEALAND', 'NAPKIN', 'NACHOS', 'NORWAY',
        'ORANGE', 'OAK', 'OATMEAL', 'ORIGINAL',
        'PRINCESS', 'PORCINI', 'PARROT', 'PANCAKES',
        'QUEEN', 'QUARTZ', 'QUESTION', 'QUELL',
        'ROSE', 'RUNNER', 'ROGER', 'ROBBER' 
    ]

    const generateWord= () => {
        return List[Math.floor(Math.random()*10)]
    }

    return(
        <div>
            <span class='word'>{generateWord()}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        words: state.wordList
    }
} 

export default connect(mapStateToProps)(CodeNameCard);