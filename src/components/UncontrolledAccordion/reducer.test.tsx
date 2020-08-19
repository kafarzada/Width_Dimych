import { stateType, reducer, TOGGLE_COLLAPSED } from "./reducer"

test('reducer should change value to opposite value', () => {
    // data
    const state: stateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED});

    //expection
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
    // data
    const state: stateType = {
        collapsed: true
    }

    //action
    expect( () => { 
        reducer(state, {type: 'FAKE'})
    }).toThrowError()
})