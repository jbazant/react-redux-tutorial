export const loggerMiddleware = store => next => action => {
    if (typeof action === 'function') {
        console.log('functional action');
        return next(action);
    }

    console.group(action.type);
    console.log('old state', store.getState());
    console.log('dispatching', action);

    next(action);

    console.log('next state', store.getState());
    console.groupEnd();
}
