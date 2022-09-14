import React from 'react';
import Button from './Button';

import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({ images: data.slice(0, 6) });
          });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <ImageList images={this.state.images} />
        <Button></Button>
      </div>
    );
  }
}

export default App;
