import {CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FFAILED
} from './constants'

import * as reducers from './reducer'



describe('Serach Robot reducers', () => {

    const initialSearch = {
        searchFieldFromReducer: ''
    }

    it('serach robot reducer', ()=>{
        expect(reducers.searchRobots(undefined, {})).toEqual({
            searchFieldFromReducer: ""
        })
    })

    it('test CHANGE_SEARCHFIELD', ()=>{
        expect(reducers.searchRobots(initialSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({
            searchFieldFromReducer:'abc'
        })
    })
})

describe('test requestRobots reducer', ()=>{
    const initialRobotState = {
        robotsReducer: [],
        isPending:true,
        error:''
    }

    it('test REQUEST_ROBOTS_PENDING', ()=>{
        expect(reducers.requestRobots(undefined, {})).toEqual({
            robotsReducer: [],
            isPending:true,
            error:''
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(
          reducers.requestRobots(initialRobotState, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'j@jmail.com'
              }]
          })
        ).toEqual(
          {
            robotsReducer: [{
              id: '123',
              name: 'test',
              email: 'j@jmail.com'
            }],
            isPending: false,
            error:''
          }
        )
      })

      it('test REQUEST_ROBOTS_FFAILED', ()=>{
          expect(reducers.requestRobots(initialRobotState, {
              type: REQUEST_ROBOTS_FFAILED,
              payload: 'smth wrong'
          })).toEqual({
               
        error: 'smth wrong',
        robotsReducer: [],
        isPending: true
      
          })
      })
})