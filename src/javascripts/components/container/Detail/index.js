import React,{Component} from 'react'         
import {hashHistory} from 'react-router'
    class Detail extends Component{
   
     constructor(props){
		super(props)
        this.back = this.back.bind(this)
	 }
   
       back(){
			 alert(1)
			 this.props.history.push('./home')
	   }

    	render(){
    		
    		return (
    			<div className="main-box">
							Detail
							{this.props.params.id}
							{this.props.location.query.title}
							<hr/>
							<button onClick={this.back}>home</button>
				</div>
    		)
    		
    	}
    	
    }
export default Detail





