export function inc(){

    return{

        type: 'INCREMENT'

    }

}

export function dec(){

    return{

        type: 'DECREMENT'

    }

}

export function stepChanged(e){

    return{

        type: 'STEP_CHANGED',
        payload: e.target.value

    }

}