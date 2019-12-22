import { createStore } from 'redux'

export default createStore(reducer);


// 要自己再不看的情况下写一遍
function reducer(state = { historyList: [] }, action) {
    switch (action.type) {
        case 'addHistory':
            const {historyList} = state;
            for (let i = 0; i<historyList.length;i++){
                if(historyList[i].id === action.item.id){
                    historyList.splice(i,1);
                }
            }
            return {
                ...state,
                historyList:[action.item,...state.historyList]
            }
            default: 
            return state
    }

}

export const addHistory = (item) => {
    return {
        type: 'addHistory',
        item
    }
}