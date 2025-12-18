import { useRef, useState } from "react";
import {
  ContactInfo,
  PrivateInfo,
  ProfileInfo,
  Success,
} from "@/components/steps";
import { initialValues } from "@/constants/initial";
const Home = () => {
  // PHOTO STATE
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState("");

  //STEP VALUE
  const [step, setStep] = useState(0);

  //KEY VALUE
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  //PHOTO DRAGGING
  const [isDragging, setIsDragging] = useState(false);

  // PHOTO CLICK
  const handleBrowserClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleChanges = (event) => {
    const uploadedImage = Array.from(event.target.files).at(0);
    // if (!uploadedImage) return;

    const imageUrl = URL.createObjectURL(uploadedImage);

    setImageUrl(imageUrl);

    setFormValues((previous) => ({ ...previous, profile: imageUrl }));
  };

  //PHOTO CLEAR BUTTON
  const clearImage = () => {
    inputRef.current.value = "";
    setImageUrl("");
    setFormValues((previous) => ({ ...previous, profile: "" }));
  };

  // STEP +
  const totalSteps = 4;
  const handleClick = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  // STEP -
  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // INPUT VALUE
  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormErrors((previous) => ({ ...previous, [name]: "" }));
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const hadnleDrop = (event) => {
    event.preventDefault();
  };
  const handleDragLeave = () => setIsDragging(false);

  const Container = [ContactInfo, PrivateInfo, ProfileInfo, Success][step];

  return (
    <div className="bg-gray-100 w-screen flex justify-center items-center h-screen">
      <div className="bg-white w-120 drop-shadow-md rounded-xl p-8 flex flex-col gap-7 ">
        <Container
          totalSteps={totalSteps}
          step={step}
          handleChange={handleChange}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          handleClick={handleClick}
          handlePrev={handlePrev}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          inputRef={inputRef}
          handleBrowserClick={handleBrowserClick}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          handleChanges={handleChanges}
          clearImage={clearImage}
          handleDragOver={handleDragOver}
          hadnleDrop={hadnleDrop}
          handleDragLeave={handleDragLeave}
        />
      </div>
    </div>
  );
};
export default Home;
