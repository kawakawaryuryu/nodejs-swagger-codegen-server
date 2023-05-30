'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addExpense = function addExpense (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.addExpense(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExpense = function getExpense (req, res, next) {
  var expenseId = req.swagger.params['expenseId'].value;
  Default.getExpense(expenseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExpenses = function getExpenses (req, res, next) {
  var beginDate = req.swagger.params['beginDate'].value;
  var endDate = req.swagger.params['endDate'].value;
  Default.getExpenses(beginDate,endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResult = function getResult (req, res, next) {
  var resultId = req.swagger.params['resultId'].value;
  Default.getResult(resultId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
