install:
	  npm install

start:
	  npx node bin/brain-games.js

publish:
	  npm publish  --dry-run

babel:
	  npx babel src --out-dir dist

lint:
	  npx eslint .
