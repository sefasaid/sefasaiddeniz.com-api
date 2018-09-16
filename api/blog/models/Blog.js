'use strict';

/**
 * Lifecycle callbacks for the `Blog` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  beforeSave: async (model) => {
      var textString = model.title;
      textString = textString.replace(/ /g, "-");
      textString = textString.replace(/</g, "");
      textString = textString.replace(/>/g, "");
      textString = textString.replace(/"/g, "");
      textString = textString.replace(/é/g, "");
      textString = textString.replace(/!/g, "");
      textString = textString.replace(/'/, "");
      textString = textString.replace(/£/, "");
      textString = textString.replace(/^/, "");
      textString = textString.replace(/#/, "");
      textString = textString.replace(/$/, "");
      textString = textString.replace(/\+/g, "");
      textString = textString.replace(/%/g, "");
      textString = textString.replace(/½/g, "");
      textString = textString.replace(/&/g, "");
      textString = textString.replace(/\//g, "");
      textString = textString.replace(/{/g, "");
      textString = textString.replace(/\(/g, "");
      textString = textString.replace(/\[/g, "");
      textString = textString.replace(/\)/g, "");
      textString = textString.replace(/]/g, "");
      textString = textString.replace(/=/g, "");
      textString = textString.replace(/}/g, "");
      textString = textString.replace(/\?/g, "");
      textString = textString.replace(/\*/g, "");
      textString = textString.replace(/@/g, "");
      textString = textString.replace(/€/g, "");
      textString = textString.replace(/~/g, "");
      textString = textString.replace(/æ/g, "");
      textString = textString.replace(/ß/g, "");
      textString = textString.replace(/;/g, "");
      textString = textString.replace(/,/g, "");
      textString = textString.replace(/`/g, "");
      textString = textString.replace(/|/g, "");
      textString = textString.replace(/\./g, "");
      textString = textString.replace(/:/g, "");
      textString = textString.replace(/İ/g, "i");
      textString = textString.replace(/I/g, "i");
      textString = textString.replace(/ı/g, "i");
      textString = textString.replace(/ğ/g, "g");
      textString = textString.replace(/Ğ/g, "g");
      textString = textString.replace(/ü/g, "u");
      textString = textString.replace(/Ü/g, "u");
      textString = textString.replace(/ş/g, "s");
      textString = textString.replace(/Ş/g, "s");
      textString = textString.replace(/ö/g, "o");
      textString = textString.replace(/Ö/g, "o");
      textString = textString.replace(/ç/g, "c");
      textString = textString.replace(/Ç/g, "c");
      textString = textString.replace(/--/g, "-");
      textString = textString.replace(/---/g, "-");
      textString = textString.replace(/----/g, "-");
      textString = textString.replace(/----/g, "-");
      model.sef = textString;
    },

    // After saving a value.
    // Fired after an `insert` or `update` query.
    // afterSave: async (model, result) => {},

    // Before fetching all values.
    // Fired before a `fetchAll` operation.
    // beforeFetchAll: async (model) => {},

    // After fetching all values.
    // Fired after a `fetchAll` operation.
    // afterFetchAll: async (model, results) => {},

    // Fired before a `fetch` operation.
    // beforeFetch: async (model) => {},

    // After fetching a value.
    // Fired after a `fetch` operation.
    // afterFetch: async (model, result) => {},

    // Before creating a value.
    // Fired before an `insert` query.
    // beforeCreate: async (model) => {},

    // After creating a value.
    // Fired after an `insert` query.
    // afterCreate: async (model, result) => {},

    // Before updating a value.
    // Fired before an `update` query.
    // beforeUpdate: async (model) => {},

    // After updating a value.
    // Fired after an `update` query.
    // afterUpdate: async (model, result) => {},

    // Before destroying a value.
    // Fired before a `delete` query.
    // beforeDestroy: async (model) => {},

    // After destroying a value.
    // Fired after a `delete` query.
    // afterDestroy: async (model, result) => {}
};
