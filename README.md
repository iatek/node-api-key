node-api-key
============

API key generator for Node.js. Generate, authenticate, store and maintain keys for your RESTful API. This is a little tool for micro software vendors that need to create, authenticate, track and manage use of their APIs.


objects
=======

vendor {vendorId:'00000000',name:'Joe Micro',url:'http://www.joesmicroisv.com',email:'joemicro@joesmicroisv.com',apis:[..]}

api {apiId:'00000000',vendorId:'',name:'Joes REST API',desc:'This is an example API that Joe created to expose functionality',url:'http://developers.joesmicroisv.com',endpoints:[..]}

endpoint {endpointId:'00000000',apiId:'00000000',url:'http://developers.joesmicroisv.com/apiroute',method:'GET'}

key {id:'123jkljkljwerjwe',apiId:'',host:'www.allowedhost.com'}

user {}


methods
========

- Register software vendor (owner of 1 or more APIs)
- 
- Given a vendorId, register a software API to generate a new apiId
- 
- Given a apiId, edit API settings
- 
- Register a user (user of API)
- 
- Given a userId, edit user settings
- 
- Given a userId, generate an key
