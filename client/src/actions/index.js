import axios from 'axios';

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get('/api/current_user');
  dispatch({ type: 'SET_CURRENT_USER', payload: response.data });
};

export const createUser = (values) => async (dispatch) => {
  axios.post('register/new', values)
  .then((response) => {
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  });
};

export const authUser = (values) => async (dispatch) => {
  axios.post('/auth', values)
  .then((response) => {
    fetchUser();
  })
  .catch(function(error){
    console.log('failure: ', error);
  });
};

export const createProject = (values, history) => async dispatch => {
  const submitValues = {
    title: values.projectTitle,
    subject: values.emailSubject,
    body: values.emailBody,
    dueDate: values.projectDue,
    recipients: values.projectGroup
  };
  const response = await axios.post('/api/projects', submitValues);
  dispatch({ type: 'SET_CURRENT_USER', payload: response.data });
  history.push('/dashboard');
};

export const fetchProjects = () => async dispatch => {
  const response = await axios.get('/api/projects');

  dispatch({ type: 'FETCH_PROJECTS', payload: response.data});
};

export const activeProject = (data) => async dispatch => {
  console.log('hitting activeProject');
  const response = await axios.get('/api/projects');
  [...response.data].forEach(function(project) {
    if (project._id === data._id) {
      dispatch({ type: 'ACTIVE_PROJECT', payload: project});
    }
  });
}

export const addSection = (values, id) => async dispatch => {
  axios.post('/api/projects/addsection', values)
  .then((response) => {
    dispatch({ type: 'ACTIVE_PROJECT', payload: response.data});
  });
};
