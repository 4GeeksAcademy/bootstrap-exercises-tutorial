const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("1. You should not change the existing code", function () {
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
describe("2. You should use a main container with a row and 1 column", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();

        //apply the styles from the stylesheet if needed

    });
    afterEach(() => {
        jest.resetModules();
    });
    it("You should use only 1 main container", function () {
        let myBody=document.querySelector("body").children
        // console.log("body", myBody[0].classList[0])
        expect(myBody.length).toBe(1);
        expect(myBody[0].nodeName).toBe("DIV");
        expect(myBody[0].classList[0]).toBe("container");

    })
    it("You should have a row inside the main container", function () {
        let myContainerRow=document.querySelector(".container").children
        // console.log("container", myContainerRow)
        expect(myContainerRow.length).toBe(1);
        expect(myContainerRow[0].nodeName).toBe("DIV");
        expect(myContainerRow[0].classList[0]).toBe("row");
    })
    it("The row should contain 1 centered column with 6 slots, gray background and rounded corners ", function () {
        let myColumn=document.querySelector("body").querySelector(".container").querySelector(".row").children
        // console.log("columns", myColumn)
        expect(myColumn.length).toBe(1);
        expect(myColumn[0].nodeName).toBe("DIV");
        expect(myColumn[0].classList.contains("col-6")).toBeTruthy();
        expect(myColumn[0].classList.contains("m-auto")).toBeTruthy();
        expect(myColumn[0].classList.contains("bg-secondary")).toBeTruthy();
        expect(myColumn[0].classList.contains("rounded")).toBeTruthy();
    })



});
describe("3. You should replicate the same design", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();

        //apply the styles from the stylesheet if needed

    });
    afterEach(() => {
        jest.resetModules();
    });
    it("The first element should be an H2 tag with the same text as the example", function () {
        let title=document.querySelector(".row").querySelector(".col-6").children
        console.log("title:", title[0].nodeName)
        expect(title[0].nodeName).toBe("H2");
        expect(title[0].innerHTML).toBe("Please Login");

    })
    describe("3b. You should use a form group to recreate the same example", function () {
        beforeEach(() => {
            //here I import the HTML into the document
            document.documentElement.innerHTML=html.toString();

            //apply the styles from the stylesheet if needed

        });
        afterEach(() => {
            jest.resetModules();
        });
        it("You should wrap the all the elements inside a FORM tag", function () {
            let form=document.querySelector(".col-6").querySelector("form").children
            console.log("form:", form)
            expect(form.length).toBe(4);
        })
        it("The FORM tag should contain the 4 elements in the example", function () {
            let form=document.querySelector(".col-6").querySelector("form").children
            // THE NEXT CODE SHOULD BE WRAP IN ONE LOOP
            expect(form[0].nodeName).toBe("DIV");
            expect(form[0].classList.contains("form-group")).toBeTruthy();
            expect(form[1].nodeName).toBe("DIV");
            expect(form[1].classList.contains("form-group")).toBeTruthy();
            expect(form[2].nodeName).toBe("DIV");

            expect(form[3].nodeName).toBe("BUTTON");

        })

    });
    describe("3c. You should replicate both input fields", function () {
        beforeEach(() => {
            //here I import the HTML into the document
            document.documentElement.innerHTML=html.toString();

            //apply the styles from the stylesheet if needed

        });
        afterEach(() => {
            jest.resetModules();
        });
        it("The email input should be like the example", function () {
            let form=document.querySelector(".col-6").querySelector("form").children
            // console.log("$$$:", form[0].children[0].attributes[0].nodeValue)
            expect(form[0].children[0].attributes[0].nodeValue).toBe("email");
            expect(form[0].children[0].classList.contains("form-control")).toBeTruthy();
            // expect(form[2].classList.contains("form-group")).toBeTruthy();
            // expect(form[2].classList.contains("form-check")).toBeTruthy();
        })
        it("The password input should be like the example", function () {
            let form=document.querySelector(".col-6").querySelector("form").children
            // console.log("$$$:", form[0].children[0].attributes[0].nodeValue)
            expect(form[1].children[0].attributes[0].nodeValue).toBe("password");
            expect(form[1].children[0].classList.contains("form-control")).toBeTruthy();
        })
    })
    describe("3d. You should replicate the same checkbox", function () {
        beforeEach(() => {
            //here I import the HTML into the document
            document.documentElement.innerHTML=html.toString();

            //apply the styles from the stylesheet if needed

        });
        afterEach(() => {
            jest.resetModules();
        });
        it("The DIV should contain the correct classes", function () {
            let form=document.querySelector(".col-6").querySelector("form").children

            expect(form[2].classList.contains("form-group")).toBeTruthy();
            expect(form[2].classList.contains("form-check")).toBeTruthy();
        })
        it("The Label should be like the design", function () {
            let form=document.querySelector(".col-6").querySelector("form").children
            expect(form[2].children[0].classList.contains("form-check-input")).toBeTruthy();
            // expect(form[2].children[0].attributes)
            console.log("attr:", form[2].children[0].attributes[0].nodeValue)
            expect(form[2].children[0].attributes[0].nodeValue).toBe("checkbox");
            expect(form[2].children[1].classList.contains("form-check-label")).toBeTruthy();
            expect(form[2].children[1].innerHTML).toBe("Remember me");
        })
    })

    describe("3e. You should replicate the same button", function () {
        beforeEach(() => {
            //here I import the HTML into the document
            document.documentElement.innerHTML=html.toString();

            //apply the styles from the stylesheet if needed

        });
        afterEach(() => {
            jest.resetModules();
        });
        it("The BUTTON should be 100% width and light blue", function () {
            let form=document.querySelector(".col-6").querySelector("form").children
            // THE NEXT CODE SHOULD BE WRAP IN ONE LOOP
            expect(form[3].classList.contains("btn")).toBeTruthy();
            expect(form[3].classList.contains("btn-block")).toBeTruthy();
            expect(form[3].classList.contains("btn-info")).toBeTruthy();
            // expect(form[0].nodeName).toBe("DIV");
            // expect(form[0].classList.contains("form-group")).toBeTruthy();
            // expect(form[1].nodeName).toBe("DIV");
            // expect(form[2].nodeName).toBe("DIV");
            // expect(form[3].nodeName).toBe("BUTTON");

        })
    });
});

    //     it("The third elements should be 2 buttons, following the bootstrap documentation link above  ", function () {
    //         let leftCol=document.querySelector(".row").children[0].children
    //         //console.log("left:", leftCol[0].nodeName)
    //         expect(leftCol[2].nodeName).toBe("BUTTON");
    //         expect(leftCol[3].nodeName).toBe("BUTTON");
    //         expect(leftCol[2].classList.contains("btn")).toBeTruthy();
    //         expect(leftCol[2].classList.contains("btn-success")).toBeTruthy();
    //         expect(leftCol[3].classList.contains("btn")).toBeTruthy();
    //         expect(leftCol[3].classList.contains("btn-danger")).toBeTruthy();


    //     })



    // });
    // describe("4. The RIGHT column should contain all the required elements in the correct position and with the correct style", function () {
    //     beforeEach(() => {
    //         //here I import the HTML into the document
    //         document.documentElement.innerHTML=html.toString();

    //         //apply the styles from the stylesheet if needed

    //     });
    //     afterEach(() => {
    //         jest.resetModules();
    //     });
    //     it("The first element should be a DIV alert ", function () {
    //         let rightCol=document.querySelector(".row").children[1].children
    //         // console.log("left:", rightCol[0].innerHTML)
    //         expect(rightCol[0].nodeName).toBe("DIV");
    //         expect(rightCol[0].classList.contains("alert")).toBeTruthy();
    //         expect(rightCol[0].classList.contains("alert-warning")).toBeTruthy();


    //     })
    //     it("The second element should be TABLE with striped rows", function () {
    //         let rightCol=document.querySelector(".row").children[1].children
    //         // console.log("left:", rightCol[1])
    //         expect(rightCol[1].nodeName).toBe("TABLE");
    //         expect(rightCol[1].classList.contains("table")).toBeTruthy();
    //         expect(rightCol[1].classList.contains("table-striped")).toBeTruthy();

    //     })
    //     it("The TABLE should contain 3 Columns and 3 Rows ", function () {
    //         // let table=document.querySelector(".row").children[1].children[1]
    //         let table=document.querySelector("table").children
    //         console.log("table:", table[1].children[0].children)
    //         expect(table.length).toBe(2);
    //         expect(table[0].nodeName).toBe("THEAD");
    //         expect(table[1].nodeName).toBe("TBODY");
    //         expect(table[0].children.length).toBe(1);
    //         expect(table[0].children[0].children.length).toBe(3);
    //         expect(table[0].children[0].children[0].innerHTML).toBe("Firstname");
    //         expect(table[0].children[0].children[1].innerHTML).toBe("Lastname");
    //         expect(table[0].children[0].children[2].innerHTML).toBe("Email");
    //         expect(table[1].children.length).toBe(3);
    //         expect(table[1].children[0].nodeName).toBe("TR");
    //         expect(table[1].children[1].nodeName).toBe("TR");
    //         expect(table[1].children[2].nodeName).toBe("TR");
    //         expect(table[1].children[0].children.length).toBe(3);
    //         expect(table[1].children[0].children.length).toBe(3);
    //         expect(table[1].children[1].children.length).toBe(3);
    //         expect(table[1].children[1].children.length).toBe(3);


    //         // let tableRow=table[1].children
    //         // const values=Object.values(tableRow)
    //         // console.log("###", values)
    //         // let temp=null
    //         // for (let i=0; i<values.length; i++) {
    //         //     for (let x of values[i].nodeName) {
    //         //         if (x!=="TR") {
    //         //             console.log("false", x)
    //         //             temp=false
    //         //         } else {
    //         //             console.log("true", x)
    //         //             temp=true
    //         //         }

    //         //     } expect(temp).toBeTruthy();
    //         // }


    //     })



