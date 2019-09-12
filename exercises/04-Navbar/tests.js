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



    it('The li tags should contain the class nav-item', function () {
        // we can read from the source code
        // console.log(html.toString());
        const liTag=document.querySelectorAll("li")
        console.log("li:", liTag)
        const values=Object.values(liTag)
        let temp=null
        for (let i=0; i<values.length; i++) {
            for (let x of values[i].classList.values()) {
                if (x!=="nav-item") {
                    console.log("false", x)
                    temp=false
                } else {
                    console.log("true", x)
                    temp=true
                }

            } expect(temp).toBeTruthy();
        }


    });
    it('The ul tag should contains the class nav and nav-tabs', function () {
        // we can read from the source code
        // console.log(html.toString());
        const ulTag=document.querySelector("ul")
        expect(ulTag.classList.contains("nav-tabs")).toBeTruthy();
        expect(ulTag.classList.contains("nav")).toBeTruthy();
    });

});