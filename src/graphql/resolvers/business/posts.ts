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
          time: value.time.toNumber(),
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
  post: async (parent: any, args: { postId: number }, contextValue: Context, info: any) => {
    const postId = args.postId;
    const provider = contextValue.provider;
    const businessContract = useBusiness(provider);
    return businessContract
      .getAllPosts()
      .then((success) => {
        const data = success.find((x) => x.id.eq(postId));
        if (!data) return;
        return {
          id: data.id.toNumber(),
          businessId: data.businessId.toNumber(),
          hashtag: data.hashTag,
          time: data.time.toNumber(),
          content: data.content,
          imageSource: data.imageSource,
          job: data.job,
          status: data.status,
        };
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
