ifndef BROWSERSTACK_PORT
BROWSERSTACK_PORT=8888
endif

ifndef WEB_PORT
WEB_PORT=3000
endif

# dev:server starts the docker-compose web service
#
# To define another port you can run dev:server as
#
#	WEB_PORT=8000 make dev:server
#
dev\:server:
	@docker-compose run --rm \
		-p $(WEB_PORT):3000 \
		-p $(BROWSERSTACK_PORT):$(BROWSERSTACK_PORT) \
		-e BROWSERSTACK_PORT=$(BROWSERSTACK_PORT) \
		web
.PHONY: dev\:server

# some utility makes
#

npm\:install:
	@docker-compose run --rm npm install
.PHONY: npm\:install

npm\:init:
	@docker-compose run --rm npm init
.PHONY: npm\:init


# setup makes
#

# install-dunb-init installs dumb-init for our docker use, zombies!
install-dumb-init:
	@mkdir -p .bin
	@wget -O .bin/dumb-init \
		https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64
	@sudo chmod +x .bin/dumb-init
.PHONY: install-dumb-init

# setup installs the core stuff to get you going
setup:
	@$(MAKE) -s install-dumb-init
	@$(MAKE) -s npm:install
.PHONY: setup
