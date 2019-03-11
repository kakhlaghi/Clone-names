import {connect} from 'react-redux'
import React, {Component} from 'react'
import CodeNameCard from '../components/CodeNameCard'

class CodeNameContainer extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
            const renderCard = this.state.wordList.map((array)=>{
                return array
            })
        return(
            <div class='board'>
                {renderCard}
            </div>
        )
    }

}


export default CodeNameContainer