export const addHabit = (habit) => {
  return $.ajax({
    url: `/api/users/${habit.userId}/habit`,
    method: "post",
    data: habit
  });
};

export const removeHabit = (userId, habitId) => {
  return $.ajax({
    url: `/api/users/${userId}/habit/${habitId}`,
    method: "post",
    data: habit
  });
};
