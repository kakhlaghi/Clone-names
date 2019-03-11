import React, {useState} from 'react'
import WordList from '../components/WordList'
import {connect} from 'react-redux'


const CodeNameCard = ({card}) => {

    const [words, setWords] = useState(this.state)

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