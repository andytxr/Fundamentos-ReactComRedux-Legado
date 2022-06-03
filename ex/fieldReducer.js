const INITIAL_STATE = { 

    value: 'Hello'

}

export default function(state=INITIAL_STATE, action){

    switch(action.type){

        case 'FIELD_CHANGED':
            return {

                ...state, 
                value: action.payload 

            }
        default: 
            return state;

    }

}