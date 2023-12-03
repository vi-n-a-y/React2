import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';


//(1)create a nested header element using react.create element(h1,h2,h3 inside a div with class "title" )
const root = ReactDOM.createRoot(document.getElementById('root'));
const nested=React.createElement( "div",{className: "title",key:"title"},
  [
    React.createElement("h1",{key:"h1"},"Created using h1 tag"),
    React.createElement("h2",{key:"h2"},"Created using h2 tag"),
    React.createElement("h3",{key:"h13"},"Created using h3 tag")
   
]);
root.render(nested);

//(2) Create the same element using JSX 
const usingJsx=(
  <div className='title'>
    <h1>created using h1 tag</h1>
    <h2>created using h2 tag</h2>
    <h3>created using h3 tag</h3>
  </div>
  );
  root.render(usingJsx);

  //create a functional component of the same with jsx
  const FunComp=()=>{
    return(
      <div className='title'>
        <h1>functional component of h1</h1>
        <h2>functional component of h2</h2>
        <h3>functional component of h3</h3>
      </div>
    )
  };
  root.render(<FunComp/>);
  
  //(4) pass attributes into the tag in jsx
  const passAttr=(
    <div className="title">
      <h1 style={{color: "green"}}>created using h1 tag in jsx</h1>
      <h2 style={{color: "violet"}}>created using h2 tag in jsx</h2>
      <h3 style={{color: "blue"}}>created using h3 tag in jsx</h3>
    </div>
  )
  root.render(passAttr);
  //(5) composition of component (App a component inside anothe)

  const CompOfComp=()=>{
    return(
      <h1>composition of componet i.e, component inside the another component</h1>,
      <FunComp/>
    )
  };
  root.render(<CompOfComp/>);
  
  //{<TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent} in JSX

const TitleElement=()=>{
return(
   <h2 style={{color:"red"}}>titleElement is here</h2>
)
}
const TitEle =()=>{
return(
  <div className='Title' key='title'>
    <TitleElement/>
    <TitleElement></TitleElement>
  </div>
  
  )
}
root.render(<TitEle/>)
//its run one render() at a time.


