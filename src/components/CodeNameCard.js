import React, {component} from 'react'
import WordList from '/WordList'


const CodeNameCard = ({card}) => {

    const generateWord= () => {
        return WordList[Math.floor(Math.random()*10)]
    }

    return(
        <div>
            <span class='word'>{generateWord()}</span>
        </div>
    )
}

export default CodeNameCard