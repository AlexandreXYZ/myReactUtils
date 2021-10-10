import ButtonChange from "./components/buttonChange";
import './App.css';

function App() {
  function test(){
    return console.log("Hello World")
  }
  return (
    <div className="App">
      <ButtonChange width="60" height="24" onClick={test}/>
      
    </div>
  );
}

export default App;
