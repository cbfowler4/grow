const getUserHabits = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'get'
  });
};
