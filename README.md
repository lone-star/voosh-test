This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The live code is available here: http://benjamin-michel-vvoosh-test.surge.sh/

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
- Strangely, sometimes loading IMDB images from `.surge.sh` returns 403s.
- The initial loading time is quite long (Since I am doing an HTTP request in order to access the movie list).
  Adding a spinner would greatly improve the UX.
