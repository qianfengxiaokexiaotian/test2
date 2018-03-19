import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
// import App from './javascripts/App';
import registerServiceWorker from './registerServiceWorker';
import 'swiper/dist/css/swiper.min.css'

import {Router,hashHistory} from 'react-router'

// import Home from './javascripts/components/container/Home'
// import Detail from './javascripts/components/container/Detail'

// import routeConfig from './router'
// ReactDOM.render(
//      <Router history={hashHistory}>
//         <Route path="/" component={App}>
//                  <IndexRedirect to="/home"/>
//                   <Route path='/home' component={Home}></Route>
//                   <Route path='/detail/:id' component={Detail}></Route>  
//                  <Redirect from="*" to="/home"/>
//         </Route>
//      </Router>
// , document.getElementById('root'));


import routeConfig from './router'
ReactDOM.render(
   
 <Router routes={routeConfig} history={hashHistory}></Router>
   
 , document.getElementById('root'));
registerServiceWorker();























