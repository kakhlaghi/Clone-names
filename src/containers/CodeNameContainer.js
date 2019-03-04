//import {connect} from 'react-redux'
import React, {Component} from 'react'
import CodeNameCard from '../components/CodeNameCard'

class CodeNameContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            CodeNameCard
        }
    }

    render(){
            const renderCard = this.state.map((array)=>{
                return (<CodeNameCard card={array}/>)
            })
        return(
            <div class='board'>
                {renderCard}
            </div>
        )
    }

}

export default CodeNameContainer