json.extract! review, :id, :body, :rating, :author_id, :reef_id, :date


# pass review ids with reef in jbuilder
# normalize reef, review, user slices of state
# create user slice of state in entities slice
# only have reviews in entitites slice
# remove nesting of author in reviews slice 
