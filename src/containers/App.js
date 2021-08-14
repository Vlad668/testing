import {Fragment, useEffect, useState} from 'react'
import CardList from '../components/CardList'
import Button from '../components/Button'
import SearchBox from '../components/SearchBox'
import './App.css'
// import axios from 'axios'
import Scroll from '../components/Scroll'
import {connect} from 'react-redux'
import {setSearchField, setRobotsFromActions} from '../actions' /// 1 mark /// 2
import MainPage from '../components/MainPage'


// under this app we add all the app components
// ==================================================================================================
// parameter state comes from index.js provider store state(rootReducers)

// get data from redux 
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchFieldFromReducer,
        robotsReducer: state.requestRobots.robotsReducer,
        isPending:state.requestRobots.isPending
    }
}
// Send data to redux

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
    return {
        dataFromInpute: (event) => dispatch(setSearchField(event.target.value)), /// 1 mark
        onRequestRobots: ()=> dispatch(setRobotsFromActions()) /// 2
    }
}
// =============================================================================

function App(props) {
 
// from redux
// const {searchField, dataFromInpute, onRequestRobots, isPending, robotsReducer} = props



// ======================== <-----data flow ========================
// useEffect(() => {
    
//     setTimeout(() => {   //timeout to test loading
//     // getUsers("https://jsonplaceholder.typicode.com/users", setRobots)
//     // setIsPending(false);
//     onRequestRobots()
// }, 1000);
//     // document.title = `You clicked ${count} times`;
// },[])//if we add smth in the [], the dom is rerendered every time the value is changed




// =================================================================================================

// ------------------------------------------------
  
        // const filteredRobots = robotsReducer.filter(robot=>{
        //     return robot.name.toLowerCase().includes(searchField.toLowerCase())
        //  })
        //  ------------------------------------------------
        
        
            return (
                
                <MainPage {...props}/>  
            )
        

    // }

    // shouldComponentUpdate(nextProp,nextState){
        //    we can compare the xurrent state and nextState to re-render up state update    
    // }
   
}

export default connect(mapStateToProps,mapDispatchToProps)(App)