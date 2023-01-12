/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type ProfileStruct = {
  category: PromiseOrValue<BigNumberish>;
  id: PromiseOrValue<BigNumberish>;
  user: PromiseOrValue<string>;
  name: PromiseOrValue<string>;
  phone: PromiseOrValue<string>;
  professional: PromiseOrValue<string>;
  email: PromiseOrValue<string>;
  github: PromiseOrValue<string>;
  linkedin: PromiseOrValue<string>;
  sourceImage: PromiseOrValue<string>;
};

export type ProfileStructOutput = [
  BigNumber,
  BigNumber,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] & {
  category: BigNumber;
  id: BigNumber;
  user: string;
  name: string;
  phone: string;
  professional: string;
  email: string;
  github: string;
  linkedin: string;
  sourceImage: string;
};

export interface EmployeeControllerInterface extends utils.Interface {
  functions: {
    "_checkApplyIdBelongsToEmployeeId(uint256,uint256)": FunctionFragment;
    "_checkExistApply(uint256,uint256)": FunctionFragment;
    "_checkExistEmployeeAccount()": FunctionFragment;
    "_checkExistSkill(uint256,string)": FunctionFragment;
    "_checkIdBelongsToPostId(uint256,uint256)": FunctionFragment;
    "addEmployee(uint256,string,string,string,string,string,string,string)": FunctionFragment;
    "addSkill(uint256,string,uint256)": FunctionFragment;
    "applyPost(uint256,uint256,uint256)": FunctionFragment;
    "destroy()": FunctionFragment;
    "editSkill(uint256,uint256,uint256)": FunctionFragment;
    "getAllProfile()": FunctionFragment;
    "owner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_checkApplyIdBelongsToEmployeeId"
      | "_checkExistApply"
      | "_checkExistEmployeeAccount"
      | "_checkExistSkill"
      | "_checkIdBelongsToPostId"
      | "addEmployee"
      | "addSkill"
      | "applyPost"
      | "destroy"
      | "editSkill"
      | "getAllProfile"
      | "owner"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_checkApplyIdBelongsToEmployeeId",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_checkExistApply",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_checkExistEmployeeAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_checkExistSkill",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_checkIdBelongsToPostId",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addEmployee",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addSkill",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "applyPost",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "destroy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "editSkill",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllProfile",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_checkApplyIdBelongsToEmployeeId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_checkExistApply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_checkExistEmployeeAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_checkExistSkill",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_checkIdBelongsToPostId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addEmployee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addSkill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "applyPost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "editSkill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface EmployeeController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EmployeeControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _checkApplyIdBelongsToEmployeeId(
      id: PromiseOrValue<BigNumberish>,
      employeeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _checkExistApply(
      employeeId: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _checkExistEmployeeAccount(overrides?: CallOverrides): Promise<[boolean]>;

    _checkExistSkill(
      employeeId: PromiseOrValue<BigNumberish>,
      title: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _checkIdBelongsToPostId(
      id: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    addEmployee(
      category: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      phone: PromiseOrValue<string>,
      professional: PromiseOrValue<string>,
      email: PromiseOrValue<string>,
      github: PromiseOrValue<string>,
      linkedin: PromiseOrValue<string>,
      sourceImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addSkill(
      id: PromiseOrValue<BigNumberish>,
      title: PromiseOrValue<string>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    applyPost(
      employeeId: PromiseOrValue<BigNumberish>,
      businessId: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    editSkill(
      id: PromiseOrValue<BigNumberish>,
      skillId: PromiseOrValue<BigNumberish>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllProfile(overrides?: CallOverrides): Promise<[ProfileStructOutput[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _checkApplyIdBelongsToEmployeeId(
    id: PromiseOrValue<BigNumberish>,
    employeeId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  _checkExistApply(
    employeeId: PromiseOrValue<BigNumberish>,
    postId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  _checkExistEmployeeAccount(overrides?: CallOverrides): Promise<boolean>;

  _checkExistSkill(
    employeeId: PromiseOrValue<BigNumberish>,
    title: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  _checkIdBelongsToPostId(
    id: PromiseOrValue<BigNumberish>,
    postId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  addEmployee(
    category: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    phone: PromiseOrValue<string>,
    professional: PromiseOrValue<string>,
    email: PromiseOrValue<string>,
    github: PromiseOrValue<string>,
    linkedin: PromiseOrValue<string>,
    sourceImage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addSkill(
    id: PromiseOrValue<BigNumberish>,
    title: PromiseOrValue<string>,
    level: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  applyPost(
    employeeId: PromiseOrValue<BigNumberish>,
    businessId: PromiseOrValue<BigNumberish>,
    postId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  destroy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  editSkill(
    id: PromiseOrValue<BigNumberish>,
    skillId: PromiseOrValue<BigNumberish>,
    level: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllProfile(overrides?: CallOverrides): Promise<ProfileStructOutput[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _checkApplyIdBelongsToEmployeeId(
      id: PromiseOrValue<BigNumberish>,
      employeeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _checkExistApply(
      employeeId: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _checkExistEmployeeAccount(overrides?: CallOverrides): Promise<boolean>;

    _checkExistSkill(
      employeeId: PromiseOrValue<BigNumberish>,
      title: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _checkIdBelongsToPostId(
      id: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addEmployee(
      category: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      phone: PromiseOrValue<string>,
      professional: PromiseOrValue<string>,
      email: PromiseOrValue<string>,
      github: PromiseOrValue<string>,
      linkedin: PromiseOrValue<string>,
      sourceImage: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addSkill(
      id: PromiseOrValue<BigNumberish>,
      title: PromiseOrValue<string>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    applyPost(
      employeeId: PromiseOrValue<BigNumberish>,
      businessId: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    destroy(overrides?: CallOverrides): Promise<void>;

    editSkill(
      id: PromiseOrValue<BigNumberish>,
      skillId: PromiseOrValue<BigNumberish>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllProfile(overrides?: CallOverrides): Promise<ProfileStructOutput[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _checkApplyIdBelongsToEmployeeId(
      id: PromiseOrValue<BigNumberish>,
      employeeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _checkExistApply(
      employeeId: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _checkExistEmployeeAccount(overrides?: CallOverrides): Promise<BigNumber>;

    _checkExistSkill(
      employeeId: PromiseOrValue<BigNumberish>,
      title: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _checkIdBelongsToPostId(
      id: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addEmployee(
      category: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      phone: PromiseOrValue<string>,
      professional: PromiseOrValue<string>,
      email: PromiseOrValue<string>,
      github: PromiseOrValue<string>,
      linkedin: PromiseOrValue<string>,
      sourceImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addSkill(
      id: PromiseOrValue<BigNumberish>,
      title: PromiseOrValue<string>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    applyPost(
      employeeId: PromiseOrValue<BigNumberish>,
      businessId: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    editSkill(
      id: PromiseOrValue<BigNumberish>,
      skillId: PromiseOrValue<BigNumberish>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllProfile(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _checkApplyIdBelongsToEmployeeId(
      id: PromiseOrValue<BigNumberish>,
      employeeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _checkExistApply(
      employeeId: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _checkExistEmployeeAccount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _checkExistSkill(
      employeeId: PromiseOrValue<BigNumberish>,
      title: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _checkIdBelongsToPostId(
      id: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addEmployee(
      category: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      phone: PromiseOrValue<string>,
      professional: PromiseOrValue<string>,
      email: PromiseOrValue<string>,
      github: PromiseOrValue<string>,
      linkedin: PromiseOrValue<string>,
      sourceImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addSkill(
      id: PromiseOrValue<BigNumberish>,
      title: PromiseOrValue<string>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    applyPost(
      employeeId: PromiseOrValue<BigNumberish>,
      businessId: PromiseOrValue<BigNumberish>,
      postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    editSkill(
      id: PromiseOrValue<BigNumberish>,
      skillId: PromiseOrValue<BigNumberish>,
      level: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
