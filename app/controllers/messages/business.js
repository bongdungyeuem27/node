import { employeeMessages } from "../../../app/models/messages/employeeMessages.js";
import { businessMessages } from "../../../app/models/messages/businessMessages.js";
import _ from "lodash";
import { getContract as getContractBusiness } from "../../contract/businessController.js";
import { getContract as getContractEmployee } from "../../contract/employeeController.js";

export async function getListMessagesByTime(req, res) {
  try {
    await businessMessages
      .find({
        employeeId: req.query.employeeid,
        businessId: req.query.businessid,
        date: {
          $gte: parseInt(req.query.from),
          $lte: parseInt(req.query.to),
        },
      })
      .then((success) => {
        res.status(200).json(success);
      })
      .catch((error) => console.error(error));
  } catch (error) {
    res.status(500).json(error);
  }

  res.end();
}

export async function getRecentlyProfile(req, res) {
  try {
    let temp = [];
    await businessMessages
      .find({
        businessId: req.query.businessid,
      })
      .select("employeeId")
      .then(async (success) => {
        success = success.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.employeeId === value.employeeId)
        );
        for (let i = 0; i < success.length; i++) {
          await getContractEmployee()
            .then(async (contractEmployee) => {
              await contractEmployee.methods
                .getProfile(success[i].employeeId)
                .call()
                .then((profile) => {
                  temp.push({
                    _id: success[i]._id,
                    employeeId: success[i].employeeId,
                    name: profile.name,
                  });
                })
                .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
        }
        res.status(200).json(temp);
      })
      .catch((error) => console.error(error));
  } catch (error) {
    res.status(500).json(error);
  }

  res.end();
}

export const send = async (req, res) => {
  try {
    const newBusinessMessages = new businessMessages({
      businessId: req.body.businessId,
      employeeId: req.body.employeeId,
      content: req.body.content,
      type: true,
      date: new Date().getTime(),
    });
    const newEmployeeMessages = new employeeMessages({
      businessId: req.body.businessId,
      employeeId: req.body.employeeId,
      content: req.body.content,
      type: false,
      date: new Date().getTime(),
    });
    await newBusinessMessages
      .save()
      .then((success) => {
      })
      .catch((error) => console.error(error));
    await newEmployeeMessages
      .save()
      .then((success) => {
      })
      .catch((error) => console.error(error));
    res.status(200).json({ messages: "success" });
  } catch (error) {
    res.status(500).json(error);
  }
  res.end();
};
