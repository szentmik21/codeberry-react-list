import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const ListItem = (props) => <li>{props.name}</li>

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dwarves: [
        {
            name: 'Sleepy',
            id: 'shewlx',
        },
        {
            name: 'Grumpy',
            id: 'wrmxls',
        },
        {
            name: 'Gimli',
            id: 'qlsayk',
        },
        {
            name: 'Bruenor',
            id: 'prfckj',
        },
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello! Here's a list of some dwarves:</h1>
        <ul>
          {this.state.dwarves.map((item) => <ListItem key={item.id} name={item.name}/>)}
        </ul>
      </React.Fragment>
    );
  }
}

render(<List />, document.getElementById('root'));
