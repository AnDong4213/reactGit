const defaultState = {
    inputValue: '',
    list: ['a','b']
}

export default (state = defaultState, action) => {
    /* if (action.type === 'change_input_value') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState;
    }
    if (action.type === 'delete_item') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state; */

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


