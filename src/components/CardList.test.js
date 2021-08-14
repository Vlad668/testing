import CardList from './CardList'
import { create } from "react-test-renderer"

const mockData = [
    {
        id:1,
        name:'Test Name',
        email:'test@test.com'
    }
]

const app = create(<CardList robotsPassed={mockData} />);


it('snapwatch test', () => {
    expect(app.toJSON()).toMatchSnapshot()
})