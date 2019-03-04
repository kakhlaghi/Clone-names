import React, {Component} from 'react'
import WordList from '../components/WordList.js'


class CodeNameCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            words: WordList
        }
    }


    render(){
        debugger
        const generateWord = () => {
            return WordList[Math.floor(Math.random()*10)]
        }
        return(
            <div>
                <span class='word'>{generateWord()}</span>
            </div>
        )
    }
}

export default CodeNameCard