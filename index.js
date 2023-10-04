// Обозначение массивов в typescript
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var fruits = ["banana", "apple", "pear"];
function toUpperArray(items) {
    return items.map(function (item) { return item.toUpperCase(); });
}
// Фильтр анаграмм
function strToObj(str) {
    var initStr = {};
    for (var i = 0; i < str.length; i++) {
        var currLetter = str[i];
        if (!initStr[currLetter]) {
            initStr[currLetter] = 1;
        }
        else {
            initStr[currLetter] += 1;
        }
    }
    return initStr;
}
function filterAnagrams(word, words) {
    var res = [];
    var inObj = strToObj(word);
    words.forEach(function (item) {
        var initObj = __assign({}, inObj);
        if (word.length !== item.length)
            return;
        for (var i = 0; i < item.length; i++) {
            var letter = item[i];
            // if (!initObj[letter] || --initObj[letter] === -1) return;
            // if (!(--initObj[letter] >= 0)) return;
            if (!(initObj[letter]-- > 0))
                return;
        }
        res.push(item);
    });
    return res;
}
console.log(filterAnagrams("abba", ["bbaa", "aabb", "adda", "aaab"]));
