const tasks = [
  { title: 'Card 1', tag: 'Tag', task1: 'Task 1', task2: 'Task 2', id: '1' },
  { title: 'Card 2', tag: 'Tag', task1: 'Task 1', task2: 'Task 2', id: '2' },
  { title: 'Card 3', tag: 'Tag', task1: 'Task 1', task2: 'Task 2', id: '3' },
  { title: 'Card 4', tag: 'Tag', task1: 'Task 1', task2: 'Task 2', id: '4' },
];

export default function Taskbox() {
  const listItems = tasks.map(task =>
    <li
      key={task.id}
      className="h-32 mb-2 p-2 rounded-lg bg-mist-200 border border-gray-400 hover:bg-mist-300"
    >
      <div className="text-sm">{task.tag}</div>
      <div className="font-bold">{task.title}</div>
      <div className="text-sm">{task.task1}</div>
      <div className="text-sm">{task.task2}</div>
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}