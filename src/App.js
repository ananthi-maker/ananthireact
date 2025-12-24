import{useState} from 'react'
import React from 'react'
const App = () => {
  const [name,setName]=useState("---")

  const dis=(event)=>{
       setName(event.target.value)
  }
  const show=(v)=>{
    console.log(v)
  }
  return (
    <div>
      <form>
      <input type="text" value={name} onChange={dis} placeholder='enter user name'></input><br></br>
      <input type="password"onChange={()=>show("12345")} placeholder='enter password'></input><br></br>
      <input type="number" placeholder='enter accno'></input><br></br>
      <input type="email" placeholder='Enter Email:'></input>
      <label>Select Gender:</label>
      <input type="radio"name="gen"></input>Male
      <input type="radio"name="gen"></input>Female
      <input type="radio"name="gen"></input>Others
      <br></br>
      <label>Select Course:</label>
      <input type="checkbox"name="C1"></input>c
      <input type="checkbox"name="C2"></input>C++
      <input type="checkbox"name="C3"></input>Java
      <input type="checkbox"name="C4"></input>Python
      <input type="checkbox"name="C5"></input>None of these above
      <br></br>
      <select>
        <option>Select Month</option>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
      </select>
      <br></br>
      Select Color:<input type="color"name="col"></input>
      <br></br>
      Select DOB:<input type="date"name="dob"></input>
      <br></br>
      Select Time:<input type="time"name="time"></input>
      <br></br>
      Select Week:<input type="week"name="wk"></input>
      <br></br>
      upload resume:<input type="file"></input>
      <br></br>
      <button><b><s>clickme</s></b></button>
      <br></br>
      <label>Type your address:</label>
      <textarea rows="7"cols="25"></textarea>
      <br></br>
      <label>list box</label>
      <select size="6">
      <option>sunday</option>
      <option>monday</option>
      <option>tuesday</option>
      <option>wednesday</option>
      <option>thursday</option>
      <option>friday</option>
      <option>saturday</option>
      </select>
      <br></br>
      <label>progrees bar 90% completed</label>
      <progress style={{backgroundColor:'cyan',border:"3px solid orange"}}min="0"max="100"value="90"></progress>
      <br></br>
      <font size="7">😍🤩😻🦋💗🧡❤🧜‍♂️</font>
      <label>volume:</label>
      <input type="range" min="0" max="6"></input>
      <input type="submit"></input>
      <input type="button" value="clickme"></input>
      <br></br>
      </form>
    </div>
  )
}

export default App





/*function App(props)
{
  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies
  return(<>
  <h3>Type of rno:  {typeof(a)}</h3>
  <h3>Type of sname:{typeof(b)}</h3>
  <h3>Type of marital status:{typeof(c)}</h3>
  <h3>Type of marks:{typeof(d)}</h3>
  <h3>{Array.isArray(d)?"is array":"it is object json"}</h3>
  <h3>{Array.isArray(e)?"it is array":"it is object json"}</h3>
  </>)

   
  
}
export default App
  /*import parse from 'html-react-parser';
function App (props)
{
  var ans=""
  for(var s in props.data)
  {
    ans=ans+`<li>${s}=${props.data[s]}</li>`
    console.log(s)
  }
  return(
    <>
    {parse("<ol>"+ans+"</ol>")}
    </>
  )
}
export default App




/*
import React from "react";
import parse from'html-react-parser'
class App extends React.Component
{
  constructor(props)
  {
    var ans=""
    super(props)
    for(var s in props.data)
    {
      ans=ans+`<li>${s}=${props.data[s]}</li>`
      console.log(s)
    }
    //var h="<ol>"
    this.state={
        // res:h+ans
         res:"<ol type='I'>"+ans+"</ol>"
     }
    }
    render()
    {
    return(
    <>
    <h1>Combine react state + props</h1>
    {parse(this.state.res)}
    <div id="res"></div>
    </>)}
    }
    export default App




/*
function App()
{
  return(
    <div>
      <h1>Welcome to React</h1>
      <h1>Ananthi.V</h1>
      <h2>Viji</h2>
    </div>
}
  )xport default App
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/