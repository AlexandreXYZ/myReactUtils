import ButtonChange from "./components/buttonChange";
import './App.css';

function App() {
  function test(){
    return console.log("Hello World")
  }
  return (
    <div className="App">
      <ButtonChange width="20" height="10" onClick={test}/>
      
    </div>
  );
}

export default App;
