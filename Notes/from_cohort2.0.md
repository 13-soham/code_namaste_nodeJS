ECMAscript => it is a official standard for JS.

JavaScript => it is widly known and used implementation of ECMAscript. 

# DOM, web APIs(setTimeout, fs.readfile etc) is not defined by JS.

V8 engine act as a compiler for JS, but this encludes compiler, interpreter, and runtime enviroment to execute the JS efficiently.

some people took out the V8 engine, add some Backend(filesystem reads) on top of it and create a new runtime that's called node.js

use case of Node.js
1) create clis.
2) create a video player.
3) create a game.
4) *create a HTTP server*

Bun => Bun is morden JS runtime like Node.js but with faster and better performance.

HTTP => Hyper Text Transfer Protocol. 
1) It is a protocol defines for machines to communicate each other.
2) Specifically for website it is used to talk frontend to backend part in a most common way. 

in the end, client throwing some information to the server, server do something with that information and server responding back to the final result.
its like function where, rather than calling a function using its name, client uses a URL.

Things client needs to worry about...
HTTP : client side =>
1) Protocol (HTTP/ HTTPS)
2) Adderss (URL/ IP/ PORT)
3) Headers Body Query Parameters
4) Method : GET, POST, PUT, DELETE

HTTP : server side =>
1) Response Body
2) Response Headers
3) status codes

    # 200 => everything is OK
    # 400 => Bad request
    # 404 => page/ route not found
    # 403 => Authentication issue
    # 500 => Internal server error
    # 505 => HTTP version not supported

example : "https://chat.openai.com/backend-api/conversation"
here, <https:> => Protocol <chat.openai.com> => URL </backend-api/conversation> => Route

Things that happen in browser when fire a request =>
1) Browser parses the URL
2) Does a DNS Lookup (converts the URL to an IP)
3) Establishes a connection to the IP (does handshake... OSI model)

DNS(Domain Name Service) Resolution :
=> URL map to an IP, if u ever buy an URL you will need to point it of that ur server's IP.

Things that happen on your server after the request is received =>
1) Get the Inputs (route, body, headers)
2) Do some Logic to the Input body, calculate the input
3) return the output body, headers and status code

Library that use here to create HTTP server => Express

Run in VS Code =>
1) *npm init -y*
2) *create index.js*
3) *write, const Express = require("express");*
4) *npm install express*

GET Request => You want to retrieve data (u need to get some thing from the server).

POST Request => You want to send new data to the server (u need to post/write thing to the server).

PUT Request => You want to update existing data on the server(u need to update some existing thing to the server).

DELETE Request => You want to remove something from the server(u need to delete some thing from the server).  

# fs vs express =>
[fs_is_a_library_that_gives_high_level_construct_to_do_filesystem_stuff_(read_from_a_file,_write_to_a_file_etc.)]
[express_is_a_library_that_gives_high_level_construct_to_create_http-servers]

# TCP and UDP

TCP(Transmission Control Protocol) is responsible for breaking data into packets. It ensures relaible data transmission by handling packet ordering and error correction.
This Protocol used in => 
1) Web Browsing, Emails, File transfer etc.

.....**TCP connection establish through 3 way handshake =>**
1) SYN => client send the request to start communication.
2) SYN-ACK => Server Acknowledge the request abd responds.
3) ACK => Client confirm the connection, .... data transfer begins.

UDP(User Datagram Protocol) is a connection less protocol that priortizes speed over reliability. used in real time applications
1) video call, gaming etc.

UDP does not do handshake, Packets are sent independently without waiting for confirmation

Mordern Protocol used combination of UDP and TCP to optimize performance and reliability.

3 types of HTTP protocol => HTTP 1.1, HTTP 2.0 [TCP base], HTTP 3.0 [QUIC (quick UDP internet Connections) based]

**HTTPS adds SSL/TLS encryption to HTTP**

# Proxy and VPN

1) Proxy : *A proxy is like a middleman that forwards my requests to the internet, helping me bypass restrictions (like ISP rules or geo-blocks). But it doesn't encrypt my data — so others can still see my data.*

2) VPN : *it is virtual private network also acts like a middleman, but it encrypts my internet traffic. So even my ISP or hackers can’t read the data I send or receive.*

Reverse Proxy => Instead of the client (like browser) directly talking to the actual server, the reverse proxy stands in between and takes the request first, then decides how and where to send it. Basically it hides the server's identity.