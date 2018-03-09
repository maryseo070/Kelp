export const fetchReefs = () => {
  return $.ajax({
    method: "GET",
    url: '/api/reefs'
  });
};

export const fetchReef = id => {
  return $.ajax({
    method: "GET",
    url: `/api/reefs/${id}`
  });
};

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);
