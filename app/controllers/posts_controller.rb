class PostsController < ApplicationController
  
  before_action :authenticate_user!
  
  def index
    
  end

  def find_post
    @post = Post.find(params[:id])
  end


  def new
  @post = Post.new
  end
  
  def create
  @post = current_user.posts.build(post_params)
  if @post.save
  redirect_to root_path
  end
  end
  
  def show
  @post = Post.find_by(id:params[:id])
  end
  
  def edit
  @post = Post.find_by(id:params[:id])
  end
  
  def update
  @post = Post.find_by(params[:id])
  if @post.update(post_params)
  redirect_to root_path
  end
  end
  
  def destroy
  @post = Post.find_by(id:params[:id])
  @post.destroy
  redirect_to root_path
  end
  
  private
  def post_params
  params.require(:post).permit(:user_id,:name,:text)
  end
end
