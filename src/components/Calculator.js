import React, {useState} from "react";
import "./calculator.css";


function Calculator(){
    const [data, setData] = useState("");
    const calcBtns = [];
    [9,8,7,6,5,4,3,2,1,0,"."].forEach(item => {
        calcBtns.push(
            <button onClick={e => {
                setData(data + e.target.value)
            }}
            value = {item}
            key = {item}>
                {item}
            </button>
        )
    })
    return(
       <div className="wrapper">
           <div className="show-input"><h2>Result: {data}</h2></div>
           <div className="modifiers grid">
               <button onClick={() => setData(data.substr(0, data.length - 1))}>
                   Clear
               </button>
               <button onClick={() => setData("")}>
                   AC
               </button>
               <button id="operations" onClick={e => setData(data + e.target.value)} value="+">
                   +
               </button>
               <button id="operations" onClick={e => setData(data + e.target.value)} value="-">
                   -
               </button>
               <button id="operations" onClick={e => setData(data + e.target.value)} value="*">
                   *
               </button>
               <button id="operations" onClick={e => setData(data + e.target.value)} value="/">
                   /
               </button>
               <button id="equal" onClick={e =>{
                   try{
                       setData(
                           String(eval(data)).length > 3 &&
                           String(eval(data)).includes(".")
                           ? String(eval(data).toFixed(4))
                           : String(eval(data))
                       )
                   }
                   catch(err){
                       console.log(err);
                   }
                }}
                value = "=">
                   =
               </button>
           </div>
           
           <div className="digits flex">{calcBtns}</div> 

       </div>
    );
}

export default Calculator;
