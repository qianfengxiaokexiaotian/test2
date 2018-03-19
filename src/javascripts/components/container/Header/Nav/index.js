
import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.scss'
import {Link} from 'react-router'
class AppHeaderNav extends Component {
    render () {
    	   let {navs,isNavShow,toggleNav} = this.props
        return (
        	<section className="app-header-nav">
        	   <div className="nav">
        	    <ReactCSSTransitionGroup
			                transitionName={{
			                	enter:'slideInLeft',
			                	leave:'slideOutLeft'
			                }}
			                transitionEnterTimeout={500}
			                transitionLeaveTimeout={300}>
		        	     {
				        	   	  isNavShow?<ul className="nav-list animated">
				        	             {
				        	             	navs.map(item=><li key={item.id}>
									        	                <Link onClick={toggleNav} to={{

																	pathname:item.pathname
																}}>
									        	                  <span>{item.title}</span>
									        	                   <i>></i>
									        	                </Link>
								        	                </li>)
				        	             }
				        	         </ul>:''
				          }
        	    </ReactCSSTransitionGroup>
        	           {
        	           	isNavShow?<div onClick={toggleNav} className="mask"></div>:''
        	           }
        	   </div>
        	</section>
        )
    }
}
AppHeaderNav.defaultProps = {
	  navs:[
	          {
				  id:1,title:'首页',pathname:'./home',
				},
			  {
				  id:2,title:'影院',pathname:'./home',
				},
			  {
				  id:3,title:'我的',pathname:'./home',
				},
			  {
				  id:4,title:'卖座卡',pathname:'./home'
				}
       	  ]
}
export default AppHeaderNav



































