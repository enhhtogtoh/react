import { Header } from "../layer/Header";
import { validateStepTwo } from "@/utils/validators";
import { ErrorMessage } from "../ui/ErrorMessage";
export const PrivateInfo = ({
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  handleClick,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepTwo(formValues);
    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
  };
  console.log(formErrors);
  return (
    <div>
      <Header />
      <div className="flex flex-col  gap-y-3 mt-8 mb-10">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-[#334155]">
            Email <span className="text-red-600">*</span>
          </p>
          <input
            type="mail"
            onChange={handleChange}
            value={formValues.email}
            name="email"
            placeholder="Your email"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.email ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <ErrorMessage message={formErrors.email} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-[#334155]">
            Phone number <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={formValues.phoneNumber}
            placeholder="Your phone number"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.phoneNumber ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <ErrorMessage message={formErrors.phoneNumber} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-[#334155]">
            Password <span className="text-red-600">*</span>
          </p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
            placeholder="Your password"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.password ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <ErrorMessage message={formErrors.password} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-[#334155]">
            Confirm password <span className="text-red-600">*</span>
          </p>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={formValues.confirmPassword}
            placeholder="Confirm password"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.confirmPassword ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <ErrorMessage message={formErrors.confirmPassword} />
        </div>
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
