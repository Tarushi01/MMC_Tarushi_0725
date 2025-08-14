import './App.css';
import Home from './components/home';
import ShoppingList from './components/shoppingList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the world of React</h1>
      <h3>Addition of my fav numbers is 30</h3>
      <h3>Tomorrow is {new Date().toDateString()}</h3>
      <h3>Do we have training tomorrow? {15<10? "Yes":"No"}</h3>
      <Home></Home>
      <ShoppingList></ShoppingList>



    </div>
  );
}

export default App;
