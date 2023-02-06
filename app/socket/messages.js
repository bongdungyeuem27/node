import { Server } from "socket.io";
import { employeeMessages } from "../models/messages/employeeMessages.js";
import { businessMessages } from "../models/messages/businessMessages.js";

export async function employeeSend(data) {
  try {
    let employeeResult, businessResult;
    const newEmployeeMessages = new employeeMessages({
      ...data,
      type: true,
      date: new Date().getTime(),
    });
    const newBusinessMessages = new businessMessages({
      ...data,
      type: false,
      date: new Date().getTime(),
    });
    await newEmployeeMessages
      .save()
      .then((success) => {
        employeeResult = success;
      })
      .catch((error) => console.error(error));
    await newBusinessMessages
      .save()
      .then((success) => {
        businessResult = success;
      })
      .catch((error) => console.error(error));
    return {
      _idEmployee: employeeResult._id,
      _idBusiness: businessResult._id,
      content: data.content,
      date: new Date().getTime(),
    };
  } catch (error) {
    console.error(error);
  }
}

export async function businessSend(data) {
  try {
    let employeeResult, businessResult;
    const newBusinessMessages = new businessMessages({
      ...data,
      type: true,
      date: new Date().getTime(),
    });
    const newEmployeeMessages = new employeeMessages({
      ...data,
      type: false,
      date: new Date().getTime(),
    });
    await newBusinessMessages
      .save()
      .then((success) => {
        businessResult = success;
      })
      .catch((error) => console.error(error));
    await newEmployeeMessages
      .save()
      .then((success) => {
        employeeResult = success;
      })
      .catch((error) => console.error(error));

    return {
      _idEmployee: employeeResult._id,
      _idBusiness: businessResult._id,
      content: data.content,
      date: new Date().getTime(),
    };
  } catch (error) {
    console.error(error);
  }
}

export function socketMessages(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    ///Handle khi có connect từ client tới
    console.log("New messages connection" + socket.id);

    socket.on("employeeSend", async function (data) {
      await employeeSend(data)
        .then((success) => {
          io.emit("businessRecive" + data.businessId, {
            ...success,
            employeeId: data.employeeId,
            businessId: data.businessId,
            type: false,
          });
          io.emit("employeeSendSuccess" + data.employeeId, {
            ...success,
            type: true,
          });
        })
        .catch((error) => console.error(error));
    });

    socket.on("businessSend", async function (data) {
      await businessSend(data)
        .then((success) => {
          io.emit("employeeRecive" + data.employeeId, {
            ...success,
            employeeId: data.employeeId,
            businessId: data.businessId,
            type: false,
          });
          io.emit("businessSendSuccess" + data.businessId, {
            ...success,
            type: true,
          });
        })
        .catch((error) => console.error(error));
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id); // Khi client disconnect thì log ra terminal.
    });
  });
}
