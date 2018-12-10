import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import Document from './Document'
import { NotFound, About, Home, Reel, SingleVideo } from './views'

const Routes = props => 
  <Document>
    <Switch>
      {(props.api_data) && <Route exact path={'/'} component={Home}/>}
      {(props.api_data) && <Route exact path={'/about'} component={About}/>}
      {(props.api_data) && <Route exact path={'/reel'} component={Reel} />}
      {(props.api_data) && <Route exact path={'/video/:id'} component={SingleVideo} />}
      <Route component={NotFound}/>
    </Switch>
  </Document>

export default connect(
  state => ({
    api_data: state.api_data,
    router: state.router
  })
)(Routes)
