import React from 'react';

export default function Button(props) {
    return (
      <div className="btn">
        <button onClick={()=>props.handler("#fff")}>Light Theme</button>
        <button onClick={()=>props.handler("#000")}>Dark Theme</button>
      </div>
  );
}