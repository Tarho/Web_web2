function cookiePar(cookieStr) {
  if (cookieStr === "") return {};
  let pairs = cookieStr.split(";");
  let splittedPairs = pairs.map((cookie) => cookie.split("="));

  const cookieObj = splittedPairs.reduce(function (obj, cookie) {
    obj[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(
      cookie[1].trim()
    );

    return obj;
  }, {});

  return cookieObj;
}

let cookieString = "username=Thao; uit=UIT; foo=education";

let cookieObj = cookiePar(cookieString);

console.log(`cookie UIT has value ${cookieObj["uit"]}.`);
console.log(`cookie foo has value ${cookieObj["foo"]}.`);
