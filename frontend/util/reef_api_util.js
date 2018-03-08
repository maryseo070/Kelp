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


//will need createReview
