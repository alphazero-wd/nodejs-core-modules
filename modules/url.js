const myUrl = new URL('http://facebook.com/index.html?id=100&status=active');

// serialized url
console.log(myUrl.href);
// or
console.log(myUrl.toString());

// root domain
console.log(myUrl.host);
// hostname (does not include the port)
console.log(myUrl.hostname);

// pathname (/index.html)
console.log(myUrl.pathname);

// serialized query (everything after the ?)
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);
// add params
myUrl.searchParams.append('user', 'alphazero');
console.log(myUrl.searchParams);
// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
