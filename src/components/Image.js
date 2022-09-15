import React from 'react';

 class Image extends React.Component {
  render() {
    return (
        <img src={`https://picsum.photos/500?image=${this.props.image.id}`}
        />
    );
  }
}
export default Image;
