import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Main from './pages/main/Main.js'

import { Provider } from 'react-redux'
import store from './store.js'

const Loading = () => <div>加载中...</div>

const Login = Loadable({
  loader: () => import(/*webpackChunkName:'login'*/'./pages/Login'),
  loading: Loading
});

const Reg = Loadable({
  loader: () => import(/*webpackChunkName:'reg '*/'./pages/Reg'),
  loading: Loading
})

const CityList = Loadable({
  loader: () => import(/*webpackChunkName:'城市列表'*/ './pages/CityList.js'),
  loading: Loading
})

const Forgot = Loadable({
  loader: () => import(/*webpackChunkName:'找回密码'*/ './pages/Forgot.js'),
  loading: Loading
})

const Mappages = Loadable({
  loader: () => import(/*webpackChunkName:'地图界面'*/ './pages/Mappage.js'),
  loading: Loading
})

const Search = Loadable({
  loader: () => import(/*webpackChunkName:'地图界面'*/ './pages/Search.js'),
  loading: Loading
})

// const  ErrorPage = Loadable({
//   loader:()=>import(/*webpackChunkName:'ErrorPage '*/'./pages/ErrorPage' ),
//   loading:Loading
// })



function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/citylist" component={CityList} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/mappages" component={Mappages} />
          <Route path="/search" component={Search} />
          <Redirect to="/" />
          {/* <Route component={ErrorPage}/> */}
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
