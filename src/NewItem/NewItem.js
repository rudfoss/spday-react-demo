import React, {Component} from 'react';

export class NewItem extends Component{
  constructor(props){
    super(props);

    this.state = {
      text: ''
    };
  }

  onChange(newText){
    this.setState({
      text: newText
    });
  }

  onKeyPress(evt){
    if (evt.key === 'Enter' ){
      this.props.onNewItem(evt.target.value);
    }
  }

  render(){
    const {text} = this.state;
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={evt => this.onChange(evt.target.value)}
          onKeyDown={evt => this.onKeyPress(evt)}/>
      </div>
    );
  }
}
export default NewItem;