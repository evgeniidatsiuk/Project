class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question
  has_many :comments, as: :object

  def url
    question.url + '/#answer_' + id.to_s
  end
end