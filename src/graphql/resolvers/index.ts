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
