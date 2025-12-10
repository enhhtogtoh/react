import { useState } from "react";

export const Form = ({ updateTaskList, taskListValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    updateTaskList([newTask, ...taskListValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className=" flex gap-2.5">
      <input
        type="text"
        className="task-input form py-2 px-4 border rounded-md h-10 w-[280px] border-[#F9F9F9] text-sm"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="px-3 py-1 rounded-md border transition bg-[#3C82F6] border-none text-white hover:cursor-pointer text-sm">
        Add
      </button>
    </form>
  );
};
