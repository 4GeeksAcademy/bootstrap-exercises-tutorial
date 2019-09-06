const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the styles should be applied", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();

        //apply the styles from the stylesheet if needed

    });
    afterEach(() => {
        jest.resetModules();
    });

    it("TEST", function () {
        const expectedString=['<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"></link>']
        let studentString=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf('<meta charset="utf-8">')
        let studentString2=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf('>')
        // for (let i=0; i<studentString.length; i++) {console.log("###:", studentString[i])}
        console.log("student:", studentString)
        console.log("student2:", studentString)
        expect(expectedString).toContain(studentString);
    });
    it("The <img> tag has to be removed", function () {
        document.querySelector(
            "head"
        ).innerHTML=`<style>${css.toString()}</style>`;
        expect(document.querySelector("img")).toBeFalsy();
    });
    it("The <div> tag should exists", function () {
        document.querySelector(
            "head"
        ).innerHTML=`<style>${css.toString()}</style>`;
        expect(document.querySelector("div")).toBeTruthy();
    });
    it("You should not change or delete the existing elements in the head tag", function () {

        let meta1=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta c")
        let meta2=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta n")
        let title=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<title")
        expect(meta1).not.toBe(-1)
        expect(meta2).not.toBe(-1)
        expect(title).not.toBe(-1)
        expect(html.toString().indexOf(`<style`)>-1).toBeFalsy();
    })
});
