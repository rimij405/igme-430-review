import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

export default class Library extends Component {

    static defaultProps = {
      books: [
        {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000 }
      ]
    };
  
    state = { 
      freeBookmark: true,
      open: true,
      hiring: true,
      data: [],
      loading: false
    }
  
    componentDidMount() {
      this.setState({loading: true});
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}));
    }
  
    componentDidUpdate() {
      console.log("The component just updated!");
    }
  
    toggle = () => {
      this.setState(prevState => ({
          open: !prevState.open
      }));
    }
  
    render() {
      console.log(this.state);
      const {books} = this.props;
      return (
        <div>
          {this.state.hiring ? <Hiring /> : <NotHiring />}
          {this.state.loading 
            ? "loading..." 
            : <div>
                {this.state.data.map((product, i) => {
                  return (
                    <div key="i">
                      <h3>Library Product of the Week!</h3>
                      <h4>{product.name}</h4>
                      <img alt={product.name} src={product.image} height={100} />
                    </div>
                  )
                })}
            </div>
          }
          <h1>The library is {this.state.open ? 'open' : 'closed'}.</h1>
          <button onClick={this.toggle}>Change</button>
          {books.map((book, id) => {
            return(
              <Book 
               key={id} 
               title={book.title} 
               author={book.author}
               pages={book.pages} 
               freeBookmark={this.state.freeBookmark} />
            );
          })} 
        </div>
      );
    };
};
  
Library.propTypes = {
books: PropTypes.array
}