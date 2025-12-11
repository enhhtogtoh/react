import React from "react";
import { Task } from "@/components/Task";
export const Summary = ({ handleClearCompletedTasks, taskListValue }) => {
  const completedCount = taskListValue.filter(
    (task) => task.isCompleted
  ).length;
  const totalCount = taskListValue.length;

  return (
    <div className="summary flex justify-between items-center  text-sm text-gray-600 border-t border-gray-100  mb-4">
      <span className="mt-4">
        {" "}
        {completedCount} of {totalCount} task completed
      </span>

      <button
        onClick={handleClearCompletedTasks}
        className="clear text-[#EF4444] hover:truncate cursor-pointer mt-4"
      >
        Clear Completed
      </button>
    </div>
  );
};
