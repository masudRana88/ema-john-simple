import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Notfount from './components/Notfount/Notfount';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route exact path='/shop'>
            <Shop></Shop>
          </Route>
          <Route exact path='/order'>
            <OrderReview></OrderReview>
          </Route>
          <Route exact path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='*'>
            <Notfount></Notfount>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
