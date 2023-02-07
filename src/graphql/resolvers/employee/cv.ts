import { useEmployee } from '~contracts/index';
import { Context } from '~graphql/context';

export default {
  cv: async (parent, args, contextValue: Context, info) => {
    const employeeId = args.employeeId;
    if (!employeeId) return;
    const provider = contextValue.provider;
    const employeeContract = useEmployee(provider);
    return await employeeContract
      .getAllProfile({})
      .then(async (success) => {
        const data = success.find((value, index) => value.id.eq(employeeId));
        const skills = await employeeContract
          .getAllSkill()
          .then((x) =>
            x.map((xValue) => ({
              id: xValue.id.toNumber(),
              employeeId: xValue.employeeId.toNumber(),
              title: xValue.title,
              level: xValue.level.toNumber(),
            }))
          )
          .catch((error) => console.error(error));
        return {
          ...data,
          category: data.category.toNumber(),
          id: data.id.toNumber(),
          skills,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
