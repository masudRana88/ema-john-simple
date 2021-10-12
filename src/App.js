import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Notfount from './components/Notfount/Notfount';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Regester from './components/Regester/Regester';
import AthProvider from './context/AthProvider/AthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div>
      <AthProvider>
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
          <PrivateRoute exact path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute exact path='/shiping'>
            <Shipping></Shipping>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/regester">
            <Regester></Regester>
          </Route>
          <Route path='*'>
            <Notfount></Notfount>
          </Route>
        </Switch>
      </Router>
      </AthProvider>
    </div>
  );
}

export default App;
