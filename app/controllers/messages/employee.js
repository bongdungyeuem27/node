import { employeeMessages } from "../../../app/models/messages/employeeMessages.js";
import { businessMessages } from "../../../app/models/messages/businessMessages.js";
import _ from "lodash";
import { getContract as getContractBusiness } from "../../contract/businessController.js";
import { getContract as getContractEmployee } from "../../contract/employeeController.js";

export async function send(req, res) {
  try {
    const newEmployeeMessages = new employeeMessages({
      employeeId: req.body.employeeId,
      businessId: req.body.businessId,
      content: req.body.content,
      type: true,
      date: new Date().getTime(),
    });
    const newBusinessMessages = new businessMessages({
      employeeId: req.body.employeeId,
      businessId: req.body.businessId,
      content: req.body.content,
      type: false,
      date: new Date().getTime(),
    });
    await newEmployeeMessages
      .save()
      .then((success) => {})
      .catch((error) => res.status(500).json(error));
    await newBusinessMessages
      .save()
      .then((success) => {})
      .catch((error) => res.status(500).json(error));
    res.status(200);
    res.json({ messages: "success" });
  } catch (error) {
    res.status(500).json(error);
  }
  res.end();
}

export async function getListMessagesByTime(req, res) {
  try {
    await employeeMessages
      .find({
        employeeId: req.query.employeeid,
        businessId: req.query.businessid,
        date: {
          $gte: parseInt(req.query.from),
          $lte: parseInt(req.query.to),
        },
      })
      .then((success) => {
        console.log(success)
        res.status(200).json(success);
      })
      .catch((error) => console.error(error));
  } catch (error) {
    res.status(500).json(error);
  }

  res.end();
}

export async function getPerson(req, res) {
  try {
    let temp = [];
    await employeeMessages
      .find({
        employeeId: req.query.employeeid,
      })
      .select("businessId")
      .then(async (success) => {
        success = success.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.businessId === value.businessId)
        );

        res.status(200).json(success);
      })
      .catch((error) => console.error(error));
  } catch (error) {
    res.status(500).json(error);
  }

  res.end();
}

export async function getRecentlyPage(req, res) {
  try {
    let temp = [];
    let id = req.query.employeeid;
    await employeeMessages
      .find({
        employeeId: id,
      })
      .select("businessId")
      .then(async (success) => {
        temp.push(...success);
      })
      .catch((error) => console.error(error));
    temp.reverse();
    temp = temp.filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (t) => parseInt(t.businessId) === parseInt(value.businessId)
        )
    );
    let result = [];
    for (let i = 0; i < temp.length; i++) {
      await getContractBusiness()
        .then(async (contractBusiness) => {
          await contractBusiness.methods
            .getProfile(temp[i].businessId)
            .call()
            .then((profile) => {
              result.push({
                businessId: parseInt(temp[i].businessId),
                name: profile.name,
              });
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }

  res.end();
}
