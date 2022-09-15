import React from 'react';
import Button from './Button';

import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then(response => response.json())
      .then(data => {
        this.setState({
          images: data, showComponent: true,
        });
        // console.log(this.state)

      });

  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        {this.state.showComponent ?
          <ImageList images={this.state.images.slice(0, 6)} /> :
          null
        }
        {/* <ImageList images={this.state.images.slice(0, 6)} /> */}
        <Button images={this.state.images}  ></Button>

      </div>
    );
  }


}




export default App;
