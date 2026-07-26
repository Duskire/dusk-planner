import { notStartedData, inProgressData, completedData } from "@/components/taskdata"; 

export default function Taskbox() {
  const listItems = notStartedData.map(task =>
    <li
      key={task.id}
      className="mb-2 p-2 rounded-lg bg-mist-200 border border-gray-400 hover:bg-mist-300"
    >
      <div className="text-sm">{task.tag}</div>
      <div className="font-bold">{task.title}</div>
      <div className="text-sm">Competed: {task.completedTasks}/{task.tasks}</div>
      <div className="text-sm">Due: {task.dueDate}</div>
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}