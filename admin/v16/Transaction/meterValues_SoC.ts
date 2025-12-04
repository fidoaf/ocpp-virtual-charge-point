import * as uuid from "uuid";
import { sendAdminCommand } from "../../admin";

const transactionId = Number.parseInt(process.env.TRANSACTION_ID ?? "1");

sendAdminCommand({
  action: "MeterValues",
  messageId: uuid.v4(),
  payload: {
    connectorId: 1,
    transactionId: transactionId,
    meterValue: [
      {
        timestamp: new Date(),
        sampledValue: [
          {
            value: "51.0",
            context: "Sample.Periodic",
            format: "Raw",
            measurand: "SoC",
            unit: "Percent"
          },
        ],
      },
    ],
  },
});
