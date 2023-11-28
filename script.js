// let a = pacMan.getBoundingClientRect();
// ______________________________Add Mapp scene______________________________________
// -------html to Add map-----------
{/* <div class="scene">
        <div class="pac-man"></div>
        <div class="to-cursor"></div>
    </div> */}
// -------html to Add map-----------
// let pacMan = document.querySelector('.pac-man');
// let a = 0;
// let i = 0;
// let obg = {

// }
// last = []
// document.querySelector('.scene').onmousemove = function (event) {
//     document.querySelector('.to-cursor').style.top = (event.offsetY + 9) + 'px';
//     document.querySelector('.to-cursor').style.left = (event.offsetX + 17) + 'px';
// }
// document.querySelector('.to-cursor').onmousedown = function (event) {

//     console.log(event.offsetY, event.offsetX);
// }
// document.querySelector('.scene').onmouseup = function (event) {

//     if (i == 0) {
//         console.log(event.offsetY, event.offsetX, i);
//         document.querySelector('.pac-man').innerHTML += "<div style='top:" + (event.offsetY - 23) + "px;left:" + (event.offsetX - 23) + "px;' class='marc'></div>";
//         last = [event.offsetY, event.offsetX];
//         i++;
//     } else {
//         i = 0;
//         document.querySelector('.pac-man').innerHTML += "<div style='top:" + (event.offsetY - 23) + "px;left:" + (event.offsetX - 23) + "px;' class='marc'></div>";
//         obg[a] = [last, [event.offsetY, event.offsetX]];
//         a++;
//         console.log(event.offsetY, event.offsetX, i);
//         console.log(obg)
//     }
// }
//_______________________________
let map = {
    "0": [
        [37, 32],
        [37, 150]],
    "1": [
        [37, 150],
        [37, 288]],
    "2": [
        [37, 288],
        [128, 288]],
    "3": [
        [128, 288],
        [128, 219]],
    "4": [
        [128, 219],
        [128, 150]],
    "5": [
        [128, 150],
        [128, 32]],
    "6": [
        [128, 32],
        [37, 32]],
    "7": [
        [37, 150],
        [128, 150]],
    "8": [
        [128, 32],
        [197, 32]],
    "9": [
        [197, 32],
        [197, 149]],
    "10": [
        [197, 149],
        [128, 150]],
    "11": [
        [128, 219],
        [197, 219]],
    "12": [
        [197, 219],
        [197, 288]],
    "13": [
        [197, 288],
        [266, 288]],
    "14": [
        [266, 288],
        [266, 357]],
    "15": [
        [266, 357],
        [197, 357]],
    "16": [
        [197, 357],
        [197, 428]],
    "17": [
        [197, 428],
        [128, 428]],
    "18": [
        [128, 428],
        [128, 357]],
    "19": [
        [128, 357],
        [128, 288]],
    "20": [
        [128, 357],
        [37, 357]],
    "21": [
        [37, 357],
        [37, 498]],
    "22": [
        [37, 498],
        [37, 611]],
    "23": [
        [37, 611],
        [128, 611]],
    "24": [
        [128, 611],
        [128, 498]],
    "25": [
        [128, 498],
        [128, 428]],
    "26": [
        [128, 498],
        [37, 498]],
    "27": [
        [128, 498],
        [197, 498]],
    "28": [
        [197, 498],
        [197, 611]],
    "29": [
        [197, 611],
        [128, 611]],
    "30": [
        [197, 498],
        [337, 498]],
    "31": [
        [337, 498],
        [337, 651]],
    "32": [
        [337, 498],
        [478, 498]],
    "33": [
        [478, 498],
        [478, 611]],
    "35": [
        [478, 611],
        [546, 611]],
    "35": [
        [546, 611],
        [546, 567]],
    "36": [
        [546, 567],
        [615, 567]],
    "37": [
        [615, 567],
        [615, 611]],
    "38": [
        [615, 611],
        [685, 611]],
    "39": [
        [685, 611],
        [685, 358]],
    "40": [
        [685, 358],
        [615, 357]],
    "41": [
        [615, 357],
        [615, 428]],
    "42": [
        [615, 428],
        [546, 428]],
    "43": [
        [546, 428],
        [546, 498]],
    "44": [
        [546, 498],
        [478, 498]],
    "45": [
        [546, 498],
        [615, 498]],
    "46": [
        [615, 498],
        [615, 567]],
    "47": [
        [685, 357],
        [685, 288]],
    "48": [
        [685, 288],
        [615, 288]],
    "49": [
        [615, 288],
        [615, 219]],
    "50": [
        [615, 219],
        [546, 219]],
    "51": [
        [546, 219],
        [546, 288]],
    "52": [
        [546, 288],
        [546, 357]],
    "53": [
        [546, 357],
        [546, 428]],
    "54": [
        [685, 288],
        [685, 32]],
    "55": [
        [685, 32],
        [615, 32]],
    "56": [
        [615, 32],
        [615, 149]],
    "57": [
        [615, 149],
        [546, 150]],
    "58": [
        [546, 150],
        [546, 219]],
    "59": [
        [546, 150],
        [478, 150]],
    "60": [
        [478, 150],
        [478, 32]],
    "61": [
        [478, 32],
        [546, 32]],
    "62": [
        [546, 32],
        [546, 79]],
    "63": [
        [546, 79],
        [615, 79]],
    "64": [
        [615, 79],
        [615, 32]],
    "65": [
        [615, 79],
        [615, 149]],
    "66": [
        [478, 150],
        [478, 219]],
    "67": [
        [478, 219],
        [478, 288]],
    "68": [
        [478, 288],
        [546, 288]],
    "69": [
        [546, 357],
        [478, 357]],
    "70": [
        [478, 357],
        [478, 428]],
    "71": [
        [478, 428],
        [478, 498]],
    "72": [
        [478, 219],
        [408, 219]],
    "73": [
        [408, 219],
        [408, 428]],
    "74": [
        [408, 428],
        [337, 428]],
    "75": [
        [337, 428],
        [337, 498]],
    "76": [
        [337, 428],
        [266, 428]],
    "77": [
        [266, 428],
        [266, 357]],
    "78": [
        [266, 288],
        [266, 219]],
    "79": [
        [266, 219],
        [337, 219]],
    "80": [
        [337, 219],
        [408, 219]],
    "81": [
        [408, 219],
        [408, 428]],
    "82": [
        [478, 150],
        [337, 150]],
    "83": [
        [337, 150],
        [337, 219]],
    "84": [
        [337, 150],
        [197, 149]],
    "85": [
        [337, 150],
        [337, 1]],
    "86": [
        [408, 428],
        [478, 428]],
    "87": [
        [478, 611],
        [546, 611]],
    "88": [
        [685, 288],
        [685, 358]],
}
function one() {
    var loc = null;
    var lastLocationX = 0;
    var lastLocationY = 0;
    let indexOfMoveLocation = 0;
    var man = document.querySelector(".pac-man");
    var pacMan = document.querySelector(".pac-man");
    let lastmoveIndex = 0;
    let lastindexMove = 0;
    let lastx = 0;
    let lasty = 0;
    let lastxInd = 0;
    let lastyInd = 0;
    let rotations = '';
    let videoImagePacmanotation = 'up';
    pacMan.style.top = map[0][0][0] - 50 + 'px';
    pacMan.style.left = map[0][0][1] - 50 + 'px';

    document.addEventListener('keydown', async function (event) {
        if (indexOfMoveLocation == 1) {
            if (event.code == 'KeyW') {
                if (rotations == 'down') {
                    await clearInterval(loc);
                    rotations = 'up';
                    move(lastmoveIndex, lastindexMove, lastx, lasty, lastxInd, lastyInd, 1);
                } else {
                    keyStart();
                }
            }
            if (event.code == 'KeyA') {
                if (rotations == 'right') {
                    await clearInterval(loc);
                    rotations = 'left';
                    move(lastmoveIndex, lastindexMove, lastx, lasty, lastxInd, lastyInd, 1);
                } else {
                    keyStart();
                }
            }
            if (event.code == 'KeyS') {
                if (rotations == 'up') {
                    await clearInterval(loc);
                    rotations = 'down';
                    move(lastmoveIndex, lastindexMove, lastx, lasty, lastxInd, lastyInd, 1);
                } else {
                    keyStart();
                }
            }
            if (event.code == 'KeyD') {
                if (rotations == 'left') {
                    await clearInterval(loc);
                    rotations = 'right';
                    move(lastmoveIndex, lastindexMove, lastx, lasty, lastxInd, lastyInd, 1);
                } else {
                    keyStart();
                }
            }

        } else {
            keyStart();
        }

        async function keyStart() {
            let locationPacMan = man.getBoundingClientRect();
            let x = locationPacMan.top + 41 + window.scrollY;
            const y = locationPacMan.left + 41;

            if (event.code == 'KeyW') {
                rotations = 'up'
                await test(x, y, "up");
            }
            if (event.code == 'KeyA') {
                rotations = 'left'
                await test(x, y, "left");
            }
            if (event.code == 'KeyS') {
                rotations = 'down'
                await test(x, y, "down");
            }
            if (event.code == 'KeyD') {
                rotations = 'right'
                await test(x, y, "right");
            }
        }
    });
    async function test(topX, leftY, rotation) {
        videoImagePacmanotation = 1;
        console.log(topX, leftY)
        let index = 0;
        let nextObjKey = [];
        for (const key in map) {
            if (map[key][0][0] == topX && map[key][0][1] == leftY) {
                nextObjKey[index] = [key, '1'];
                index++;
            } else if (map[key][1][0] == topX && map[key][1][1] == leftY) {
                nextObjKey[index] = [key, '0'];
                index++;
            }
        }
        await calcGo(topX, leftY, nextObjKey, rotation);
    }
    async function calcGo(x, y, arr, rot) {
        let indexOfMowe = 0;
        if (rot == 'right') {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][1] == '0') {
                    if ((map[arr[i][0]][0][1]) - (map[arr[i][0]][1][1]) > 10) {
                        indexOfMowe = arr[i][0];
                    }
                } else {
                    if ((map[arr[i][0]][1][1]) - (map[arr[i][0]][0][1]) > 10) {
                        indexOfMowe = arr[i][0];
                    }
                }
            }
        }
        if (rot == 'down') {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][1] == '0') {
                    if ((map[arr[i][0]][0][0]) - (map[arr[i][0]][1][0]) > 10) {
                        indexOfMowe = arr[i][0];
                    }
                } else {
                    if ((map[arr[i][0]][1][0]) - (map[arr[i][0]][0][0]) > 10) {
                        indexOfMowe = arr[i][0];
                    }
                }
            }
        }
        if (rot == 'left') {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][1] == '0') {
                    if ((map[arr[i][0]][1][1]) - (map[arr[i][0]][0][1]) > 10) {
                        indexOfMowe = arr[i][0];
                    }
                } else {
                    if ((map[arr[i][0]][0][1]) - (map[arr[i][0]][1][1]) > 10) {
                        indexOfMowe = arr[i][0];
                    }
                }
            }
        }
        if (rot == 'up') {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][1] == '0') {
                    if ((map[arr[i][0]][1][0]) - (map[arr[i][0]][0][0]) > 10) {
                        indexOfMowe = arr[i][0];
                    }
                } else {
                    if ((map[arr[i][0]][0][0]) - (map[arr[i][0]][1][0]) > 10) {
                        indexOfMowe = arr[i][0];
                    }
                }
            }
        }
        console.log()

        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == indexOfMowe) {
                let xInd = map[indexOfMowe][arr[i][1]][0] - x;
                let yInd = map[indexOfMowe][arr[i][1]][1] - y;
                await move(arr[i][1], indexOfMowe, x, y, xInd, yInd, 0, rot)

            }
        }
    }


    async function move(moveIndex, indexMove, x, y, xInd, yInd, index, rotImg) {
        let pAc = pacMan.getBoundingClientRect();
        lastmoveIndex = moveIndex;
        lastindexMove = indexMove;
        lastx = x;
        lasty = y;
        lastxInd = xInd;
        lastyInd = yInd;
        indexOfMoveLocation = 0;
        lastLocationX = x;
        lastLocationY = y;
        // man.style.top = map[indexMove][moveIndex][0] - 20 + 'px';
        // man.style.left = map[indexMove][moveIndex][1] - 20 + 'px';
        await clearInterval(loc);
        console.log(x, y, map[indexMove][moveIndex][0], map[indexMove][moveIndex][1], xInd, yInd);
        let positionX = 0;
        let positionY = 0;
        if (index == 0) {
            positionX = x;
            positionY = y;
        } else {
            positionX = pAc.top + 41;
            positionY = pAc.left + 41;
        }

        console.log(pAc.top + 41, pAc.left + 41)
        loc = await setInterval(frame, 5);
        let movInd = 0
        if (moveIndex == 1) {
            movInd = 0;
        } else {
            movInd = 1;
        }

        async function frame() {
            videoImagePacmanotation = rotImg
            indexOfMoveLocation = 1;
            if (index == 1) {

                console.log(map[indexMove][movInd][0], map[indexMove][movInd][1], positionX, positionY)
                console.log(map[indexMove][moveIndex][0], map[indexMove][moveIndex][1], positionX, positionY, 'loccation')

                man.style.top = map[indexMove][movInd][0] - 50 + 'px';
                man.style.left = map[indexMove][movInd][1] - 50 + 'px';
                await clearInterval(loc);

                indexOfMoveLocation = 0;
                await test(map[indexMove][movInd][0], map[indexMove][movInd][1], rotations)
                videoImagePacmanotation = 1;

            } else {
                if (positionX == map[indexMove][moveIndex][0] && positionY == map[indexMove][moveIndex][1]) {
                    console.log('Stop')
                    indexOfMoveLocation = 0;

                    await clearInterval(loc);
                    let a1 = pacMan.getBoundingClientRect();
                    await test(a1.top + 41 + window.scrollY, a1.left + 41, rotations)

                } else {
                    if (xInd >= 0) {
                        if (positionX !== map[indexMove][moveIndex][0]) {
                            positionX++;
                        }
                    } else {
                        if (positionX !== map[indexMove][moveIndex][0]) {
                            positionX--;
                        }
                    }
                    if (yInd >= 0) {
                        if (positionY !== map[indexMove][moveIndex][1]) {
                            positionY++;
                        }
                    } else {
                        if (positionY !== map[indexMove][moveIndex][1]) {
                            positionY--;
                        }
                    }
                    man.style.top = positionX - 50 + 'px';
                    man.style.left = positionY - 50 + 'px';
                }
            }
        }
    }


    let imgPac = null;
    imgPac = setInterval(imgstart, 10);
    let imgs = 1;
    let imgsLevlRotation = 1;
    function imgstart() {
        if (videoImagePacmanotation == 'up') {
            imgsLevlRotation = 1;
        } else if (videoImagePacmanotation == 'right') {
            imgsLevlRotation = 2;
        } else if (videoImagePacmanotation == 'down') {
            imgsLevlRotation = 3;
        } else if (videoImagePacmanotation == 'left') {
            imgsLevlRotation = 4;
        }
        if (videoImagePacmanotation == 1) {



        } else {
            if (imgs == 12) {
                imgs = 1
            } else {
                pacMan.style.background = 'url(video/' + imgsLevlRotation + '/' + imgs + '.png)';
                imgs++
            }
        }


    }
}
// ____________________________________________________________MOVE-KLICK______________________________________________________________
let pacMan = document.querySelector(".pac-man"),
    moveClick = 'up';
    pacMan.style.background = 'url(video/' + 1 + '/' + 1 + '.png)';
pacMan.style.top = map[0][0][0] - 50 + 'px';
pacMan.style.left = map[0][0][1] - 50 + 'px';
document.addEventListener('keydown', async function (event) {
    let locationPacMan = pacMan.getBoundingClientRect();
    let x = locationPacMan.top + 41 + window.scrollY;
    const y = locationPacMan.left + 41;
    if (event.code == 'KeyW') {
        rotations = 'up'
        await move(x, y, "up");
    }
    if (event.code == 'KeyA') {
        rotations = 'left'
        await move(x, y, "left");
    }
    if (event.code == 'KeyS') {
        rotations = 'down'
        await move(x, y, "down");
    }
    if (event.code == 'KeyD') {
        rotations = 'right'
        await move(x, y, "right");
    }
});
// ___________________________________________________________MOVE-PACMAN__________________________________________________________________
function move(x, y, rotationRef) {
    console.log(x, y, rotationRef)
}