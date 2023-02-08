import { useBusiness } from '~contracts/useBusiness';
import { Context } from '~graphql/context';

export default {
  posts: async (parent: any, args: string[], contextValue: Context, info: any) => {
    const provider = contextValue.provider;
    const businessContract = useBusiness(provider);
    return businessContract
      .getAllPosts()
      .then((success) => {
        return success.map((value, index) => ({
          id: value.id.toNumber(),
          businessId: value.businessId.toNumber(),
          hashtag: value.hashTag,
          time: value.time.toNumber,
          content: value.content,
          imageSource: value.imageSource,
          job: value.job,
          status: value.status,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  postsByBusinessId: async (
    parent: any,
    args: { businessId: number },
    contextValue: Context,
    info: any
  ) => {
    const businessId = args.businessId;
    const provider = contextValue.provider;
    const businessContract = useBusiness(provider);
    return businessContract
      .getAllPosts()
      .then((success) => {
        return success
          .filter((x) => x.businessId.eq(businessId))
          .map((value, index) => ({
            id: value.id.toNumber(),
            businessId: value.businessId.toNumber(),
            hashtag: value.hashTag,
            time: value.time.toNumber(),
            content: value.content,
            imageSource: value.imageSource,
            job: value.job,
            status: value.status,
          }));
      })
      .catch((error) => {
        console.error(error);
      });
  },
};