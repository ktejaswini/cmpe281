var express = require('express');
var http = require('http');
var Client = require('node-rest-client').Client;

client = new Client();


client.get("http://life.cfapps.io/gumballMachine", function(data, response){
            // parsed response body as js object
            console.log(data);
            // raw response
            console.log(response);
        });
