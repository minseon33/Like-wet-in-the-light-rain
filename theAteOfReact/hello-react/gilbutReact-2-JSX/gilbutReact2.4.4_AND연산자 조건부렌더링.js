function App(){
  const name = "리액트"


  return (
    <div>
      {name === "React" &&
      <h1>리액트입니다.</h1>
     }
    </div>
  );
}

export default App;