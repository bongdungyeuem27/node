import { useEmployee } from '~contracts/index';
import { Context } from '../context';
import employee from './employee';
import business from './business';
export const resolvers = {
  Query: {
    ...employee,
    ...business,
  },
  // Mutation: {
  //   uploadAvatar: async (parent, args, contextValue: Context) => {
  //     // console.log(args);
  //   },
  // },
};
