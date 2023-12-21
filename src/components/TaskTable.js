import { TaskRow } from "./Tasksrow";
export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((tasks) => (
        <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />
      ));
  };
  return (
    <table className="table table-dark table striped table-bordered border-secondary ">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
