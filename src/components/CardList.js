import React from 'react'
import Card from './Card'


const CardList = ({robotsPassed}) => {
    const RobotListComponent = robotsPassed.map((user, i)=>{
        return (
            <Card key={robotsPassed[i].id} id={robotsPassed[i].id} name={robotsPassed[i].name} email={robotsPassed[i].email}/>
        )
    })
    return (
    <section>
    {RobotListComponent}
    </section>
    )
}

export default CardList