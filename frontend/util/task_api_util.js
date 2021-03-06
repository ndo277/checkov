export const fetchTasks = () => {
  return $.ajax({
    url: `api/tasks`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const fetchTask = (id) => {
  return $.ajax({
    url: `api/tasks/${id}`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const createTask = (data) => {
  return $.ajax({
    url: `api/tasks`,
    method: 'POST',
    data: {task: data},
    error: (err) => console.log(err)
  });
};

export const deleteTask = (id) => {
  return $.ajax({
    url: `api/tasks/${id}`,
    method: 'DELETE',
    error: (err) => console.log(err)
  });
};

export const editTask = (data) => {
  return $.ajax({
    url: `api/tasks/${data.id}`,
    method: `PATCH`,
    data: { task: data }
  });
};
