import {ADD_EMP, GET_EMP, FETCH_API_EMP, Get_Freq_data} from '../Action/Type';
const data = {
  emp: [
    {
      id: '1',
      employee_name: 'Tiger Nixon',
      employee_salary: '320800',
      employee_age: '61',
      profile_image: '',
    },
  ],
};

export default (state = data, action) => {
  switch (action.type) {
    case ADD_EMP:
      return;
    case GET_EMP:
      return state;

    case FETCH_API_EMP:
      // let d = JSON.parse(action.payload);

      let d = action.payload;

      return {emp: d};
    default:
      return state;
  }
};
