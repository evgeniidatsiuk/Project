source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.6'
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

gem 'sprockets-rails', require: 'sprockets/railtie'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# for administrating
gem 'activeadmin'
# user registrations
gem 'devise'
# avatars
gem 'paperclip', '~> 6.0.0'
# text edit
gem 'tinymce-rails'
# css
gem 'bootstrap', '~> 4.3.1'
gem 'carrierwave', '~> 1.0'
gem 'jquery-rails'

# для оптимізаціїї і обробки коду
# gem 'rubocop', require: false #для атома але не потрібне якщо є встроєні
# gem 'rbeautify' #для атома але не потрібне якщо є встроєні
# call 'brakeman' , in console, found secure problem
gem 'brakeman', require: false, group: :development
# call 'rails_best_practices . -c config/rails_best_practices.yml' in console, found best practices error
gem 'rails_best_practices', group: :development
# call 'rubycritic' or last version for url "//home/rik/sites/Project/tmp/rubycritic/overview.html"
gem 'rubycritic', require: false, group: :development

# Вибір країни
# gem 'country_select'
# По-сторінковий вивід
gem 'will_paginate', '~> 3.1.0'
gem 'will_paginate-bootstrap4' # шаблон під bootstrap
# вивід об'єктів відновідно до знаходження в масиві пошуку
# gem 'order_as_specified'

# search gem думаю напишу сам
# gem 'ransack'
gem 'elasticsearch-model'
gem 'elasticsearch-rails'
# tests show
gem 'simplecov', require: false, group: :test
gem 'simplecov-rcov'
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  # gem 'byebug', platforms: %i[mri mingw x64_mingw] #потрібно ознайомитись якщо плануєм використовувати
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  # for tests
  gem 'factory_bot_rails'
  gem 'rails-controller-testing'
  gem 'rspec-rails', '~> 3.7'
  gem 'shoulda-matchers', '~> 3.1'
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
group :production do
  gem 'pg'
  gem 'rails_12factor'
end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
