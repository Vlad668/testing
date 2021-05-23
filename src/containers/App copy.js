import React, {Fragment, Component} from 'react'
import CardList from '../components/CardList'
import {robots} from '../robots'
import SearchBox from '../components/SearchBox'
import './App.css'
import axios from 'axios'
import Scroll from '../components/Scroll'


// under this app we add all the app components



class App extends Component {
 
// ------------------------------------------------
    // constructor in class
    constructor(){
        // use super because these vars are not in constructor
        super()
        this.state = {
            // robots is what we pass in CardList and we can manipulete its output. In this case, we pass all data to the new var to filter it
            robotsNewFromSearch: [],
            // we will assign values from input and then use to compare in filter
            searchField: ''
        }
    }
// -------------------------------------------------
// passes data to searchfield 
dataFromInpute = (event) => {
    this.setState({searchField: event.target.value})
    
}
//  ====================WE CAN USE EITHER THIS==============================================

// componentDidMount(){
    //  axios.get('https://jsonplaceholder.typicode.com/users')
    //      .then(res => {
    //      this.setState({
    //         robotsNewFromSearch: res.data
    //      })
    //  })
    //  .catch(function (error) {
    //     console.log(error);
    //   })
// }
// -----------------------OR THIS------------------------------------------------------------
componentDidMount(){
this.getUsers();               
}

getUsers = async () => {
    try{
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        let { data } = res;
        this.setState({ robotsNewFromSearch: data });
    }
    catch(e) {
        console.log(e)
    }
    
};
// =================================================================================================

// ------------------------------------------------
    // method in class
    render(){
        const {robotsNewFromSearch, searchField} = this.state
        const filteredRobots = robotsNewFromSearch.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
         })
        //  console.log(filteredRobots)
        if(!filteredRobots.length){
            return <h1>Loading</h1>
        }else{
            return (
                <Fragment>
                    <section className='tc'>
    
                        <h1 className='f1'>Robo Friends</h1>    
                        {/* data flow--inpute----> */}
                        <SearchBox inputSearch={this.dataFromInpute}/>
    
                        {/* <----output----data flow */}
                       <Scroll>
                       <CardList robotsPassed={filteredRobots} />
                       </Scroll>
                    </section>
                </Fragment>     
            )
        }

    }
   
}

export default App


