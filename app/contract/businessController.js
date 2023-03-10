import Web3 from "web3";
import { RPC } from "../constant/index.js";

export const ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "listBusinessAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listBusinessPostAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listApplyAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listAppointmenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "hashTag",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "job",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "imageSource",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "eventAddPost",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "applyId",
        type: "uint256",
      },
    ],
    name: "_checkApplyIdBelongsToEmployeeId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "applyId",
        type: "uint256",
      },
    ],
    name: "_checkApplyIdBelongsToPostId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "_checkExistApply",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_checkExistBusinessAccount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "_checkPostIdBelongstoBusinessId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "employeeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "businessId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "applyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "addAppointment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "category",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "phone",
        type: "string",
      },
      {
        internalType: "string",
        name: "professional",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "github",
        type: "string",
      },
      {
        internalType: "string",
        name: "linkedin",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceImage",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    name: "addBusiness",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "hashTag",
        type: "string",
      },
      {
        internalType: "string",
        name: "job",
        type: "string",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageSource",
        type: "string",
      },
      {
        internalType: "enum Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "addPost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "autoLogin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "businessId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "appointmentId",
        type: "uint256",
      },
    ],
    name: "deleteAllAppointment",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "phone",
        type: "string",
      },
      {
        internalType: "string",
        name: "professional",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "github",
        type: "string",
      },
      {
        internalType: "string",
        name: "linkedin",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceImage",
        type: "string",
      },
    ],
    name: "editBusiness",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAppointment",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "appointmentId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "applyId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "employeeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "businessId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "status",
            type: "uint256",
          },
        ],
        internalType: "struct Appointment[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPost",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "businessPostId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "hashTag",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageSource",
            type: "string",
          },
          {
            internalType: "string",
            name: "job",
            type: "string",
          },
          {
            internalType: "enum Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct BusinessPost[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProfile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "string",
            name: "password",
            type: "string",
          },
        ],
        internalType: "struct Profile[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "getApplierOfPost",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "applyId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "employeeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "businessId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "status",
            type: "uint256",
          },
        ],
        internalType: "struct Apply[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "applyId",
        type: "uint256",
      },
    ],
    name: "getApply",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "applyId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "employeeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "businessId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "status",
            type: "uint256",
          },
        ],
        internalType: "struct Apply",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "appointmentId",
        type: "uint256",
      },
    ],
    name: "getAppointment",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "appointmentId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "applyId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "employeeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "businessId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "status",
            type: "uint256",
          },
        ],
        internalType: "struct Appointment",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "getListPostOfBusiness",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "businessPostId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "hashTag",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageSource",
            type: "string",
          },
          {
            internalType: "string",
            name: "job",
            type: "string",
          },
          {
            internalType: "enum Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct BusinessPost[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "getPost",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "businessPostId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "hashTag",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageSource",
            type: "string",
          },
          {
            internalType: "string",
            name: "job",
            type: "string",
          },
          {
            internalType: "enum Status",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct BusinessPost",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getProfile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "string",
            name: "professional",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "github",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkedin",
            type: "string",
          },
          {
            internalType: "string",
            name: "sourceImage",
            type: "string",
          },
          {
            internalType: "string",
            name: "password",
            type: "string",
          },
        ],
        internalType: "struct Profile",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    name: "login",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        internalType: "enum Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "setStatusPost",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const ADDRESS = "0x046060F09AB091aC7e3B6B3a82F54D7bc8c66551";

export async function getContract() {
  const provider = new Web3.providers.HttpProvider(RPC);
  const web3 = new Web3(provider);
  return new web3.eth.Contract(ABI, ADDRESS);
}
