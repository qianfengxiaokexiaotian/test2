import React,{Component} from 'react'
// import {Link,IndexLink} from 'react-router'
import AppBanner from '../../common/Banner'
import './index.scss'
class Home extends Component {
    constructor (props){
     super(props)
       this.state={
             
	   }
	}
	render(){

		let {items} = this.state
		return (
			<div className="main-box">

                  <AppBanner/>
			</div>
		)	
	}	
}
	export default Home
	
	








