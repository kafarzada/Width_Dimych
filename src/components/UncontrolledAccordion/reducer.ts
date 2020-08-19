type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE_COLLAPSED"

 export type stateType = {
    collapsed: boolean
}

export const reducer = (state:stateType, action: ActionType): stateType=> {
    switch(action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default: 
            throw new Error('Bad action type')
    }
    return state;
}
