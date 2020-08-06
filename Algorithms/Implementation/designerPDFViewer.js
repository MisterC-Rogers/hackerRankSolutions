// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    let c = [];
    let height = 0;
      

    for (let i = word.length; i-- > 0;) {
        let code = word.charCodeAt(i) - 97

        if (c.indexOf(code) == -1) {
            c.push(code)

        if (h[code] > height)
            height = h[code]
        }
    }
    
    let totalHeight = height * word.length

    return totalHeight
}

console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 'abc'))
console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7], 'zaba'))