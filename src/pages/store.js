import {createStore} from 'redux'

const store=createStore(reducer);

const actionObj={
    type:'add';
    n:1
}

store.dispatch(actionObj);

function reducer(state='0',actionObj){
    switch(action.type){
        case :'add'
        return state+= action.n
    }
    default:return state
}