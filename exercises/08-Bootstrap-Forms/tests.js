const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

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
        let meta1 = document.querySelector('head').innerHTML.toString().indexOf("<meta c")
        let meta2 = document.querySelector('head').innerHTML.toString().indexOf("<meta n")        
        let title = document.querySelector('head').querySelector("title")
        let bootstrapLink = document.querySelector("head").innerHTML.toString().indexOf(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`)

        expect(meta1).not.toBe(-1)
        expect(meta2).not.toBe(-1)
        expect(title).toBeTruthy();
        expect(bootstrapLink>-1).toBeTruthy();
    })

    it("You should not use the style tag.", function (){
        let style = document.querySelector('style')
        expect(style).toBe(null)
    })

    it("Do not use any inline styles, just use the bootstrap classes for styling", function () {
        expect(html.toString().match(/style(\s*)=(\s*)["']/)).toBeFalsy();
    });
});

describe("1. You should use a main container with a row and 1 column", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        afterEach(() => {
            jest.resetModules();
        });
    
        it("You should use a main container fluid", function () {
            let div = document.querySelector("div");
            expect(div).toBeTruthy();
            expect(div.classList.contains("container-fluid")).toBeTruthy();
        })
    
        it("You should have a row inside the main container", function () {
            let row = document.querySelector(".container-fluid").querySelector(".row");
            expect(row).toBeTruthy();
        })
    
        it("The row should contain 1 centered column with a card, gray background and rounded corners ", function () {
            let card = document.querySelector(".container-fluid").querySelector(".row").querySelector("div");
    
            expect(card).toBeTruthy();
            expect(card.classList.contains("card")).toBeTruthy();
            expect(card.classList.contains("bg-secondary")).toBeTruthy();
            expect(card.classList.contains("rounded")).toBeTruthy();
        })
    });
    
    describe("2. You should replicate the same design", function () {
        beforeEach(() => {
            //here I import the HTML into the document
            document.documentElement.innerHTML=html.toString();
            //apply the styles from the stylesheet if needed
    
        });
        afterEach(() => {
            jest.resetModules();
        });
    
        it("The first element should be an H2 tag with the same text as the example", function () {
            let card = document.querySelector(".row").querySelector(".card").children;
    
            expect(card[0].nodeName).toBe("H2");
            expect(card[0].innerHTML).toBe("Please login");
        })
    
        describe("2b. You should use a form group to recreate the same example", function () {
            beforeEach(() => {
                //here I import the HTML into the document
                document.documentElement.innerHTML=html.toString();
                //apply the styles from the stylesheet if needed
    
            });
            afterEach(() => {
                jest.resetModules();
            });
    
            it("You should wrap all the elements inside a FORM tag", function () {
                let form = document.querySelector(".card").querySelector("form").children;
                expect(form).toBeTruthy();
                expect(form.length).toBe(4);
            })
    
            it("The Form tag should contain the 4 elements in the example", function () {
                let form = document.querySelector(".card").querySelector("form").children;
    
                for(let i = 0; i < form.length-1; i++){
                    expect(form[i].nodeName).toBe("DIV");
                }
                expect(form[2].classList.contains("form-check")).toBeTruthy();
                expect(form[3].nodeName).toBe("BUTTON");
                expect(form[3].classList.contains("btn")).toBeTruthy();
            })
        });
    
        describe("2c. You should replicate both input fields", function () {
            beforeEach(() => {
                //here I import the HTML into the document
                document.documentElement.innerHTML=html.toString();
                //apply the styles from the stylesheet if needed
    
            });
            afterEach(() => {
                jest.resetModules();
            });
    
            it("The email input should be like the example", function () {
                let input = document.querySelector(".card").querySelector("form").children[0].querySelector("input");
                expect(input.type).toBe("email");
                expect(input.classList.contains("form-control")).toBeTruthy();
            })
    
            it("The password input should be like the example", function () {
                let input = document.querySelector(".card").querySelector("form").children[1].querySelector("input");
                expect(input.type).toBe("password");
                expect(input.classList.contains("form-control")).toBeTruthy();
            })
        })
    
        describe("2d. You should replicate the same checkbox", function () {
            beforeEach(() => {
                //here I import the HTML into the document
                document.documentElement.innerHTML=html.toString();
                //apply the styles from the stylesheet if needed
    
            });
            afterEach(() => {
                jest.resetModules();
            });
    
            it("The DIV should contain the correct classes", function () {
                let div = document.querySelector(".card").querySelector("form").children[2]
                expect(div.classList.contains("form-check")).toBeTruthy();
            })
    
            it("The Label should be like the design", function () {
                let checkbox = document.querySelector(".card").querySelector("form").children[2].children;
                expect(checkbox[0].classList.contains("form-check-input")).toBeTruthy();
                expect(checkbox[0].attributes[0].nodeValue).toBe("checkbox");
                expect(checkbox[1].classList.contains("form-check-label")).toBeTruthy();
                expect(checkbox[1].innerHTML).toBe("Remember me");
            })
        })
        afterEach(() => {
            jest.resetModules();
        });

        it("The BUTTON should be 100% width", function () {
            let button = document.querySelector(".card").querySelector("form").children[3]
            expect(button.classList.contains("btn")).toBeTruthy();
            expect(button.classList.contains("w-100") || button.classList.contains("col-12")).toBeTruthy();
        })
    });
});