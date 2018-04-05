import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as buttonAction from '../actions/login'

import '../content/css/style.css';

import * as handleBtnClick from '../constants/index'

import Header from '../components/header';

import Chef from '../components/aboutChef'

import MyLogin from '../components/popup/MyLoginForm'

import CardMeal from '../components/mealCard'
import OrderForm from '../components/orderform'
import Login from '../components/popup/loginForm'
import Sign from '../components/popup/signupCom'
import Main from '../components/main';
import Footer from '../components/footer';




class App extends Component {

	handleBtnClick = (value) => {
    this.props.actions.buttonAction(value);
    console.log('this props',this.props);
  }


  render() {
    const { history } = this.props;

    return (
    	<Router history={history}>
	      <div>
         {/* <Header history={history} />
          <Main history={history} />
          <Footer history={history} />
          <MyLogin history={history} />
          <Sign history={history} />
          <CardMeal history={history} />
          <OrderForm history={history} />
          <Chef history={history} />*/}

          <Route path='/' component={ Header } />
          <Route exact path='/' component={ Main } />
          <Route exact path='/' component={ Footer } />
          <Route path='/login' component={ MyLogin } />
          <Route path='/signup' component={ Sign } />
          <Route path='/menu' component={ CardMeal } />
          <Route path='/order' component={ OrderForm } />
          <Route path='/aboutchef' component={ Chef } />

  	     </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  formData: state.formData
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(buttonAction, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App))