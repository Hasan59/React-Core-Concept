import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const array = [{ name: "Samsung", price: '$23456' },
  { name: "Nokia", price: '$234' },
  { name: "Symphony", price: '$567' },
  { name: 'Huyawe', price: "$678" },
  { name: "iPhone", price: "$567" }]
  const friends = ['Shimul', 'Shahin', 'Pulok', 'Tanvir', "Orko", 'Shanto', 'Sanjida', 'Rahima'];



  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ol>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ol>
        <Users></Users>

        <img src={logo} className="App-logo" alt="logo" />
        {
          array.map(item => <Further Item={item}></Further>)
        }
        {/* <Further Name={array[0].name} price={array[0].price}></Further>
        <Further Name={array[1].name} price={array[0].price}></Further>
        <Further Name={array[2].name} price={array[0].price}></Further> */}




      </header>
    </div >
  );
}
function Counter() {
  const [count, setCount] = useState(10);


  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div >

  );


}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  return (
    <div>
      <h2>Dynamic Users: {users.length}</h2>

      <ol>
        {
          users.map(item => <li>{item.name}</li>)
        }
      </ol>
    </div>
  )

}
function Further(props) {
  const { name, price } = props.Item;
  const red = {
    border: "1px solid gold",
    margin: "10px",
    float: "left",
    height: "300px", width: "500px"
  }
  return (<div style={red}>
    <h1>{name}</h1>
    <h3>{price}</h3>
    <button>Buy Now</button>

  </div>

  );

}

export default App;
