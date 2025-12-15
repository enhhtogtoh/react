// import { ErrorMessage } from "../ui/ErrorMessage";
export const ContactInfo = () => {
  return (
    <div className="flex flex-col  gap-y-3 ">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm text-[#334155]">
          First name <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          placeholder="Your first name"
          className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm text-[#334155]">
          Last name <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          placeholder="Your last name"
          className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm text-[#334155]">
          Username <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          placeholder="Your username"
          className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
        />
      </div>
    </div>
  );
};
