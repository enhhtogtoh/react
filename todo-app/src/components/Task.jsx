import React from "react";

export const Task = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="task-item  flex justify-between h-[62px] w-[345px] items-center rounded-md mb-5">
      <div className="flex justify-between w-[345] h-[62] items-center p-4 bg-[#F9FAFB] rounded-md">
        <div className="flex items-center gap-[10]  ">
          <input
            type="checkbox"
            checked={task.isCompleted}
            className="h-5 w-5 cursor-pointer "
            onChange={() => toggleCompleted(task.id)}
          />

          <span className={task.isCompleted ? "line-through" : ""}>
            {task.text}
          </span>
        </div>
        <button
          onClick={() => {
            const ok = window.confirm(
              "Are you sure you want to delete this task?"
            );
            if (ok) deleteTask(task.id);
          }}
          className="delete-btn  text-[#EF4444] h-[30px] py-1.5 px-3 rounded-md bg-[#FEF2F2] flex items-center justify-center hover:truncate cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
