# Node JS
Node js is the opensource javascript runtime enviroment, built on Chrome's V8 JS engine

# Server
server is like a cpu/computer which are located remotely, also a server can represent as a hardware and software in different context

# V8 Engine
V8 is google open source high performance js and web-assembly engine writen in c++, it is used in node js and chrome, it implements ECMAscript and webassembly
V8 can be embedded in any c++ application
→ v8 execute js code into machine level code. `[JS → V8 → MachineCode]`

# ECMAscript
ECMAscript is a standards for scripting languages including js

` Node.js REPL (Read-Eval-Print Loop) `

# globalThis 
it is a outermost scope of js, we can access it from browser as well as our locally(run time enviroment) too

# libuv
libuv is a C library used by Node.js to handle asynchronous operations and communicate with the OS for things like file system, timers, and networking

# require("./path")
using require(), all the code of the module/file wrapped inside a function then executes. that function is not normal function it is **IIFE**, it keeps variables and functions private inside the code.
```
(function xyz(){
    // all work in that module runs inside this...
})();
```
**require, and module are the parameter of this iife**
```
(function xyz(module, require, ...){

    require("./path");

    // write all code...

    module.exports = { xyz };

})();
```

# Thread Pool in Libuv
A group of threads in background used to perform heavy or blocking task, otherwise main thread can be blocked. There are 4 threads for inside libuv

# what happens if 10 fs opration all at once
first 4 fs operations are goes inside thread pool and ocupy, and there is another Queue name waiting queue inside libuv, where remaining 6 operations are waiting, after finishing 1st 4 fs, other 4 are goes there and 2 are waiting...

# what operation performs inside Thread Pool
fs, dns_lookup, crypto operations and users specified input