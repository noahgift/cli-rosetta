setup:
	#assuming Mac
	brew install rbenv ruby-build
	rbenv install 2.4.0
	rbenv global 2.4.0	
	ruby -v
install:
	gem install rubygems-update
	update_rubygems
	gem install trollop
	gem install ruby-lint
lint:
	ruby-lint hello-world.rb