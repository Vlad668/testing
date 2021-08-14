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
    <section key='097' id='test' className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img key='8' alt='profile' src={`https://robohash.org/${id}?200x200`}/>
    <div key='40'>
      <h3 key='90'>{name}</h3>
      <span key='9'>{email}</span>
    </div>
    </section>
    </React.Fragment>
  );
}

export default Card;
