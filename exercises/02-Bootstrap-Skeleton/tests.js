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
        // let Bootstraplink=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`)
        let link=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<link")
        let title=document.getElementsByTagName('head')[0].innerHTML.toString().indexOf("<title")
        expect(meta1).not.toBe(-1)
        expect(meta2).not.toBe(-1)
        expect(link).not.toBe(-1)
        // expect(Bootstraplink).not.toBe(-1)
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

    it('The head tag should contain the link tag for Bootstrap', function () {
        let bodyContent=document.getElementsByTagName("head")[0].innerHTML
        console.log("head:", bodyContent)
        // we can read from the source code
        // console.log(html.toString());
        expect(bodyContent.toString().indexOf(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`)>-1).toBeTruthy();
    });
    it('The body should contain a div tag', function () {
        let bodyContent=document.getElementsByTagName("body")[0].innerHTML
        // we can read from the source code
        // console.log(html.toString());
        expect(bodyContent.toString().indexOf(`<div`)>-1).toBeTruthy();
    });
    it('The div tag should wrap the existing h1 and p tags', function () {
        let divContent=document.getElementsByTagName("div")[0].innerHTML
        // we can read from the source code
        // console.log(html.toString());
        expect(divContent.toString().indexOf(`<h1>This is my first example using bootstrap</h1>`)>-1).toBeTruthy();
        expect(divContent.toString().indexOf(`<p>I can't believe that bootstap is so easy, now HTML and CSS are a simple but very usefull technology.</p>`)>-1).toBeTruthy();
    });
    it('The div tag should contain the class container-fluid', function () {

        // we can read from the source code
        // console.log(html.toString());
        const divTag=document.querySelector("div");
        expect(divTag.classList.contains("container-fluid")).toBeTruthy();


    });

    // it('The div tag should contains the class bg-primary', function () {

    //     // we can read from the source code
    //     // console.log(html.toString());
    //     const divTag=document.querySelector("div");
    //     expect(divTag.classList.contains("bg-primary")).toBeTruthy();


    // });
});
