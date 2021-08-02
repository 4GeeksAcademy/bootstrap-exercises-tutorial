const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

jest.dontMock("fs");

describe("All the tests should pass", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();

    });
    afterEach(() => {
        jest.resetModules();
    });
    it("You should not change or delete the existing elements in the head tag", function () {

        let meta1=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta c")
        let meta2=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta n")
        let title=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<title")

        expect(meta1).not.toBe(-1)
        expect(meta2).not.toBe(-1)
        expect(title).not.toBe(-1)
    })
});

describe('1. The html code should contain the link tag and 3 Boostrap script tags', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();
    });
    afterEach(() => {jest.resetModules();});
    it('The head tag should contain the link tag for Bootstrap', function () {
        let bodyContent=document.getElementsByTagName("head")[0].innerHTML
        // we can read from the source code
        // console.log(html.toString());
        expect(bodyContent.toString().indexOf(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`)>-1).toBeTruthy();
    });
    it('The body should contain 2 script tags before the body closing tag', function () {
        let myBody=document.querySelector("body").children
        // console.log("body", myBody[0].classList[0])
        expect(myBody.length).toBe(3);
        expect(myBody[0].nodeName).toBe("A");
        // we can read from the source code
        // console.log(html.toString());
        expect(html.toString().indexOf(`<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>`)>-1).toBeTruthy();
        expect(html.toString().indexOf(`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>`)>-1).toBeTruthy();
    });
});