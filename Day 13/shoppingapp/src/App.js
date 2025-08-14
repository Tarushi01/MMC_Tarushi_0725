// src/App.js
import './App.css';
import { Component } from 'react';
import MaleProducts from './maleproduct';
import FemaleProducts from './femaleproduct';
import KidsProducts from './kidproduct';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        { pId: 1, pName: "Trimmer", pCategory: "male", pPrice: 25, pIsInStock: true },
        { pId: 2, pName: "Skirt", pCategory: "female", pPrice: 45, pIsInStock: true },
        { pId: 3, pName: "Kids' Shoes", pCategory: "kids", pPrice: 30, pIsInStock: false },
        { pId: 4, pName: "Jeans", pCategory: "male", pPrice: 40, pIsInStock: true },
        { pId: 5, pName: "Tote Bag", pCategory: "female", pPrice: 60, pIsInStock: true },
        { pId: 6, pName: "Kids' Jacket", pCategory: "kids", pPrice: 35, pIsInStock: true },
        { pId: 7, pName: "Shoes", pCategory: "male", pPrice: 50, pIsInStock: false },
        { pId: 8, pName: "Scarf", pCategory: "female", pPrice: 20, pIsInStock: true },
        { pId: 9, pName: "Kids' Hat", pCategory: "kids", pPrice: 15, pIsInStock: true },
        { pId: 10, pName: "Perfume", pCategory: "male", pPrice: 80, pIsInStock: true },
        { pId: 11, pName: "Sunglasses", pCategory: "female", pPrice: 35, pIsInStock: false },
        { pId: 12, pName: "Kids' Backpack", pCategory: "kids", pPrice: 25, pIsInStock: true }
      ]
    };
  }

  render() {
    const maleProducts = this.state.productList.filter(p => p.pCategory === "male");
    const femaleProducts = this.state.productList.filter(p => p.pCategory === "female");
    const kidsProducts = this.state.productList.filter(p => p.pCategory === "kids");

    return (
      <div>
        <h1> Welcome to ShoppingApp</h1>
        <MaleProducts products={maleProducts} />
        <FemaleProducts products={femaleProducts} />
        <KidsProducts products={kidsProducts} />
      </div>
    );
  }
}

export default App;
