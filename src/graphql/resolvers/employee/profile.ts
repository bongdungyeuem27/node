import { useEmployee } from '~contracts/index';
import { Context } from '../../context';

export default {
  employee: async (parent, args, contextValue: Context, info) => {
    const id = args.id;
    if (id === undefined || id === null) return;
    const provider = contextValue.provider;
    const employeeContract = useEmployee(provider);
    return await employeeContract
      .getAllProfile({})
      .then((success) => {
        const data = success.find((value, index) => value.id.eq(id));
        return {
          ...data,
          category: data.category.toNumber(),
          id: data.id.toNumber(),
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
  employeeByUser: async (parent, args, contextValue: Context, info) => {
    const user: string = args.user;
    if (!user) return;
    info.cacheControl.setCacheHint({ maxAge: 600, scope: 'PRIVATE' });
    const provider = contextValue.provider;
    const employeeContract = useEmployee(provider);
    return await employeeContract
      .getAllProfile({})
      .then((success) => {
        const data = success.find((value, index) => {
          return value.user.toLowerCase() === user.toLowerCase();
        });
        if (!data) return;
        return {
          ...data,
          category: data.category.toNumber(),
          id: data.id.toNumber(),
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
