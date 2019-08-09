export const fetchTasks = () => {
  return $.ajax({
    url: `api/tasks`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const createTask = (data) => {
  return $.ajax({
    url: `api/tasks`,
    method: 'POST',
    data: data,
    error: (err) => console.log(err)
  });
};

