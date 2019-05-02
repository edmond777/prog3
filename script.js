let matrix = [
    [0, 1, 3, 0, 0, 0, 0, 0, 1, 0, 3, 1, 1, 1, 4, 1, 1],
    [0, 1, 1, 0, 4, 2, 0, 0, 1, 0, 0, 1, 4, 1, 1, 3, 1],
    [0, 1, 5, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 3, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 5, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 4, 3, 0, 1, 0, 0, 1, 0, 0, 1, 1, 3, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 4, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 5, 0, 1, 3, 0, 1, 5, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [2, 3, 5, 0, 4, 1, 0, 0, 1, 1, 1, 1, 3, 1, 1, 1, 1],
    [2, 4, 0, 0, 0, 1, 0, 1, 1, 2, 2, 1, 1, 1, 1, 5, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
];
console.log(matrix);
let side = 25;
let xotArr = []; //խոտերի զանգված
let eatArr = []; //խոտակերների զանգված
let gishaticharr = [];
let aryucarr = [];
let dinozavrarr = [];

function setup() {
    //noStroke();
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');
    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                let eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            }
            else if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                xotArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                let gishatich = new Gishatich(x, y);
                gishaticharr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                let aryuc = new Aryuc(x, y);
                aryucarr.push(aryuc);
            }
            else if (matrix[y][x] == 5) {
                let dinozavr = new Dinozavr(x, y);
                dinozavrarr.push(dinozavr);
            }
        }
    }
}
// //draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
// //եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
// //draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill('red');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill('blue');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill('pink');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);


            }
        }
        //յուրաքանչյուր խոտ փորձում է բազմանալ
        
    }
    for (let u in xotArr) {
            xotArr[u].mul();
        }
        //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
        for (let u in eatArr) {
            eatArr[u].eat();
        }
        for (let u in gishaticharr) {
            gishaticharr[u].eat();

        }
        for (let u in aryucarr) {
            aryucarr[u].eat();
        }
        for (let u in dinozavrarr) {

            dinozavrarr[u].eat();
        }
}


