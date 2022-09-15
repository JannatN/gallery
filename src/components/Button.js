import React from 'react';
import './App.css';
import ImageList from './ImageList';

var newArray = [];
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    if (this.state.showComponent == false) {
      var images = document.getElementsByTagName('img');
      var l = images.length;
      for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
        console.log("removed")
      }
    }
    this.setState({
      showComponent: true,

    });
    newArray = [...this.props.images].sort(() => 0.5 - Math.random())


  }


  render() {
    return (
      <div>
        {this.state.showComponent ?
          <ImageList images={newArray.slice(0, 6)} /> :
          null
        }
        <button className='button' onClick={this._onButtonClick}>Generate</button>

      </div>
    );
  }
}
export default Button;


