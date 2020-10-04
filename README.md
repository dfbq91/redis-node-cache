<h1 align="center">Redis Users 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/diegobtancourt" target="_blank">
    <img alt="Twitter: diegobtancourt" src="https://img.shields.io/twitter/follow/diegobtancourt.svg?style=social" />
  </a>
</p>

> AN app created with Redis and Express just for learning of Redis used for caching. It gets how many repositories a GitHub user has. The first time the request is done, the time is longer that the rest of times, because of after the first request, the response is cached. This project was created following this [tutorial](https://www.youtube.com/watch?v=oaJq1mQ3dFI)

## Install

Make sure you have Redis installed and active:
```
$ sudo service redis status
$ sudo service redis start
```

```
$ git clone https://github.com/dfbq91/redis-node-cache
$ cd redis-users
$ npm install
$ node index.js
```

## Usage
Check Network tab of developer tools of your browser. Type in the browser http://localhost:5000/repos/{githubUsername} and check the time taken in the fist request and compare with the time of next request. The time should be reduced because the request is cached after the fist time.

Example:

![Gif notes application](https://github.com/dfbq91/redis-node-cache/blob/master/redis-node-cache.gif)

## Author

👤 **Diego Betancourt**

* Website: https://www.linkedin.com/in/diegofernandobetancourtquintero/
* Twitter: [@diegobtancourt](https://twitter.com/diegobtancourt)
* Github: [@dfbq91](https://github.com/dfbq91)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_