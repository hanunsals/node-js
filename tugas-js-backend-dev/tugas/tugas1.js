function taskSummary(task) {
    return `Task: ${task.title}, Description: ${task.description}, Completed: ${task.isDone ? "Yes" : "No"}`;
  }
  
  const task = {
    title: "Tugas 2",
    description: "Kerjakan Sekarang!",
    isDone: false,
  };
  
  console.log(taskSummary(task));
  