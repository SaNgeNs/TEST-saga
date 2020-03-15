import {
  LOAD_LOG_IN_USER,
} from 'Types';

export const loadLogInUser = (data) => ({
  type: LOAD_LOG_IN_USER,
  data,
});

export default loadLogInUser;
