node-api-key
============

API key generator for Node.js. Generate, validate and maintain keys for your RESTful API.

objects
=======

vendor {}
api {}
user {}
key {}

methods
========

- Register software uendor (owner of 1 or more APIs)
- Given a vendorId, register a software API to generate a new apiId
- Given a apiId, edit API settings
- Register a user (user of API)
- Given a userId, edit user settings
- Given a userId, generate an key
