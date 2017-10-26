import React, {Component} from 'react';

import NewItem from './NewItem';
import ItemList from './ItemList';

export class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      items: []
    };

    window.app = this;
  }

  onNewItem(newText){
    this.setState({
      items: this.state.items.concat({
        text: newText,
        done: false
      })
    });
  }
  onRemove(index){
    const newItems = this.state.items.slice();
    newItems.splice(index, 1);

    this.setState({
      items: newItems
    })
  }
  onSetDone(index, flag){
    const newItem = Object.assign({}, this.state.items[index], {
      done: flag
    });

    const newItems = this.state.items.slice();
    newItems.splice(index, 1, newItem);

    this.setState({
      items: newItems
    });
  }
  dumpState(){
    console.log(JSON.stringify(this.state, null, 2));
  }

  render(){
    const {items} = this.state;

    return (
      <div>
        <NewItem onNewItem={(text) => this.onNewItem(text)}/>
        <ItemList
          items={items}
          onSetDone={(index, flag) => this.onSetDone(index, flag)}
          onRemove={index => this.onRemove(index)}/>
        
        <button onClick={() => this.dumpState()}>Dump state</button>
      </div>
    );
  }
}
export default App;