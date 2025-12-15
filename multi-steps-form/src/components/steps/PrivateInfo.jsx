export const PrivateInfo = () => {
  return (
    <div className="flex flex-col  gap-y-3 ">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm text-[#334155]">
          Email <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          placeholder="Your email"
          className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm text-[#334155]">
          Phone number <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          placeholder="Your phone number"
          className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm text-[#334155]">
          Password <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          placeholder="Your password"
          className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm text-[#334155]">
          Confirm password <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          placeholder="Confirm password"
          className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
        />
      </div>
    </div>
  );
};
