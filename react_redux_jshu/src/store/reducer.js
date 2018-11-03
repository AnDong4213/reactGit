const defaultState = {
    inputValue: '',
    list: ['a','b']
}

export default (state = defaultState, action) => {
    if (typeof state === 'undefined') {
        return 0
    }
    switch (action.type) {
        case 'change_input_value': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        }
        case 'add_item': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState;
        }
        case 'delete_item': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            return newState;
        }
        default:
            return state;
    }
}


