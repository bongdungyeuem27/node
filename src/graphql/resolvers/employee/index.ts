import { useEmployee } from "~contracts/index";
import { Context } from "../../context";
import profile from "./profile";
import skills from "./skills";

export default {
  ...profile,
  ...skills,
  employees: async (
    parent: any,
    args: string[],
    contextValue: Context,
    info: any
  ) => {
    const provider = contextValue.provider;
    const employeeContract = useEmployee(provider);
    return employeeContract
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
};
