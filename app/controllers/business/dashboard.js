import { getContract } from "../../contract/businessController.js";
import { STATUS } from "../../constant/apply.js";
export const seen = async (req, res) => {
  const postid = req.params.postid;
  await getContract()
    .then(async (contractBusiness) => {
      await contractBusiness.methods
        .getApplierOfPost(postid)
        .call()
        .then((success) => {
          let result = [];
          success.map((value, index) => {
            if (parseInt(value["status"]) == STATUS.SEEN)
              result.push({ ...value });
          });
          result.reverse();
          res.status(200).json(result);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => console.log(error));

  res.end();
};
export const notseen = async (req, res) => {
  const postid = req.params.postid;
  await getContract()
    .then(async (contractBusiness) => {
      await contractBusiness.methods
        .getApplierOfPost(postid)
        .call()
        .then((success) => {
          let result = [];
          success.map((value, index) => {
            if (parseInt(value["status"]) == STATUS.NEW)
              result.push({ ...value });
          });
          result.reverse();
          res.status(200).json(result);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => console.log(error));

  res.end();
};
export const getApplierOfPost = async (req, res) => {
  const postid = req.params.postid;
  await getContract()
    .then(async (contractBusiness) => {
      await contractBusiness.methods
        .getApplierOfPost(postid)
        .call()
        .then((success) => {
          let result = [];
          success.map((value, index) => {
            result.push({ ...value });
          });
          result.reverse();
          res.status(200).json(result);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => console.log(error));

  res.end();
};
