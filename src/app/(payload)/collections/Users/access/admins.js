import checkRole from '../checkRole';

export const admins = ({ req: { user } }) => {
  console.log('Checking if user is admin:', user);
  return checkRole(['admin'], user);
};
