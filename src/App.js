import React from "react";
import "./App.css";


const data = [
  { id: 1, name: "Test 1" , title: "Book", description: "Show off your Snipcart support with a logo sticker!", price: "$ 2.00", image:"./image/book.jpeg"},
  { id: 2, name: "Test 2", title: "Book2" , description: "Show off your Snipcart support with a logo sticker!", price: "$ 5.00", image:"./image/download.jpeg"},
  { id: 3, name: "Test 3" , title:"Book3", description: "Show off your Snipcart support with a logo sticker!", price: "$ 6.00", image:"./image/book.jpeg"}
];




class Main extends React.Component { 
  constructor() {
    super();
    
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: data
    });
  }
  


  render() {
    return <div>
      <header className="app-header"></header>
      <div className="app-card-list" id="app-card-list">
        {
          Object
          .keys(this.state.posts)
          .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
    </div>
  }
}




class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
         Add to cart
      </button>
    )
  }
}


// class CardHeader extends React.Component {
//   render() {
//     const {image} = this.props;
//     var style = { 
//         backgroundImage: 'url(image)',
//     };
//     return(this.props.image)
  // }
// }

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <img src={this.props.image} alt="image"/>
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.description}</p>
        
        <Button />
      </div>
    )
  }
}


class Card extends React.Component {
  render() {
    return (
      <article className="card app-header">
        <CardBody title={this.props.details.title} description={this.props.details.description} price={this.props.details.price} />
        
      </article>
    )
  }
}



export default Main;
