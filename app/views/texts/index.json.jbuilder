json.array!(@texts) do |text|
  json.extract! text, :id, :message
  json.url text_url(text, format: :json)
end
