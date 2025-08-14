function ShoppingList() {
    const products = [
        { pId: 101, pName: 'Watch', pType: 'Accessory', pPrice: 2000, pIsInStock: true },
        { pId: 102, pName: 'Shoes', pType: 'Footwear', pPrice: 3500, pIsInStock: true },
        { pId: 103, pName: 'Laptop', pType: 'Electronics', pPrice: 55000, pIsInStock: false },
        { pId: 104, pName: 'Backpack', pType: 'Bag', pPrice: 1800, pIsInStock: true },
        { pId: 105, pName: 'Sunglasses', pType: 'Accessory', pPrice: 1200, pIsInStock: false },
    ];

    return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <h1>Shopping List</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price (₹)</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.pId}>
                            <td>{product.pId}</td>
                            <td>{product.pName}</td>
                            <td>{product.pType}</td>
                            <td>{product.pPrice}</td>
                            <td>{product.pIsInStock ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShoppingList;
