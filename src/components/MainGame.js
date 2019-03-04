import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from './About';
import NoMatch from './NoMatch';
import CodeNameContainer from '../containers/CodeNameContainer'


const MainGame = () => {

    return( 
        <div> 
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/game' component={CodeNameContainer} />
            <Route component={NoMatch} /> 
        </Switch>
        </div>
    )
}

export default MainGame