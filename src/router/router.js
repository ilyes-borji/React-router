import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Description from '../Component/Description'
import App1 from '../App1'

const AppRouter=()=> {
return(

<Router>
<Switch>
<Route path="/" exact component={App1} />
<Route path="/Description/:id/:name/:rate/:descri/:trailer" exact component={Description} /> 


</Switch>


</Router>)

}
 
  


export default AppRouter;