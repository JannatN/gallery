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
    this.generateImages = this.generateImages.bind(this);
  }

  generateImages() {
    if (this.state.showComponent === false) {
      this.removeImages();
    }
    this.setState({
      showComponent: true,

    });
    newArray = [...this.props.images].sort(() => 0.5 - Math.random())


  }
  // remove the initial image list
  removeImages() {
    var images = document.getElementsByTagName('img');
    var imageList = document.getElementsByClassName('image-list');
    imageList[0].parentNode.removeChild(imageList[0]);
    var l = images.length;
    for (var p = 0; p < l; p++) {
      images[0].parentNode.removeChild(images[0]);
      console.log("removed")
    }
  }

  render() {
    return (
      <div className='container'>
        {this.state.showComponent ?
          <ImageList images={newArray.slice(0, 6)} /> :
          null
        }
        <hr style={{ width: "40%" }} />
        <button className='button' onClick={this.generateImages}>Generate</button>

      </div>
    );
  }
}
export default Button;


