export const Input = () => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full h-11 rounded-md border p-3 outline-none
        ${
          error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-black`}
    />
  );
};
