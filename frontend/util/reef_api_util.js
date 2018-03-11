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

export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  });
};

export const createPhoto = (formData) => {
  return $.ajax({
    url: '/api/posts',
    type: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(post) {
      PostActions.receivePost(post);
    }
  });
};
