class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :score, :house_id, :user_id
end
