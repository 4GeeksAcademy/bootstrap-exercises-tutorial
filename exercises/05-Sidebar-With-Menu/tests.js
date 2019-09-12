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
    it('The div tag should contain a row', function () {
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
        console.log("divCont:", rowContent[0].classList[0])
        expect(rowContent[0].classList[0]).toBe("col-2")
        expect(rowContent[1].classList[0]).toBe("col-10")
    });
    it('The left column should contain a nav with anchor tags with class nav-link', function () {
        let navContent=document.querySelector(".col-2").querySelector("nav")
        console.log("nav", navContent[0])
        expect(navContent.classList.contains("nav")).toBeTruthy();
        expect(navContent.classList.contains("flex-column")).toBeTruthy();

    });
    it('The right column should contain a jumbotron with py-2 class', function () {
        let rightContent=document.querySelector(".col-10").querySelector(".jumbotron")
        expect(rightContent.classList.contains("jumbotron")).toBeTruthy();
        expect(rightContent.classList.contains("py-2")).toBeTruthy();

    });
    it('The jumbotron should contain an H4, a p and a button ', function () {
        let jumbotron=document.querySelector(".jumbotron").innerHTML
        console.log("jumbo", jumbotron)
        expect(jumbotron.toString().indexOf(`<h4>Hello!</h4>`)>-1).toBeTruthy();
        expect(jumbotron.toString().indexOf(`<p`)>-1).toBeTruthy();
        expect(jumbotron.toString().indexOf(`<a`)>-1).toBeTruthy();
    });
    it('The button in the jumbotron should be blue and medium size', function () {
        let rightContent=document.querySelector(".col-10").querySelector(".jumbotron").querySelector("a")
        expect(rightContent.classList.contains("btn")).toBeTruthy();
        expect(rightContent.classList.contains("btn-primary")).toBeTruthy();
        expect(rightContent.classList.contains("btn-md")).toBeTruthy();

    });
});