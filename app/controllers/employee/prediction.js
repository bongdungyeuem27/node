import { PythonShell } from "python-shell";
import _ from "lodash";
import { getContract as getContractEmployee } from "../../contract/employeeController.js";
import { getContract as getContractBusiness } from "../../contract/businessController.js";
import { PYTHON3 } from "../../constant/index.js";
import trimMultipleSpace from "../../helper/trimMultipleSpace.js";

export async function prediction(req, res) {
  const id = req.params.id;
  let listSkills = [];
  await getContractEmployee()
    .then(async (contractEmployee) => {
      await contractEmployee.methods
        .getListSkillOfEmployee(id)
        .call()
        .then((success) => {
          success.map((value, index) => {
            listSkills.push(value["title"]);
          });
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));

  if (listSkills.length == 0) {
    res.status(200);
    res.json({ post: [], status: "success" });
    res.end();
    return;
  }
  let options = {
    mode: "text",
    pythonPath: PYTHON3,
    pythonOptions: ["-u"], // get print results in real-time
    scriptPath: "./tool/employee/prediction", //If you are having python_test.py script in same folder, then it's optional.
    args: [...listSkills], //An argument which can be accessed in the script using sys.argv[1]
  };
  let runner = new Promise(function (resolve, reject) {
    PythonShell.run("KNN.py", options, function (error, success) {
      if (error) reject(error);
      // Results is an array consisting of messages collected during execution
      resolve(success);
    });
  });
  let temp = [];
  await runner
    .then((success) => {
      _.forEach(success, (value, index) => {
        let item = trimMultipleSpace(
          value.replace(/(\[|\/|\]|\(|\)|\'|\")+/g, " ")
        );
        temp.push(item);
      });
    })
    .catch((error) => {
      res.status(500);
      console.error(error);
      res.json({ status: "error" });
      res.end();
      return;
    });
  await getContractBusiness().then(async (contractBusiness) => {
    await contractBusiness.methods
      .getAllPost()
      .call()
      .then(async (success) => {
        let result = [];
        success.map((value, index) => {
          let arrItem = value["job"].split(" ");
          for (let i = 0; i < arrItem.length; i++) {
            for (let j = 0; j < temp.length; j++) {
              if (
                temp[j]
                  .toString()
                  .toLowerCase()
                  .includes(arrItem[i].toString().toLowerCase())
              ) {
                result.push({ ...value });
              }
            }
          }
        });
        result = result.filter(
          (value, index, self) =>
            index ===
            self.findIndex((t) => t.businessPostId === value.businessPostId)
        );

        res.status(200);
        res.json({ post: result, status: "success" });
        res.end();
      })
      .catch((error) => {
        console.error(error);
      });
  });
  res.end();
}
