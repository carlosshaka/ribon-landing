json.array!(@letters) do |letter|
  json.extract! letter, :id, :title, :logo, :text_id
  json.url letter_url(letter, format: :json)
end
