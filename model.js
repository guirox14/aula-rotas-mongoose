var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

<<<<<<< HEAD
db.on('error', function(err) {// importação do módulo model.js
var Model = require('./model');

var msg = "";
var Controller = {
	create: function(req, res) {
	var dados = {
			name: 'Skol',
			description: 'Mijo de rato',
			alcohol: 4.5,
			price: 3.0,
			category: 'pilsen'
		};

		var model = new Model(dados);

		model.save(function (err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = "Erro: " + err;
			} else {
				console.log("Cerveja inserida.", data);
				msg = "Cerveja inserida. " + data;
			}
			res.end(msg);
		});
	},
	retrieve: function(req, res) {
		var query = {};
		Model.find(query, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = "Erro: " + err;
			} else {
				console.log("listagem: ", data);
				msg = "Listagem: " + data;
			}
			res.end(msg);
		});
	},
	update: function(req, res) {
		var query = {name: /Skol/i};
		var mod = {
			name: 'Brahma',
			alcohol: 4,
			price: 6,
			category: 'pilsen'
		};
		Model.update(query, mod, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = "Erro: " + err;
			} else {
				console.log("Cervejas atualizadas com sucesso: ", data);
				msg = "Cervejas atualizadas com sucesso: " + data;
			}
			res.end(msg);
		});
	},
	delete: function(req, res) {
		var query = {name: /brahma/i};
		Model.remove(query, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = "Erro: " + err;
			} else {
				console.log("Cerveja deletada com sucesso, quantidade: ", data.result);
				msg = "Cerveja deletada com sucesso, quantidade: " + data.result;
			}
			res.end(msg);
		});
	}
};

module.exports = Controller; 
=======
db.on('error', function(err) {
>>>>>>> c1da227ad9643e8f16f1b6b2ac5126a33a7ed241
	console.log('Erro de conexao', err);
});

db.on('open', function() {
	console.log('Conex aberta');
});

db.on('connected', function(err) {
	console.log('Conectado');
});

db.on('disconnected', function(err) {
	console.log('Desconectado');
});

var Schema = mongoose.Schema;

var json_schema = {
	name: {type: String, default: ''},
	description: {type: String, default: ''},
	alcohol: {type: Number, min: 0},
	price: {type: Number, min: 0},
	category: {type: String, default: ''},
	created_at: {type: Date, default: Date.now}
};

var BeerSchema = new Schema(json_schema);

// cria um módulo
module.exports = mongoose.model('Beer', BeerSchema);