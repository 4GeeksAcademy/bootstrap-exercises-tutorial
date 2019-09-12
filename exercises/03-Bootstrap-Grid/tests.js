const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the tests should pass", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();

        //apply the styles from the stylesheet if needed

    });
    afterEach(() => {
        jest.resetModules();
    });
    it("You should not change or delete the existing elements in the head tag", function () {

        let meta1=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta c")
        let meta2=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<meta n")
        let Bootstraplink=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`)
        let link=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<link")
        let title=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<title")
        expect(meta1).not.toBe(-1)
        expect(meta2).not.toBe(-1)
        expect(link).not.toBe(-1)
        expect(Bootstraplink).not.toBe(-1)
        expect(title).not.toBe(-1)
        expect(html.toString().indexOf(`<style`)>-1).toBeFalsy();
    })

    it("The styles.css file should be empty", function () {
        expect(css.toString()==="").toBeTruthy();
    });
    it('You should not change the first row', function () {
        let divContent=document.querySelectorAll(".row")[0].innerHTML
        console.log("ROW:", divContent)
        // we can read from the source code
        // console.log(html.toString());
        expect(divContent.toString().indexOf(`<div class="col-6">First col</div>`)>-1).toBeTruthy();
        expect(divContent.toString().indexOf(`<div class="col-6">Second col</div>`)>-1).toBeTruthy();
    });
});
describe('1. All the rules in the instructions should be applied', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();
    });
    afterEach(() => {jest.resetModules();});


    it('The second row should contain 3 columns of the same width', function () {
        let ndRow=document.querySelectorAll(".row")[1].innerHTML
        // we can read from the source code
        // console.log(html.toString());

        expect(ndRow.toString().indexOf(`<div class="col-4">Third col</div>`)>-1).toBeTruthy();
        expect(ndRow.toString().indexOf(`<div class="col-4">Fourth col</div>`)>-1).toBeTruthy();
        expect(ndRow.toString().indexOf(`<div class="col-4">Fourth col</div>`)>-1).toBeTruthy();
        expect(ndRow.toString().indexOf(`<div`)>-1).toBeTruthy();
    });
    it('You should create a third row with one column of 12 slot and the background red', function () {
        let rdRow=document.querySelectorAll(".row")[2].querySelector("div").classList.values()
        // for (let i=0; i<rdRow.length; i++) {console.log("IT#:", rdRow[i])}
        let rdRowClasses=false
        let rdRowClassesBg=false
        for (let x of rdRow) {
            if (x==="col-12") {
                rdRowClasses=true
            }
            if (x==="bg-danger") {
                rdRowClassesBg=true
            }
        }
        expect(rdRowClasses).toBeTruthy();
        expect(rdRowClassesBg).toBeTruthy();
        // expect(divContent.toString().indexOf(`<p>I can't believe that bootstap is so easy, now HTML and CSS are a simple but very usefull technology.</p>`)>-1).toBeTruthy();
    });
    it('The main div tag should contain the class container-fluid', function () {

        // we can read from the source code
        // console.log(html.toString());
        const divTag=document.querySelector("body").querySelector("div");
        expect(divTag.classList.contains("container-fluid")).toBeTruthy();


    });

});