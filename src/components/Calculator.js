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
           <div className="show-input"><h2>{data}</h2></div>
           <div className="modifiers grid">
               <button id="clear" onClick={() => setData(data.substr(0, data.length - 1))}>
                   C
               </button>
               <button id="aclear" onClick={() => setData("")}>
                   AC
               </button> <br/>
               <button id="operations1" onClick={e => setData(data + e.target.value)} value="+">
                   +
               </button> <br/>
               <button id="operations2" onClick={e => setData(data + e.target.value)} value="-">
                   -
               </button> <br/>
               <button id="operations3" onClick={e => setData(data + e.target.value)} value="*">
                   *
               </button> <br/>
               <button id="operations4" onClick={e => setData(data + e.target.value)} value="/">
                   /
               </button> <br/>
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
