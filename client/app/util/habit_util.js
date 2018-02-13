export const addHabit = (habit) => {
  return $.ajax({
    url: `/api/users/${habit.userId}/habit`,
    method: "post",
    data: habit
  });
};
