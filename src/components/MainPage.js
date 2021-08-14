import {Fragment, useEffect, useState} from 'react'
import CardList from './CardList'
import Button from './Button'
import SearchBox from './SearchBox'
import '../containers/App.css'
// import axios from 'axios'
import Scroll from './Scroll'




function MainPage(props) {
 
// from redux
const {searchField, dataFromInpute, onRequestRobots, isPending, robotsReducer} = props

// ======================== <-----data flow ========================
useEffect(() => {
    
    setTimeout(() => {   //timeout to test loading
    // getUsers("https://jsonplaceholder.typicode.com/users", setRobots)
    // setIsPending(false);
    onRequestRobots()
}, 1000);
    // document.title = `You clicked ${count} times`;
},[])//if we add smth in the [], the dom is rerendered every time the value is changed


  
        const filteredRobots = robotsReducer.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
         })
        //  ------------------------------------------------
        
        
            return (
                
                <Fragment key='87t765'>
                    <section key='345' className='tc'>
                        
    
                        <h1 key='65' className='f1'>Robo Friends</h1>    
                        {/* data flow--inpute----> */}
                        <SearchBox key='5765' inputSearch={dataFromInpute}/>
    
                        {/* <----output----data flow */}
                       <Scroll key='6745'> 
                           {/* // handles loading */}
                       { isPending && <div key='87687'>Loading...</div> }                            
                       {filteredRobots && <CardList id='u' key='745636' robotsPassed={filteredRobots} />}
                       </Scroll>
                    </section>
                </Fragment>     
            )
        
   
}

export default MainPage

