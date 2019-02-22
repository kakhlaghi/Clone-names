import React, {component} from 'react'
import wordList from '/WordList'


const CodeNameCard = ({card}) => {

    const generateWord= () => {
        return wordList[Math.floor(Math.random()*10)]
    }

    return(
        <div>
            <span class='word'>{generateWord()}</span>
        </div>
    )
}

export default CodeNameCard