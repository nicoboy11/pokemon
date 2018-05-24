/**
 * 
 * @param {*} type FETCHINGALL or FETCHINGONE
 * @param {*} url 
 */
export const fetching = (type, url) => {
    return (dispatch) => {
        dispatch({ type: type });

        fetchData(url)
        .then((text) => {
          const response = JSON.parse(text);
          dispatch({
              type: `${type}_SUCCESS`,
              payload: response
          })
        })        

    }
};


function fetchData(url){
    return fetch(url, { method: 'GET', type: 'cors' })
        .then(response => {
            return response.text()
        })
}