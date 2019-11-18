const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function reverseShuffleMerge(s) {
    var { dict, skipDict } = buildDictionary(s);
    var charList = [];
    s.split('').reverse().forEach((c) => {
        if (charList.length === 0) {
            charList.push(c);
            dict[c]--;
        } else {
            if (dict[c] == 0) {
                skipDict[c]--;
            } else {
                while (charList.length > 0) {
                    let last = charList[charList.length - 1];
                    if (c < last && skipDict[last] > 0) {
                        skipDict[last]--;
                        dict[last]++;
                        charList.length--;
                    } else {
                        break;
                    }
                }
                charList.push(c);
                dict[c]--;
            }
        }
    });
    return charList.join('');
}

function buildDictionary(s) {
    let dict = {};
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (dict[char] == undefined) {
            dict[char] = 0.5;
        } else {
            dict[char] += 0.5;
        }
    }
    return { dict, skipDict: { ...dict } }
}