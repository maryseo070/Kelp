export const fetchReefs = reefs => {
  return $.ajax({
    method: "GET",
    url: '/api/reefs',
    data: {reefs}
  });
};

export const fetchReef = id => {
  return $.ajax({
    method: "GET",
    url: `/api/reefs/${id}`
  });
};


//will need createReview 
