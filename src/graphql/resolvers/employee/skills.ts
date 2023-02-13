import { useEmployee } from '~contracts/index';
import { Context } from '~graphql/context';

export default {
  skillsByEmployeeId: async (parent, args, contextValue: Context, info) => {
    try {
      const employeeId = args.employeeId;
      if (employeeId == undefined || employeeId == null) return;
      const provider = contextValue.provider;
      const employeeContract = useEmployee(provider);
      return await employeeContract.getAllSkill().then((success) => {
        return success
          .filter((value) => value.employeeId.eq(employeeId))
          .map((value) => ({
            id: value.id.toNumber(),
            employeeId: value.employeeId.toNumber(),
            title: value.title,
            level: value.level.toNumber(),
          }));
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};
