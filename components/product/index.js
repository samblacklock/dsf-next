import { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super();

    this.title = props.item.fields.title;
    this.description = props.item.fields.description;
    this.image = props.assets.filter((asset) => {
      if (asset.sys.id === props.item.fields.img.sys.id) return asset;
    }).map(asset => asset.fields.file.url);
  }

  render() {
    return (
      <div className="product">
        <div className="description">
          <h3>{ this.title }</h3>
          <p>{ this.description }</p>
        </div>
        <div className="image-wrapper">
          <img src={ this.image } alt="image"/>
        </div>
      </div>
    )
  }
}

export default Product;
