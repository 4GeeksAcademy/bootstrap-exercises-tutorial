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
        let Bootstraplink=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`)
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
    it("Do not use any inline styles, just use the bootstrap classes for styling", function () {
        expect(html.toString().match(/style(\s*)=(\s*)["']/)).toBeFalsy();
    });

});
describe('1. All the rules in the instructions should be applied', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();
    });
    afterEach(() => {jest.resetModules();});
    it('The body should contain a div tag', function () {
        let bodyContent=document.getElementsByTagName("body")[0].innerHTML
        // we can read from the source code
        // console.log(html.toString());
        expect(bodyContent.toString().indexOf(`<div`)>-1).toBeTruthy();
    });
    it('The div tag should contain the class container-fluid', function () {

        // we can read from the source code
        // console.log(html.toString());
        const divTag=document.querySelector("div");
        expect(divTag.classList.contains("container-fluid")).toBeTruthy();


    });
    it('The div tag should contain a <div> with class row', function () {
        let divContent=document.getElementsByTagName("div")[0].innerHTML
        // we can read from the source code
        // console.log(html.toString());
        expect(divContent.toString().indexOf(`<div class="row">`)>-1).toBeTruthy();
        // expect(divContent.toString().indexOf(`<p>I can't believe that bootstap is so easy, now HTML and CSS are a simple but very usefull technology.</p>`)>-1).toBeTruthy();
    });
    it('The row should contain 2 columns with 2 and 10 slots', function () {
        let rowContent=document.querySelector(".row").children
        // we can read from the source code
        // console.log(html.toString());
        expect([...rowContent[0].classList].includes("col-2")).toBe(true)
        expect([...rowContent[1].classList].includes("col-10")).toBe(true)
    });
    it('The left column should contain a <ul> tag with the classes nav and flex-column', function () {
        let navContent=document.querySelector(".col-2").querySelector("ul")
        expect(navContent.classList.contains("nav")).toBeTruthy();
        expect(navContent.classList.contains("flex-column")).toBeTruthy();

    });
    it('The second column should contain an H4, a p and a button', function () {
        let jumbotron=document.querySelector(".col-10").innerHTML
        expect(jumbotron.toString().indexOf(`<h4`)>-1).toBeTruthy();
        expect(jumbotron.toString().indexOf(`<p`)>-1).toBeTruthy();
        expect(jumbotron.toString().indexOf(`<button`)>-1).toBeTruthy();
    });
    it('The button in the second column should be blue', function () {
        let rightContent=document.querySelector(".col-10").querySelector("button")
        expect(rightContent.classList.contains("btn")).toBeTruthy();
        expect(rightContent.classList.contains("btn-primary")).toBeTruthy();
    });
});