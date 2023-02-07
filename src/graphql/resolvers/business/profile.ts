import { useBusiness } from '~contracts/useBusiness';
import { Context } from '~graphql/context';

export default {
  businesses: async (parent: any, args: string[], contextValue: Context, info: any) => {
    const provider = contextValue.provider;
    const businessContract = useBusiness(provider);
    return businessContract
      .getAllProfile()
      .then((success) => {
        return success.map((value, index) => ({
          ...value,
          category: value.category.toNumber(),
          id: value.id.toNumber(),
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  },

  businessByUser: async (parent, args, contextValue: Context, info) => {
    const user: string = args.user;
    if (!user) return;
    info.cacheControl.setCacheHint({ maxAge: 600, scope: 'PRIVATE' });
    const provider = contextValue.provider;
    const businessContract = useBusiness(provider);
    return await businessContract
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
