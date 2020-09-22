json.extract! @guest, :id, :name, :email
json.errors do
  json.merge! @errors
end

