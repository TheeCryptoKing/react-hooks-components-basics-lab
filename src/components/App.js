import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

//  <About />  


function App() {
  return (
    <div id='about'>
    <h2 id='about'>About</h2>
      <NavBar />
      <Home />
      {/* <About />  */}
    </div>
  );
}

export default App;
