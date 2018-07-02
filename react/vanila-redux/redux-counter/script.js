const initialState = {
    count: 0
};

function rootReducer(state=initialState, action) {
    let newState = [];
    switch (action.type) { 
        case "INCREMENT":
            newState = {...state}
            newState.count++;
            return  newState;
        case "DECREMENT":
            newState = {...state}
            newState.count--;
            return  newState;
        default:
            return state;
    }
}

const store = Redux.createStore(rootReducer);

$(document).ready(function () {
    $("#increment").on("click", function () {
        store.dispatch({
            type:"INCREMENT"
        });
        let currontState = store.getState();
        $("#counter").text(currontState.count);
    });
    $("#decrement").on("click", function () {
        store.dispatch({
            type:"DECREMENT"
        });
        let currontState = store.getState();
        $("#counter").text(currontState.count);
    });

});