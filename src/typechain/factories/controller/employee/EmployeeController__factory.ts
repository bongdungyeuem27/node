/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EmployeeController,
  EmployeeControllerInterface,
} from "../../../controller/employee/EmployeeController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "listEmployeeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listEmployeeSkillAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listEmployeeApplyAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "listEmployeeAppointmenAddress",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "employeeId",
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
    name: "_checkExistEmployeeAccount",
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
        internalType: "string",
        name: "title",
        type: "string",
      },
    ],
    name: "_checkExistSkill",
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
    name: "_checkIdBelongsToPostId",
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
    ],
    name: "addEmployee",
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
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "addSkill",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "businessId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "applyPost",
    outputs: [],
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
        internalType: "uint256",
        name: "skillId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "editSkill",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a8d38038062002a8d8339818101604052810190620000379190620001f7565b80828486336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505062000269565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001bf8262000192565b9050919050565b620001d181620001b2565b8114620001dd57600080fd5b50565b600081519050620001f181620001c6565b92915050565b600080600080608085870312156200021457620002136200018d565b5b60006200022487828801620001e0565b94505060206200023787828801620001e0565b93505060406200024a87828801620001e0565b92505060606200025d87828801620001e0565b91505092959194509250565b61281480620002796000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063c1fa897d11610066578063c1fa897d146101fe578063e583267d1461022e578063ec40a59b1461024a578063f2fde38b14610268576100cf565b80638da5cb5b1461019457806396b93424146101b2578063bad50029146101ce576100cf565b80631fe1d463146100d45780633901d42d146100f057806349e488a01461010e57806364f3fe9d1461013e5780637be695691461016e57806383197ef01461018a575b600080fd5b6100ee60048036038101906100e991906112bf565b610284565b005b6100f8610401565b60405161010591906115c3565b60405180910390f35b610128600480360381019061012391906115e5565b610483565b6040516101359190611640565b60405180910390f35b610158600480360381019061015391906115e5565b610591565b6040516101659190611640565b60405180910390f35b6101886004803603810190610183919061165b565b610653565b005b61019261077f565b005b61019c6107a0565b6040516101a991906117e4565b60405180910390f35b6101cc60048036038101906101c791906117ff565b6107c9565b005b6101e860048036038101906101e391906115e5565b610953565b6040516101f59190611640565b60405180910390f35b61021860048036038101906102139190611852565b610a15565b6040516102259190611640565b60405180910390f35b610248600480360381019061024391906117ff565b610af5565b005b610252610c4c565b60405161025f9190611640565b60405180910390f35b610282600480360381019061027d91906118da565b610d27565b005b8261028d610c4c565b6102cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c39061198a565b60405180910390fd5b6102d581610daa565b610314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030b90611a1c565b60405180910390fd5b83836103208282610a15565b15610360576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035790611aae565b60405180910390fd5b600060405180608001604052808881526020016000815260200187815260200186815250905061038e610e66565b73ffffffffffffffffffffffffffffffffffffffff166363ba26b6826040518263ffffffff1660e01b81526004016103c69190611b31565b600060405180830381600087803b1580156103e057600080fd5b505af11580156103f4573d6000803e3d6000fd5b5050505050505050505050565b606061040b610e90565b73ffffffffffffffffffffffffffffffffffffffff166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa158015610455573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061047e9190611e97565b905090565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa1580156104f3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061051c9190612043565b905060005b815181101561058457600082828151811061053f5761053e61208c565b5b6020026020010151905085816020015114801561055f5750848160600151145b15610570576001935050505061058b565b50808061057c906120ea565b915050610521565b5060009150505b92915050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90856040518263ffffffff1660e01b81526004016105ef9190612141565b60c060405180830381865afa15801561060c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610630919061215c565b60200151905080830361064757600191505061064d565b60009150505b92915050565b61065b610c4c565b1561069b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610692906121fb565b60405180910390fd5b600033905060006040518061014001604052808b8152602001600081526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018a8152602001898152602001888152602001878152602001868152602001858152602001848152509050610709610e90565b73ffffffffffffffffffffffffffffffffffffffff1663057f4d79826040518263ffffffff1660e01b8152600401610741919061231f565b600060405180830381600087803b15801561075b57600080fd5b505af115801561076f573d6000803e3d6000fd5b5050505050505050505050505050565b610787610eba565b3073ffffffffffffffffffffffffffffffffffffffff16ff5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b826107d2610c4c565b610811576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108089061198a565b60405180910390fd5b61081a81610daa565b610859576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085090611a1c565b60405180910390fd5b83826108658282610483565b156108a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089c906123b3565b60405180910390fd5b60006040518060c0016040528060008152602001888152602001878152602001868152602001428152602001600081525090506108e0610f31565b73ffffffffffffffffffffffffffffffffffffffff1663a5b7e4bd826040518263ffffffff1660e01b8152600401610918919061244e565b600060405180830381600087803b15801561093257600080fd5b505af1158015610946573d6000803e3d6000fd5b5050505050505050505050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90856040518263ffffffff1660e01b81526004016109b19190612141565b60c060405180830381865afa1580156109ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f2919061215c565b606001519050808303610a09576001915050610a0f565b60009150505b92915050565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166325f5477085856040518363ffffffff1660e01b8152600401610a759291906124a2565b602060405180830381865afa158015610a92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab691906124d2565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ae9576001915050610aef565b60009150505b92915050565b82610afe610c4c565b610b3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b349061198a565b60405180910390fd5b610b4681610daa565b610b85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7c90611a1c565b60405180910390fd5b8383610b918282610f5b565b610bd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc790612571565b60405180910390fd5b610bd8610e66565b73ffffffffffffffffffffffffffffffffffffffff166370a93b3686866040518363ffffffff1660e01b8152600401610c12929190612591565b600060405180830381600087803b158015610c2c57600080fd5b505af1158015610c40573d6000803e3d6000fd5b50505050505050505050565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166368938870336040518263ffffffff1660e01b8152600401610caa91906117e4565b602060405180830381865afa158015610cc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ceb91906124d2565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610d1e576001915050610d24565b60019150505b90565b610d2f610eba565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d959061262c565b60405180910390fd5b610da781611022565b50565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90846040518263ffffffff1660e01b8152600401610e089190612141565b600060405180830381865afa158015610e25573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610e4e919061264c565b9050610e5e8160400151336110e6565b915050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff16610ed96107a0565b73ffffffffffffffffffffffffffffffffffffffff1614610f2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f26906126e1565b60405180910390fd5b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0886f90856040518263ffffffff1660e01b8152600401610fb99190612141565b600060405180830381865afa158015610fd6573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610fff9190612795565b60200151905082810361101657600191505061101c565b60009150505b92915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111245760019050611129565b600090505b92915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61115681611143565b811461116157600080fd5b50565b6000813590506111738161114d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6111cc82611183565b810181811067ffffffffffffffff821117156111eb576111ea611194565b5b80604052505050565b60006111fe61112f565b905061120a82826111c3565b919050565b600067ffffffffffffffff82111561122a57611229611194565b5b61123382611183565b9050602081019050919050565b82818337600083830152505050565b600061126261125d8461120f565b6111f4565b90508281526020810184848401111561127e5761127d61117e565b5b611289848285611240565b509392505050565b600082601f8301126112a6576112a5611179565b5b81356112b684826020860161124f565b91505092915050565b6000806000606084860312156112d8576112d7611139565b5b60006112e686828701611164565b935050602084013567ffffffffffffffff8111156113075761130661113e565b5b61131386828701611291565b925050604061132486828701611164565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61136381611143565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061139482611369565b9050919050565b6113a481611389565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156113e45780820151818401526020810190506113c9565b60008484015250505050565b60006113fb826113aa565b61140581856113b5565b93506114158185602086016113c6565b61141e81611183565b840191505092915050565b600061014083016000830151611442600086018261135a565b506020830151611455602086018261135a565b506040830151611468604086018261139b565b506060830151848203606086015261148082826113f0565b9150506080830151848203608086015261149a82826113f0565b91505060a083015184820360a08601526114b482826113f0565b91505060c083015184820360c08601526114ce82826113f0565b91505060e083015184820360e08601526114e882826113f0565b91505061010083015184820361010086015261150482826113f0565b91505061012083015184820361012086015261152082826113f0565b9150508091505092915050565b60006115398383611429565b905092915050565b6000602082019050919050565b60006115598261132e565b6115638185611339565b9350836020820285016115758561134a565b8060005b858110156115b15784840389528151611592858261152d565b945061159d83611541565b925060208a01995050600181019050611579565b50829750879550505050505092915050565b600060208201905081810360008301526115dd818461154e565b905092915050565b600080604083850312156115fc576115fb611139565b5b600061160a85828601611164565b925050602061161b85828601611164565b9150509250929050565b60008115159050919050565b61163a81611625565b82525050565b60006020820190506116556000830184611631565b92915050565b600080600080600080600080610100898b03121561167c5761167b611139565b5b600061168a8b828c01611164565b985050602089013567ffffffffffffffff8111156116ab576116aa61113e565b5b6116b78b828c01611291565b975050604089013567ffffffffffffffff8111156116d8576116d761113e565b5b6116e48b828c01611291565b965050606089013567ffffffffffffffff8111156117055761170461113e565b5b6117118b828c01611291565b955050608089013567ffffffffffffffff8111156117325761173161113e565b5b61173e8b828c01611291565b94505060a089013567ffffffffffffffff81111561175f5761175e61113e565b5b61176b8b828c01611291565b93505060c089013567ffffffffffffffff81111561178c5761178b61113e565b5b6117988b828c01611291565b92505060e089013567ffffffffffffffff8111156117b9576117b861113e565b5b6117c58b828c01611291565b9150509295985092959890939650565b6117de81611389565b82525050565b60006020820190506117f960008301846117d5565b92915050565b60008060006060848603121561181857611817611139565b5b600061182686828701611164565b935050602061183786828701611164565b925050604061184886828701611164565b9150509250925092565b6000806040838503121561186957611868611139565b5b600061187785828601611164565b925050602083013567ffffffffffffffff8111156118985761189761113e565b5b6118a485828601611291565b9150509250929050565b6118b781611389565b81146118c257600080fd5b50565b6000813590506118d4816118ae565b92915050565b6000602082840312156118f0576118ef611139565b5b60006118fe848285016118c5565b91505092915050565b600082825260208201905092915050565b7f4c697374456d706c6f796565437572736f723a2061646472657373206e6f742060008201527f62656c6f6e677320746f20746865206163636f756e7400000000000000000000602082015250565b6000611974603683611907565b915061197f82611918565b604082019050919050565b600060208201905081810360008301526119a381611967565b9050919050565b7f4c697374456d706c6f796565437572736f723a206964206973206e6f7420626560008201527f6c6f6e6720746f20616464726573730000000000000000000000000000000000602082015250565b6000611a06602f83611907565b9150611a11826119aa565b604082019050919050565b60006020820190508181036000830152611a35816119f9565b9050919050565b7f456d706c6f79656520536b696c6c20437572736f723a20616c7265616479206560008201527f78697374656420736b696c6c0000000000000000000000000000000000000000602082015250565b6000611a98602c83611907565b9150611aa382611a3c565b604082019050919050565b60006020820190508181036000830152611ac781611a8b565b9050919050565b6000608083016000830151611ae6600086018261135a565b506020830151611af9602086018261135a565b5060408301518482036040860152611b1182826113f0565b9150506060830151611b26606086018261135a565b508091505092915050565b60006020820190508181036000830152611b4b8184611ace565b905092915050565b600067ffffffffffffffff821115611b6e57611b6d611194565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600081519050611b9d8161114d565b92915050565b600081519050611bb2816118ae565b92915050565b6000611bcb611bc68461120f565b6111f4565b905082815260208101848484011115611be757611be661117e565b5b611bf28482856113c6565b509392505050565b600082601f830112611c0f57611c0e611179565b5b8151611c1f848260208601611bb8565b91505092915050565b60006101408284031215611c3f57611c3e611b84565b5b611c4a6101406111f4565b90506000611c5a84828501611b8e565b6000830152506020611c6e84828501611b8e565b6020830152506040611c8284828501611ba3565b604083015250606082015167ffffffffffffffff811115611ca657611ca5611b89565b5b611cb284828501611bfa565b606083015250608082015167ffffffffffffffff811115611cd657611cd5611b89565b5b611ce284828501611bfa565b60808301525060a082015167ffffffffffffffff811115611d0657611d05611b89565b5b611d1284828501611bfa565b60a08301525060c082015167ffffffffffffffff811115611d3657611d35611b89565b5b611d4284828501611bfa565b60c08301525060e082015167ffffffffffffffff811115611d6657611d65611b89565b5b611d7284828501611bfa565b60e08301525061010082015167ffffffffffffffff811115611d9757611d96611b89565b5b611da384828501611bfa565b6101008301525061012082015167ffffffffffffffff811115611dc957611dc8611b89565b5b611dd584828501611bfa565b6101208301525092915050565b6000611df5611df084611b53565b6111f4565b90508083825260208201905060208402830185811115611e1857611e17611b7f565b5b835b81811015611e5f57805167ffffffffffffffff811115611e3d57611e3c611179565b5b808601611e4a8982611c28565b85526020850194505050602081019050611e1a565b5050509392505050565b600082601f830112611e7e57611e7d611179565b5b8151611e8e848260208601611de2565b91505092915050565b600060208284031215611ead57611eac611139565b5b600082015167ffffffffffffffff811115611ecb57611eca61113e565b5b611ed784828501611e69565b91505092915050565b600067ffffffffffffffff821115611efb57611efa611194565b5b602082029050602081019050919050565b600060c08284031215611f2257611f21611b84565b5b611f2c60c06111f4565b90506000611f3c84828501611b8e565b6000830152506020611f5084828501611b8e565b6020830152506040611f6484828501611b8e565b6040830152506060611f7884828501611b8e565b6060830152506080611f8c84828501611b8e565b60808301525060a0611fa084828501611b8e565b60a08301525092915050565b6000611fbf611fba84611ee0565b6111f4565b90508083825260208201905060c08402830185811115611fe257611fe1611b7f565b5b835b8181101561200b5780611ff78882611f0c565b84526020840193505060c081019050611fe4565b5050509392505050565b600082601f83011261202a57612029611179565b5b815161203a848260208601611fac565b91505092915050565b60006020828403121561205957612058611139565b5b600082015167ffffffffffffffff8111156120775761207661113e565b5b61208384828501612015565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120f582611143565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612127576121266120bb565b5b600182019050919050565b61213b81611143565b82525050565b60006020820190506121566000830184612132565b92915050565b600060c0828403121561217257612171611139565b5b600061218084828501611f0c565b91505092915050565b7f4c697374456d706c6f796565437572736f723a20616c7265616479206578697360008201527f746564206163636f756e74000000000000000000000000000000000000000000602082015250565b60006121e5602b83611907565b91506121f082612189565b604082019050919050565b60006020820190508181036000830152612214816121d8565b9050919050565b600061014083016000830151612234600086018261135a565b506020830151612247602086018261135a565b50604083015161225a604086018261139b565b506060830151848203606086015261227282826113f0565b9150506080830151848203608086015261228c82826113f0565b91505060a083015184820360a08601526122a682826113f0565b91505060c083015184820360c08601526122c082826113f0565b91505060e083015184820360e08601526122da82826113f0565b9150506101008301518482036101008601526122f682826113f0565b91505061012083015184820361012086015261231282826113f0565b9150508091505092915050565b60006020820190508181036000830152612339818461221b565b905092915050565b7f4c697374427573696e6573734170706c79437572736f723a206861642061707060008201527f6c69656400000000000000000000000000000000000000000000000000000000602082015250565b600061239d602483611907565b91506123a882612341565b604082019050919050565b600060208201905081810360008301526123cc81612390565b9050919050565b60c0820160008201516123e9600085018261135a565b5060208201516123fc602085018261135a565b50604082015161240f604085018261135a565b506060820151612422606085018261135a565b506080820151612435608085018261135a565b5060a082015161244860a085018261135a565b50505050565b600060c08201905061246360008301846123d3565b92915050565b6000612474826113aa565b61247e8185611907565b935061248e8185602086016113c6565b61249781611183565b840191505092915050565b60006040820190506124b76000830185612132565b81810360208301526124c98184612469565b90509392505050565b6000602082840312156124e8576124e7611139565b5b60006124f684828501611b8e565b91505092915050565b7f456d706c6f79656520536b696c6c20437572736f723a2072657175657374207360008201527f6b696c6c00000000000000000000000000000000000000000000000000000000602082015250565b600061255b602483611907565b9150612566826124ff565b604082019050919050565b6000602082019050818103600083015261258a8161254e565b9050919050565b60006040820190506125a66000830185612132565b6125b36020830184612132565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612616602683611907565b9150612621826125ba565b604082019050919050565b6000602082019050818103600083015261264581612609565b9050919050565b60006020828403121561266257612661611139565b5b600082015167ffffffffffffffff8111156126805761267f61113e565b5b61268c84828501611c28565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006126cb602083611907565b91506126d682612695565b602082019050919050565b600060208201905081810360008301526126fa816126be565b9050919050565b60006080828403121561271757612716611b84565b5b61272160806111f4565b9050600061273184828501611b8e565b600083015250602061274584828501611b8e565b602083015250604082015167ffffffffffffffff81111561276957612768611b89565b5b61277584828501611bfa565b604083015250606061278984828501611b8e565b60608301525092915050565b6000602082840312156127ab576127aa611139565b5b600082015167ffffffffffffffff8111156127c9576127c861113e565b5b6127d584828501612701565b9150509291505056fea2646970667358221220ebefd88ecb2bba283cd557088ab09a7dfd54c175e5a39fb4dea095e95b372d3764736f6c63430008110033";

type EmployeeControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmployeeControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmployeeController__factory extends ContractFactory {
  constructor(...args: EmployeeControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    listEmployeeAddress: PromiseOrValue<string>,
    listEmployeeSkillAddress: PromiseOrValue<string>,
    listEmployeeApplyAddress: PromiseOrValue<string>,
    listEmployeeAppointmenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EmployeeController> {
    return super.deploy(
      listEmployeeAddress,
      listEmployeeSkillAddress,
      listEmployeeApplyAddress,
      listEmployeeAppointmenAddress,
      overrides || {}
    ) as Promise<EmployeeController>;
  }
  override getDeployTransaction(
    listEmployeeAddress: PromiseOrValue<string>,
    listEmployeeSkillAddress: PromiseOrValue<string>,
    listEmployeeApplyAddress: PromiseOrValue<string>,
    listEmployeeAppointmenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      listEmployeeAddress,
      listEmployeeSkillAddress,
      listEmployeeApplyAddress,
      listEmployeeAppointmenAddress,
      overrides || {}
    );
  }
  override attach(address: string): EmployeeController {
    return super.attach(address) as EmployeeController;
  }
  override connect(signer: Signer): EmployeeController__factory {
    return super.connect(signer) as EmployeeController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmployeeControllerInterface {
    return new utils.Interface(_abi) as EmployeeControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EmployeeController {
    return new Contract(address, _abi, signerOrProvider) as EmployeeController;
  }
}
