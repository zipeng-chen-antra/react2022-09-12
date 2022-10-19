export function ourCreateStore(rootReducer) {
  let state = rootReducer(undefined, { type: " " });
  const subscriptionList = [];

  const store = {
    getState: () => state,
    dispatch: (action) => {
      state = rootReducer(state, action);
      subscriptionList.forEach((cb) => cb());
    },
    subscribe: (cb) => {
      subscriptionList.push(cb);
    },
  };
  return store;
}

// const myStore = ourCreateStore(counterReducer);
// myStore.subscribe(()=>{console.log("ourstore updated")});

// console.log(myStore.getState());
// myStore.dispatch({type:"counter/incremented"});
// console.log(myStore.getState())
// myStore.dispatch({type:"counter/incremented"});
// console.log(myStore.getState())
// myStore.dispatch({type:"counter/incremented"});
// console.log(myStore.getState())
// myStore.dispatch({type:"counter/incremented"});
// console.log(myStore.getState())
