import { getContract as getContractBusiness } from "../../contract/businessController.js";
import { getContract as getContractEmployee } from "../../contract/employeeController.js";

export async function getAppointmentByBusinessId(req, res) {
  try {
    const id = req.params.id;
    const from = req.query.from;
    const to = req.query.to;
    let contractEmployee;
    await getContractEmployee()
      .then((success) => {
        contractEmployee = success;
      })
      .catch((error) => console.error(error));
    await getContractBusiness()
      .then(async (contractBusiness) => {
        await contractBusiness.methods
          .getAllAppointment()
          .call()
          .then(async (success) => {
            let temp = [];
            let allPromise = success.map(async (value, index) => {
              if (
                parseInt(value["businessId"]) == id &&
                parseInt(from) <= parseInt(value["time"]) &&
                parseInt(value["time"]) <= parseInt(to)
              ) {
                let item;
                await contractEmployee.methods
                  .getProfile(parseInt(value["employeeId"]))
                  .call()
                  .then((profile) => {
                    item = { ...profile, ...value };
                  })
                  .catch((error) => console.error(error));
                await contractBusiness.methods
                  .getApply(parseInt(item.applyId))
                  .call()
                  .then(async (apply) => {
                    await contractBusiness.methods
                      .getPost(parseInt(apply.postId))
                      .call()
                      .then(async (post) => {
                        item = { ...post, ...item };
                      })
                      .catch((error) => console.error(error));
                  })
                  .catch((error) => console.error(error));
                temp.push(item);
              }
            });
            await Promise.all(allPromise);
            res.status(200).json(temp);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end("500");
  }
}
