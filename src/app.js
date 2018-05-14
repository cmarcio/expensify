import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import 'normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>Dashboard works!</div>
);

const AddExpensePage = () => (
  <div>Add expense works!</div>
);

const EditExpensePage = () => (
  <div>Edit expense works!</div>
);

const HelpPage = () => (
  <div>Help works!</div>
);


const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
