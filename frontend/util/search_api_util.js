export const searchReefs = (query) => {
  return $.ajax({
    url: '/api/reefs/search',
    dataType: 'json',
    method: "GET",
    data: {query}
  });
};
