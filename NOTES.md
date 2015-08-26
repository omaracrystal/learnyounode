## Streams
```
https://www.codeschool.com/blog/2014/07/22/nodejs-streams2-api/

https://github.com/substack/stream-handbook
```
  For ultimate efficiency, especially when dealing with large data sent across the wire, we need to be able to get that data piece by piece, or chunk by chunk. If that happens, we can start manipulating the data as soon as it arrives and keep it from being held in memory all at once. We do that in Node using streams.

  Streams in Node are like channels where data can flow through. They can be different types, but we are going to look at the two most common: readable and writeable.

## Pipe
  When all we do is write data to a Writeable stream as soon as it becomes available on the Readable stream, as in the previous example, then there’s a helper function we can use to pipe these two operations together called…pipe!

  The pipe() function handles all of the event listening and chunk reading behind the scenes for us.

  .pipe() is just a function that takes a readable source stream src and hooks the output to a destination writable stream dst === src.pipe(dst)


## Through
#### through2
```
https://www.npmjs.com/package/through2
```
  A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise

#### through2-map
```
https://www.npmjs.com/package/through2-map
```
  through2-map is a super thin wrapper around through2 that works like Array.prototype.map but for streams.

## UNDERSTANDING CALLBACK FUNCTIONS IN JAVASCRIPT
```
http://recurial.com/programming/understanding-callback-functions-in-javascript/
```

Don’t block the way

Traditionally functions work by taking input in the form of arguments and returning a value using a return statement (ideally a single return statement at the end of the function: one entry point and one exit point). This makes sense. Functions are essentially mappings between input and output.

Javascript gives us an option to do things a bit differently. Rather than wait around for a function to finish by returning a value, we can use callbacks to do it asynchronously. This is useful for things that take a while to finish, like making an AJAX request, because we aren’t holding up the browser. We can keep on doing other things while waiting for the callback to be called. In fact, very often we are required (or, rather, strongly encouraged) to do things asynchronously in Javascript.

Here’s a more comprehensive example that uses AJAX to load an XML file, and uses the call() function to call a callback function in the context of the requested object (meaning that when we call the this keyword inside the callback function it will refer to the requested object):

```
function some_function2(url, callback) {
    var httpRequest; // create our XMLHttpRequest object
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // Internet Explorer is stupid
        httpRequest = new
            ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function() {
        // inline function to check the status
        // of our request
        // this is called on every state change
        if (httpRequest.readyState === 4 &&
                httpRequest.status === 200) {
            callback.call(httpRequest.responseXML);
            // call the callback function
        }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
}
// call the function
some_function2("text.xml", function() {
    console.log(this);
});
```

console.log("this will run before the above callback");
In this example we create the httpRequest object and load an XML file. The typical paradigm of returning a value at the bottom of the function no longer works here. Our request is handled asynchronously, meaning that we start the request and tell it to call our function when it finishes.

We’re using two anonymous functions here. It’s important to remember that we could just as easily be using named functions, but for sake of brevity they’re just written inline. The first anonymous function is run every time there’s a state change in our httpRequest object. We ignore it until the state is 4 (meaning it’s done) and the status is 200 (meaning it was successful). In the real world you’d want to check if the request failed, but we’re assuming the file exists and can be loaded by the browser. This anonymous function is assigned to httpRequest.onreadystatechange, so it is not run right away but rather called every time there’s a state change in our request.

When we finally finish our AJAX request, we not only run the callback function but we use the call() function. This is a different way of calling a callback function. The method we used before of just running the function would work fine here, but I thought it would be worth demonstrating the use of the call() function. Alternatively you could use the apply() function (check below for links to understanding the differences between appy() and call()).

The neat thing about using call() is that we set the context in which the function is executed. This means that when we use the this keyword inside our callback function it refers to whatever we passed as the first argument for call(). In this case, when we refer to this inside our anonymous callback function we are referring to the responseXML from the AJAX request.

Finally, the second console.log statement will run before the first, because the callback isn’t executed until the request is over, and until that happens the rest of the code goes right on ahead and keeps running.


## Apply vs Call

The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is "A for array and C for comma."

Pseudo syntax:

```
theFunction.apply(valueForThis, arrayOfArgs)

theFunction.call(valueForThis, arg1, arg2, ...)
```

Sample code:

```
function theFunction(name, profession) {
    alert("My name is " + name + " and I am a " + profession + ".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
```

 Both can be called on functions, which they run in the context of the first argument. In call the subsequent arguments are passed in to the function as they are, while apply expects the second argument to be an array that it unpacks as arguments for the called function.

 apply is very similar to call(), except for the type of arguments it supports. You can use an arguments array instead of a named set of parameters. With apply, you can use an array literal, for example, fun.apply(this, ['eat', 'bananas']), or an Array object, for example, fun.apply(this, new Array('eat', 'bananas')).

```
 http://hangar.runway7.net/javascript/difference-call-apply

 ```
