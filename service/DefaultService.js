'use strict';


/**
 * adds a expense
 * 支出を登録する
 *
 * body ExpenseRequest expense object (optional)
 * no response value expected for this operation
 **/
exports.addExpense = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * gets a expense
 * 支出詳細を取得する 
 *
 * expenseId String 
 * returns ExpenseResponse
 **/
exports.getExpense = function(expenseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2019-10-22T00:00:00.000+0000",
  "amount" : 100,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "content" : "おにぎり"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets expenses
 * 支出一覧を取得する
 *
 * beginDate date 開始日 (optional)
 * endDate date 終了日 (optional)
 * returns ExpensesResponse
 **/
exports.getExpenses = function(beginDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expenses" : [ {
    "date" : "2019-10-22T00:00:00.000+0000",
    "amount" : 100,
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "content" : "おにぎり"
  }, {
    "date" : "2019-10-22T00:00:00.000+0000",
    "amount" : 100,
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "content" : "おにぎり"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets Result
 * その月の収支結果を取得する 
 *
 * resultId String 
 * returns ResultResponse
 **/
exports.getResult = function(resultId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expenseGoal" : 5000,
  "balance" : -5000,
  "id" : "2000-01-23",
  "totalExpense" : 10000
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

