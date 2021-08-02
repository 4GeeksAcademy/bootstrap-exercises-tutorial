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
describe('1. All the rules to create the first section should be applied', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();
    });
    afterEach(() => {jest.resetModules();});
    it(`The first element of the first section should be an H1 tag`, function () {
        let jumboDiv=document.querySelector(".container-fluid").querySelector(".row").children
        console.log("Jumbo:", jumboDiv[2].nodeName)
        // we can read from the source code
        // console.log(html.toString());
        expect(jumboDiv[0].nodeName).toBe('H1');

    });
    it(`The second element of the first section should be a P tag`, function () {
        let jumboDiv=document.querySelector(".container-fluid").querySelector(".row").children
        console.log("Jumbo:", jumboDiv[2].nodeName)
        // we can read from the source code
        // console.log(html.toString());

        expect(jumboDiv[1].nodeName).toBe('P');

    });
    it(`The second element of the first section should be a button tag with a blue button class`, function () {
        let jumboDiv=document.querySelector(".container-fluid").querySelector(".row").children
        console.log("Jumbo:", jumboDiv[2].nodeName)
        // we can read from the source code
        // console.log(html.toString());

        expect(jumboDiv[2].nodeName).toBe('BUTTON');
        expect(jumboDiv[2].classList.contains("btn")).toBeTruthy();
        expect(jumboDiv[2].classList.contains("btn-primary")).toBeTruthy();

    });
});
describe('2. All the rules to create the second row should be applied', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();
    });
    afterEach(() => {jest.resetModules();});
    // it('The 3 columns should contains the class col-4', function () {
    //     // we can read from the source code
    //     // console.log(html.toString());
    //     const liTag=document.querySelectorAll("li")
    //     console.log("li:", liTag)
    //     const values=Object.values(liTag)
    //     let temp=null
    //     for (let i=0; i<values.length; i++) {
    //         for (let x of values[i].classList.values()) {
    //             if (x!=="nav-item") {
    //                 console.log("false", x)
    //                 temp=false
    //             } else {
    //                 console.log("true", x)
    //                 temp=true
    //             }

    //         } expect(temp).toBeTruthy();
    //     }


    // });
    it('The 3 columns should contain an H2, a p and a button ', function () {
        let contentDiv=document.querySelectorAll(".row")
        let t=contentDiv[1].querySelectorAll(".col-4")
        console.log("t", t)
        let hTemp=null
        let pTemp=null
        let aTemp=null
        for (let i=0; i<t.length; i++) {
            console.log("Loop:", t[i].innerHTML)
            if (t[i].innerHTML.toString().indexOf(`<h2>Heading</h2>`)>-1) {hTemp=true}
            if (t[i].innerHTML.toString().indexOf(`<p>`)>-1) {pTemp=true}
            if (t[i].innerHTML.toString().indexOf(`<button`)>-1) {aTemp=true}

        }
        expect(t.length).toBe(3)
        expect(hTemp).toBeTruthy();
        expect(pTemp).toBeTruthy();
        expect(aTemp).toBeTruthy();

        // expect(t.toString().indexOf(`<h2>Heading</h2>`)>-1).toBeTruthy();
        // expect(t.toString().indexOf(`<p>`)>-1).toBeTruthy();
        // expect(t.toString().indexOf(`<a`)>-1).toBeTruthy();

    });
    it('The 3 columns should contain the class col-4', function () {
        let contentDiv=document.querySelectorAll(".row")
        let t=contentDiv[1].children
        console.log("T:", t)
        const values=Object.values(t)
        console.log("values:", values)
        let temp=null
        for (let i=0; i<values.length; i++) {
            for (let x of values[i].classList.values()) {
                if (x!=="col-4") {
                    console.log("false", x)
                    temp=false
                } else {
                    console.log("true", x)
                    temp=true
                }

            } expect(temp).toBeTruthy();
        }
    })
});