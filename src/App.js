import './App.css';

function App() {

  const click = () => {
    let randomNum = Math.round(Math.random() * 90 + 10);
    console.log(randomNum); 
  }

  return (
    <div className='App'>
      <h1>Random Number</h1>
      <button onClick={click}>Click</button>
    </div>
  )
}
export default App;