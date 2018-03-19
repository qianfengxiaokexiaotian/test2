import React ,{Component} from 'react'
import './TabBar.scss'
		class AppHeaderTabBar extends Component {
				render (){
					let {toggleNav} = this.props
					return (
			                 <div className="titleBar">
			                       <label  onClick={toggleNav}  className="controllLogo">
		                                   <i>1</i>
			                       </label>
			                       <span id="toolBarTitle" className="titleName">卖座商城</span>
			                       <a className="userCenter" href="">
			                               <i>2</i>
			                       </a>
			                 </div>
							)
				        }
				}
  export default AppHeaderTabBar




