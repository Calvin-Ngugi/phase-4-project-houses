class House < ApplicationRecord
    has_many :reviews

    validates :name, :image_url, :price, presence: true 
end
