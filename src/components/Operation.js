import React from 'react';

export default function Number(props) {

  const showBtn = (num)=>{
        switch(num) {
          case "+":
              return (<span>Add (+)</span>);
          case "-":
              return (<span>Subtract (-)</span>);
          case "*":
              return (<span>Multiply (*)</span>);
          case "/":
              return (<span>Divide (/)</span>);
          case "cl":
              return (<span>Clear</span>);
          default:
              return (<span>{num}</span>);
        }

  }

    return (
        <div className="box" onClick={()=>props.dispatch(props.num)}>
         {showBtn(props.num)}
        </div>
  );
}