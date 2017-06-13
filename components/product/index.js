import { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super();

    this.title = props.item.fields.title;
    this.description = props.item.fields.description;
    this.image = props.assets.map((asset) => {
      if (asset.sys.id === props.item.fields.img.sys.id) return asset.fields.file.url;
    });
  }

  render() {
    return (
      <div>
        <h3>{ this.title }</h3>
        <img src={ this.image } alt="image"/>
        <p>{ this.description }</p>
      </div>
    )
  }
}

export default Product;
