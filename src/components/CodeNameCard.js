import React, {component} from 'react'
import WordList from '/WordList'
import {connect} from 'react-redux'


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

const mapStateToProps = (state) => {
    return {
        words: state.wordList
    }
} 

export default connect(mapStateToProps)(CodeNameCard);