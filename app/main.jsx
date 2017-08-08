'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'

import NotFound from './components/NotFound'
import Allison from './components/Allison'

render(
    <Router history={browserHistory}>
      <Route path="/" component={Allison}/>
      <Route path='*' component={NotFound} />
    </Router>,
  document.getElementById('main')
)
