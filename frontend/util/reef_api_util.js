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
    processData: false,
    contentType: false,
    dataType: 'json',
    data: review
  });
};

export const createPhoto = (formData) => {
  return $.ajax({
    url: '/api/photos',
    type: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
