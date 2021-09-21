import * as Yup from "yup";

const CreatePlanSchema = Yup.object().shape({
  id: Yup.string("Select an investment plan").required(
    "You haven't selected any plan!"
  ),
  amount: Yup.string("Enter your amount")
    .min(6, "minimum of 100,000 naira")
    .max(10, "maximum of 1,000,000,000 naira")
    .required("Please enter the amount you wish to invest"),
});

export default CreatePlanSchema;
