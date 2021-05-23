import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

const Card = (props) =>{
  const {id, name, email} = props
  
  return (
    <React.Fragment>
    <section className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='profile' src={`https://robohash.org/${id}?200x200`}/>
    <div>
      <h3>{name}</h3>
      <span>{email}</span>
    </div>
    </section>
    </React.Fragment>
  );
}

export default Card;
