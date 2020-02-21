import {ADD_EMP, GET_EMP, SET_EMP, FETCH_API_EMP, Get_Freq_data} from './Type';

export const Get_emp = () => {
  return {
    type: GET_EMP,
  };
};

export const Fetch_Async_Emp = () => {
  return async dispatch => {
    await fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else console.error('Error : ', response);
      })
      .then(json => {
        console.log(json);
        dispatch({
          type: FETCH_API_EMP,
          payload: json.data,
          firstTime: true,
        });
      })
      .catch(error => console.error('error', error));
  };
};

export const Set_emp = (payload, condition) => {
  return {
    type: SET_EMP,
    payload,
  };
};
