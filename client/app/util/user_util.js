export const getUserInfo = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'get'
  });
};
