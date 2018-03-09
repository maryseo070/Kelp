export const fetchReviews = (reefId) => {
  return $.ajax({
    method: "GET",
    url: `/api/reefs/${reefId}/reviews`
  });
};

// export const fetchReview = id => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/reefs/${id}`
//   });
// };
//
// export const createReview = (post) => {
//   return $.ajax({
//     method: "POST",
//     url: '/api/reefs',
//     data: {post}
//   })
// }
