import React from 'react';
import PropTypes from 'prop-types';

/*const App = () => {
    return (
        <div>
            <h1 className="title">Hello module from App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, animi.</p>
        </div>
    );
}

export default App;*/

// const HeadLine = () => {
//   return <h1 className="title">Hello from React App</h1>
// }

// const Greeting = (props) => {
//   const {name, number} = props;
//   return <p> {name} + {number} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, animi.</p>
// }

/*export const App = () => {
    return (
        <div>
            <HeadLine />
            <Greeting name="Property" number={25} />
        </div>
    );
}*/

// Greeting.propTypes = {
//   name: PropTypes.string,
// number: PropTypes.number, //number: React.PropTypes.number.isRequired requir to inndicate such property


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buyItems: ['milk', 'bread', 'fruits']
    }
  }

  render() {
    const {buyItems} = this.state;
    return (
        <div>
          <h1>Shopping list</h1>
          {
            buyItems.map(item => {
              return <p key={item}>{item}</p>
            })
          }
        </div>
    )
  }
}

