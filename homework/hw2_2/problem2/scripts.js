class TemplateProcessor {
  constructor(template) {
    this.template = template;
  }

  fillIn(dictionary) {
    let result = this.template;

    for (const key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        const pattern = new RegExp(`{{${key}}}`, "g");
        result = result.replace(pattern, dictionary[key]);
      }
    }

    return result;
  }
}

var template =
  "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
var dateTemplate = new TemplateProcessor(template);

var dictionary = { month: "July", day: "1", year: "2016" };
var str = dateTemplate.fillIn(dictionary);

console.log(str); // Output: "My favorite month is July but not the day 1 or the year 2016"

// Case: property doesn't exist in dictionary
var dictionary2 = { day: "1", year: "2016" };

var str2 = dateTemplate.fillIn(dictionary2);

console.log(str2); // Output: "My favorite month is but not the day 1 or the year 2016"
