This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The live code is available here: http://benjamin-michel-vvoosh-test.surge.sh/

Unfortunately, IMDB issues 403s when loading the images. So you will need to
run the code yourself in order to get the full experience.

## Development environment


#### With Yarn

```
git clone git@github.com:lone-star/voosh-test.git
cd voosh-test
yarn install
yarn start
# navigate to http://localhost:3000/
```

#### With NPM

```
git clone git@github.com:lone-star/voosh-test.git
cd voosh-test
npm install
npm start
# navigate to http://localhost:3000/
```

## Notes

- I had to use https://crossorigin.me/ in order to bypass CORS without having
  to write server-side code.
- The ToyStory image gives 404.
- Strangely, loading IMDB images from `.surge.sh` returns 403s.
