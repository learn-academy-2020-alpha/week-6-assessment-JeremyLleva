# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)
class BlogPostsController < ApplicationController
  def index
    # 2) Shows the user all the blog post
    @posts = BlogPost.all
  end

  def show
    # 3) Shows a blog post information based on the id passed through the parameters
    @post = BlogPost.find(params[:id])
  end

  # 4) Creates a new post
  def new
  end

  def create
    # 5) Creates a blog post based on the params passed
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) 
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Creating strong parameters to protect our data
  private
  def blog_post_params
    # 8) A blog post requires a title and content
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) Our blogpost model showing us that we can have mutiple comments per post
class BlogPost < ApplicationRecord
  # 10) Each blog post can have mutiple comments associated with it
  has_many :comments
end
