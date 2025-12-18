import { Header } from "../layer/Header";
import { Footer } from "../layer/Footer";
import { validateStepThree } from "@/utils/validators";
import { ErrorMessage } from "../ui/ErrorMessage";
export const ProfileInfo = ({
  handleChange,
  formValues,
  formErrors,
  totalSteps,
  step,
  handleClick,
  setFormErrors,
  handlePrev,
  isDragging,
  // setIsDragging,
  inputRef,
  handleBrowserClick,
  imageUrl,
  setImageUrl,
  handleChanges,
  clearImage,
  handleDrop,
  handleDragOver,
  handleDragLeave,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepThree(formValues);
    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex flex-col gap-2 ">
          <p className="font-semibold text-sm text-[#334155]">
            Date of birth <span className="text-red-600">*</span>
          </p>
          <input
            type="date"
            placeholder="--/--/--"
            name="dateOfBirth"
            onChange={handleChange}
            value={formValues.dateOfBirth}
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.dateOfBirth ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <ErrorMessage message={formErrors.dateOfBirth} />
        </div>
        {/* <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            Profile image <span className="text-red-600">*</span>
          </p>
          <input
            type="file"
            name="profile"
            onChange={handleChange}
            className={`w-full h-45 rounded-md bg-[#7f7f800d] cursor-pointer border ${
              formErrors.profile ? "border-red-500" : "border-[#cbd5e1]"
            }`}
            placeholder="Browser or Drop Image"
          />
          <ErrorMessage message={formErrors.profile} />
        </div> */}
        <div className="flex">
          <div
            onClick={handleBrowserClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`w-full h-45 rounded-md bg-[#7F7F800D] cursor-pointer border flex items-center justify-center text-black  ${
              isDragging
                ? "border-2 border-dashed border-green-500"
                : "border-2 border-solid border-transparent"
            }`}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="image"
                className="w-full h-[180] rounded-md"
              />
            ) : (
              "Browse or Drop Image"
            )}
          </div>
          <button onClick={clearImage} className="w-10 h-10 bg-amber-400">
            x
          </button>
          <input
            type="file"
            hidden
            ref={inputRef}
            onChange={handleChanges}
            setImageUrl={setImageUrl}
          />
        </div>
      </div>
      <Footer
        handleSubmit={handleSubmit}
        totalSteps={totalSteps}
        step={step}
        handlePrev={handlePrev}
      />
    </div>
  );
};
