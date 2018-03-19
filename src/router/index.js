
import App from '../javascripts/App'
import Home from '../javascripts/components/container/Home'
import Detail from '../javascripts/components/container/Detail'
const routeConfig = [
    { path: '/',
      component: App,
      redirect: '/home',
      childRoutes: [
        { path: 'home', component: Home,onEnter:()=>{
            console.log('enter home')
        },onLeave:()=>{
            console.log('leave home')
        } },
        { path: 'detail/:id', component: Detail },
        {path:'*',component:Home}
      ]
    }
  ]

export default routeConfig

































