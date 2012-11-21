var path = require('path'),
    misc = require('./misc'),
	markdown = require('markdown').markdown;

var model = {};

model.serverRoot = path.join(__dirname, 'html');

//model.hostPort = 81;

//model.hostName = 'localhost:' + model.hostPort;
model.hostName = 'radiation.pp.ua';

model.dynamicExt = '.html';

model.indexName = 'index' + model.dynamicExt;

model.isDynamicFile = function(file){
    return (path.extname(file) === model.dynamicExt);
};

model.getFsPath = function(rPath){
    return path.join(model.serverRoot, rPath);
};

model.getFileData = function(file){
    return {
        'content': markdown.toHTML(misc.getFile(file)),
        'title': path.basename(file, model.dynamicExt),
        'host': model.hostName
    };
};

model.templateFile = model.getFsPath('/template' + model.dynamicExt);

model.template = misc.getFile(model.templateFile);

module.exports = model;
