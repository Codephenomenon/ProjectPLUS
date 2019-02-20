import axios from 'axios';

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get('/api/current_user');
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const createUser = (values) => async (dispatch) => {
  axios.post('register/new', values)
  .then((response) => {
    console.log(response);
  })
  .catch(function(error){
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  });
};
