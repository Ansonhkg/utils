/**
 * Returns a function, that, as long as it contiunes to be invoked, will not
 * be triggered. 
 * @param { function } func_immediate function to be called immediately
 * @param { function } func function to be called after it stops being called for N milliseconds.
 * @param { number } wait milliseconds before triggering function
 */
const debounce = (func_immediate, func, wait) => {

    var timeoutId;
    
    return () => {
        // function to trigger immediately
        func_immediate();
        
        // Each time the function calls clear timeout
        clearTimeout(timeoutId);

        // delayed call
        timeoutId = setTimeout(func, wait);
    }
}

module.exports = {
    debounce
}