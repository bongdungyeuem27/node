import express from "express";
import { getContract as getContractEmployee } from "../../contract/employeeController.js";
import { getContract as getContractBusiness } from "../../contract/businessController.js";

export async function search(req, res) {
  // Extracting the path of file
  try {
    let search = req.query.search;
    let list = [];
    const getEmployee = async () => {
      await getContractEmployee()
        .then(async (contractEmployee) => {
          await contractEmployee.methods
            .getAllProfile()
            .call()
            .then((success) => {
              success.map((value, index) => {
                if (
                  value["name"]
                    .toLowerCase()
                    .includes(search.toString().toLowerCase())
                )
                  list.push({ ...value, typeFor: "employee" });
              });
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.error(error));
    };

    const getBusiness = async () => {
      await getContractBusiness()
        .then(async (contractBusiness) => {
          await contractBusiness.methods
            .getAllProfile()
            .call()
            .then((success) => {
              success.map((value, index) => {
                if (
                  value["name"]
                    .toLowerCase()
                    .includes(search.toString().toLowerCase())
                )
                  list.push({ ...value, typeFor: "business" });
              });
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.error(error));
    };

    await Promise.all([getEmployee(), getBusiness()]).catch((error) =>
      console.log(error)
    );
    res.json(list);
    res.status(200);
    res.end();
    return;
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end("500");
  }
}
