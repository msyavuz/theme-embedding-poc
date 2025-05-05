import { useEffect } from "react";
import "./App.css"
import { embed } from "./embed";

function App() {


  useEffect(() => {
    embed();
  }, [])



  return (
    <div className="App">
      <div id='embedded-1' className='iframe-container'></div>
      <div id='embedded-2' className='iframe-container'></div>
      <div id='embedded-3' className='iframe-container'></div>
      <div id='embedded-4' className='iframe-container'></div>
    </div>
  )
}

export default App
