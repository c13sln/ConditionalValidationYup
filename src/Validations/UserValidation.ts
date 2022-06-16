import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  scales: yup.boolean(),
  password: yup.string().when("passwordNeeded", {
    is: true,
    then: (schema) => schema.min(0),
    otherwise: (schema) => schema.min(5),
  }),
});
