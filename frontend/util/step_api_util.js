export const fetchSteps = (taskId) => {
  return $.ajax({
    url: `api/tasks/${taskId}/steps`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const createStep = (data) => {
  return $.ajax({
    url: `api/tasks/${data.task_id}/steps`,
    method: 'POST',
    data: { step: data },
    error: (err) => console.log(err)
  });
};

export const deleteStep = (id) => {
  return $.ajax({
    url: `api/steps/${id}`,
    method: 'DELETE',
    error: (err) => console.log(err)
  });
};

export const editStep = (data) => {
  return $.ajax({
    url: `api/steps/${data.id}`,
    method: `PATCH`,
    data: { step: data }
  });
};