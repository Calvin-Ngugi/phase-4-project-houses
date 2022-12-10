class SingleSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :price, :avg_score, :reviews
end
