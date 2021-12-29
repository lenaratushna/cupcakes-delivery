import React from 'react';
import './App.css';
import Cupcake from './components/Cupcake/Cupcake';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import sampleCupcakes from './sample-cupcakes';

class App extends React.Component {

  city = this.props.history.location.state;
  
  state = {
    cupcakes: {},
    order: {}
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.city);
    if(localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)});
    }
    
    this.setState({cupcakes: sampleCupcakes});
  }

  componentDidUpdate() {
    localStorage.setItem(this.city, JSON.stringify(this.state.order));
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  }

  deleteFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({order});
  }

  clearOrder = () => {
    const order = {};
    this.setState({order});
  }

  render() {
    return (
      <div className="app">
        <Header city={this.city}/>
        <div className="app_main container">
          <div className="">
            <div className="menu">
            <ul className="menu_list">
              {Object.keys(this.state.cupcakes).map(key => {
                return <Cupcake 
                key={key} 
                index={key}
                details={this.state.cupcakes[key]}
                addToOrder={this.addToOrder}/>
              })}
            </ul>
            </div>
          </div>
          <Order cupcakes={this.state.cupcakes} 
                 order={this.state.order} 
                 deleteFromOrder={this.deleteFromOrder}
                 clearOrder={this.clearOrder}
          />
        </div>
      </div>
    );
  }
}

export default App;


