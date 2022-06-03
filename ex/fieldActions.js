export function changeField(e){

    return {

        type: 'FIELD_CHANGED',
        payload: e.target.value

    }

}