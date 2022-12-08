class House < ApplicationRecord
    belongs_to :user

    validates :name, :image_url, :price, presence: true 
end
