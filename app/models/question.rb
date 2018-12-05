class Question < ApplicationRecord
  belongs_to :user
  has_many :comments, as: :object
  has_many :tags, as: :object
  has_many :answers
  has_one :right_answer, class_name: 'Answer'

  def url
    pp self
    ['', self.class.name.downcase + 's', id.to_s].join('/')
  end

  def all_tags
    tags.map { |tag| Category.find(tag.category_id) }.map(&:name).join(', ')
  end
end