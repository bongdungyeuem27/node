import { PythonShell } from "python-shell";
import { getContract as getContractEmployee } from "../../contract/employeeController.js";

export const calculate = async (req, res) => {
    try {
        const id = req.params.id;
        const contractEmployee = await getContractEmployee()
        let title = [];
        let level = []
        const data = await contractEmployee.methods.getListSkillOfEmployee(id).call().then(success => {

            success.map((value, index) => {
                title.push(value["title"])
                level.push(Number(value["level"]))
            })
            return { Skill: title, Level: level }
        })

        let options = {
            mode: "text",
            pythonPath: process.env.PYTHON3,
            pythonOptions: ["-u"], // get print results in real-time
            scriptPath: "./tool/employee/joblevel", //If you are having python_test.py script in same folder, then it's optional.
        };

        const pyshell = new PythonShell("calculate.py", options);

        const calculatePromise = async () => {
            return new Promise((resolve, reject) => {
                try {
                    pyshell.stdout.on("data", function (data) {
                        resolve(data);
                    });
                    pyshell.stderr.on("error", (error) => reject(error));
                    // pyshell.stderr.on("close", ()=>)
                    pyshell.send(JSON.stringify(data));
                    pyshell.end(function (error) {
                        if (error) reject(error);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        };
        const result = JSON.parse(await calculatePromise())
        res.json(result);
        res.end();
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    res.end();
};
