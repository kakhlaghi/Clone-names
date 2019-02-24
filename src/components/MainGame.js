import React from 'react'
import { Switch, Route } from 'react-router-dom';


const Main = () => {

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