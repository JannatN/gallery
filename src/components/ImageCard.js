import React from 'react';

 class ImageCard extends React.Component {
  render() {
    return (
        <img src={`https://picsum.photos/500/500?image=${this.props.image.id}`}
        />
    );
  }
}
export default ImageCard;
