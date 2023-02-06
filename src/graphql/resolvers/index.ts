import { useEmployee } from "~contracts/index";
import { Context } from "../context";
import employee from "./employee";
export const resolvers = {
  Query: {
    ...employee,
    books: async (parent, args, contextValue: Context) => {
      return books;
    },
    book: async (parent, { title }) => books[0],

    skillsByEmployee: async (parent, args, contextValue: Context, info) => {
      try {
        const employeeId = args.employeeId;
        if (!employeeId) return;
        const provider = contextValue.provider;
        const employeeContract = useEmployee(provider);
        return await employeeContract.getAllSkill().then((success) => {
          return success
            .filter((value) => value.employeeId == employeeId)
            .map((value) => ({ ...value }));
        });
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  // Mutation: {
  //   uploadAvatar: async (parent, args, contextValue: Context) => {
  //     // console.log(args);
  //   },
  // },
};

const books = [
  {
    id: 0,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 1,
    title: "City of Glass",
    author: "Paul Auster",
  },
];
