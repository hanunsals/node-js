// Membuat object
const task = {
    title: "ini judul kerja-nya",
    description: "ceritain detail pekerjaanya disini",
    isDone: false,
  };
  
  // Spread
  const taskSpread = { ...task };
  console.log("task spread: ", taskSpread);
  
  // Destruct
  const { title, description, isDone } = task;
  console.log("destruct -> title: ", title);
  console.log("destruct -> description: ", description);
  console.log("destruct -> isDone: ", isDone);
  