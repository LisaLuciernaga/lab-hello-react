// src/App.js
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Component from './Components';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div id="components">
        <Component src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png' alt='ic1' h3='Declarative' text='React makes it painless to create interactive UIs.'/>
        <Component src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png' alt='ic2' h3='Components' text='Build encapsuled components that manage their state.'/>
        <Component src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png' alt='ic3' h3='Single-Way' text='A set of immutable values are passed to the components.'/>
        <Component src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png' alt='ic4' h3='JSX' text='Statically-typed, designed to run on modern browsers.'/>
      </div>
    </div>
  );
}
export default App;
