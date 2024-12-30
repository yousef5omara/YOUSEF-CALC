let main = document.getElementById("main");
let screen = document.getElementById("screen");

main.addEventListener('click', e => {
    if (e.target.nodeName == 'BUTTON') {
        switch (e.target.textContent) {
            case 'AC':
                clear();
                break;
            case 'x':
                clearx();
                break;
            case '=':
                ans();
                break;
            default:
                add(e.target.textContent);
        }
    }
})

function clear() {
    screen.textContent = "";
}

function clearx() {
    let textcon = screen.textContent;
    screen.textContent = textcon.slice(0, -1)


}

function add(value) {
    screen.textContent = screen.textContent + value;
}

function ans() {
    if (screen.textContent.includes("÷0")) {
        screen.style.fontSize = "2rem"
        screen.textContent = "هذه العمليه غير معرفه";
        
    }
    else{
        try {
            let expression = screen.textContent.replace(/×/g, "*").replace(/÷/g, "/");
            let result = math.evaluate(expression)
            screen.textContent = result
        } catch (error) {
            screen.textContent = "هذه العمليه غير معرفه"
            screen.style.fontSize = "3.5rem"
            console.error("هذه العمليه غير معرفه")
        }
    } 

}

