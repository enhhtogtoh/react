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
  inputRef,
  handleBrowserClick,
  imageUrl,
  setImageUrl,
  handleImageChange,
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
      <div className="mt-8 flex flex-col gap-3 mb-20">
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
        <div className="flex">
          <div
            onClick={handleBrowserClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`w-full h-45 rounded-md bg-[#7F7F800D] cursor-pointer border flex items-center justify-center text-black flex-col  ${
              isDragging
                ? "border-2 border-dashed border-black"
                : "border-2 border-solid border-transparent"
            }`}
          >
            {imageUrl ? (
              <>
                {" "}
                <img
                  src={imageUrl}
                  alt="profile"
                  className="w-full h-full object-cover rounded-md"
                />
              </>
            ) : (
              <>
                <img src="/icon@2.svg" alt="upload" className="w-6 h-6 mb-2" />
                <p className="text-sm text-gray-500">Browse or Drop Image</p>
              </>
            )}
          </div>
          {imageUrl && (
            <button
              type="button"
              onClick={clearImage}
              className=" absolute  bg-black w-7 h-7 rounded-full flex items-center justify-center shadow text-white cursor-pointer left-101 top-73
              "
            >
              ✕
            </button>
          )}
          <input
            type="file"
            hidden
            ref={inputRef}
            onChange={handleImageChange}
            setImageUrl={setImageUrl}
          />{" "}
        </div>
        <ErrorMessage message={formErrors.profile} />
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
