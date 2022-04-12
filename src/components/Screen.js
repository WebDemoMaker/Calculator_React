import React from 'react';
import Operation from './Operation';



export default function Screen(props) {
  
	const [result , setResult] = React.useState(0);
	const [operands , setOperands] = React.useState([])
  const [showresult , setShowresult] = React.useState(true)


	
  function evaluate(param1,param2,operation)
  {
          switch(operation) {
              case "+":
                  return param1 + param2;
              case "-":
                  return param1 - param2;
              case "*":
                  return param1 * param2;
              case "/":
                  return param1 / param2;
          }
  }

  function clearRes()
  {
      setResult(0)
      setOperands([])
      setShowresult(true)
  
  }

  const Operations=(num)=>{
    if(num != "cl")
    {
		  setOperands([...operands , num]) 
    }
    setShowresult(false)
		if(num == "=")
    {
      setShowresult(true)
      setOperands([])
      let oper0=0;
      let oper1=0;
      let result=0;
      let flag=false;
      let operator='';
      let a = [...operands, num];
      var temp;
      for(let i =0;i<a.length;i++)
      {
        // ['2', '+', '3', '-', '1', '*', '1', '0', '=']
          if(!isNaN(a[i]))
          {
              if(!flag)
              oper0+=a[i]
              else
              oper1+=a[i]
          }
          else
          {
              if(a[i] !== "=")
              {
                   flag = true
                   if(oper1 != 0)
                   {
                     temp = evaluate(+oper0, +oper1 , operator)
                     setResult(temp)
                     oper1=0;
                     oper0=temp;
                   }
                   operator=a[i]

              }
             
              else
              {
                 temp = evaluate(+oper0, +oper1 , operator)
                 setResult(temp)

              }
           
             
          }
      }
    }
    else if(num == "cl")
    {
      clearRes()
    }
	}
    return (
      <div className="container">
        <div className="screen">
          <h5>{operands} {showresult ? result : null} </h5>
        </div>
        <div className={props.theme == "#000" ? "screenpaddark" : "screenpadlight"}>
          <Operation num="1"  dispatch={Operations}/>
          <Operation num="2"  dispatch={Operations}/>
          <Operation num="3"  dispatch={Operations}/>
          <Operation num="+"  dispatch={Operations}/>

          <Operation num="4"  dispatch={Operations}/>
          <Operation num="5"  dispatch={Operations}/>
          <Operation num="6"  dispatch={Operations}/>
          <Operation num="-"  dispatch={Operations}/>

          <Operation num="7"  dispatch={Operations}/>
          <Operation num="8"  dispatch={Operations}/>
          <Operation num="9"  dispatch={Operations}/>
          <Operation num="*"  dispatch={Operations}/>

          <Operation num="cl" dispatch={Operations}/>
          <Operation num="0"  dispatch={Operations}/>
          <Operation num="="  dispatch={Operations}/>
          <Operation num="/"  dispatch={Operations}/>
        </div>
      </div>
  );
}