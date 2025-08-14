import { Component } from "react";

class FemaleProducts extends Component {
  render() {
    return (
      <div>
        <h2>Female Products</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((p) => (
              <tr key={p.pId}>
                <td>{p.pId}</td>
                <td>{p.pName}</td>
                <td>{p.pPrice}</td>
                <td>{p.pIsInStock ? "In Stock" : "Out of Stock"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FemaleProducts;
