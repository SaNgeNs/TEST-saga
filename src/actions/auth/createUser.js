import {
  LOAD_CREATED_USER,
} from 'Types';

export const loadCreatedUser = (data) => ({
  type: LOAD_CREATED_USER,
  data,
});

export default loadCreatedUser;
