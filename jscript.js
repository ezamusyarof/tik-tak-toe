let score = 0;
let score_bot = 0;
let urutan = [0,0,0,0,0,0,0,0,0];
let pilihanX = [0,0,0,0,0,0,0,0,0];
let pilihanO = [0,0,0,0,0,0,0,0,0];
let reset_true = false;
let status = false;

function reset(){
    for (let i=1; i<10; i++){
        document.getElementById(i).className = "si-x";
        document.querySelector('#btn-'+i).disabled = false;
        document.getElementById(i).innerHTML = "X";
    }
    document.getElementById('4').className = "si-x";
    document.querySelector('#btn-4').disabled = false;
    urutan = [0,0,0,0,0,0,0,0,0];
    pilihanX = [0,0,0,0,0,0,0,0,0];
    pilihanO = [0,0,0,0,0,0,0,0,0];
    reset_true = true;
    status = false;
}

function sisa(){
    let int_sisa = 9;
    for (let i=0; i<9; i++){
        int_sisa = int_sisa - urutan[i];
    }
    return int_sisa;
}

function cek(){
    // kondisi jika benar, maka x menang
    if (
        ((pilihanX[0]==1)&&(pilihanX[1]==1)&&(pilihanX[2]==1)) ||
        ((pilihanX[3]==1)&&(pilihanX[4]==1)&&(pilihanX[5]==1)) ||
        ((pilihanX[6]==1)&&(pilihanX[7]==1)&&(pilihanX[8]==1)) ||
        ((pilihanX[0]==1)&&(pilihanX[3]==1)&&(pilihanX[6]==1)) ||
        ((pilihanX[1]==1)&&(pilihanX[4]==1)&&(pilihanX[7]==1)) ||
        ((pilihanX[2]==1)&&(pilihanX[5]==1)&&(pilihanX[8]==1)) ||
        ((pilihanX[0]==1)&&(pilihanX[4]==1)&&(pilihanX[8]==1)) ||
        ((pilihanX[2]==1)&&(pilihanX[4]==1)&&(pilihanX[6]==1))
    ){
        score++;
        document.getElementById('user').innerHTML = score;
        setTimeout(() => reset(), 1000);
        status = true;
    } else if (
        ((pilihanO[0]==1)&&(pilihanO[1]==1)&&(pilihanO[2]==1)) ||
        ((pilihanO[3]==1)&&(pilihanO[4]==1)&&(pilihanO[5]==1)) ||
        ((pilihanO[6]==1)&&(pilihanO[7]==1)&&(pilihanO[8]==1)) ||
        ((pilihanO[0]==1)&&(pilihanO[3]==1)&&(pilihanO[6]==1)) ||
        ((pilihanO[1]==1)&&(pilihanO[4]==1)&&(pilihanO[7]==1)) ||
        ((pilihanO[2]==1)&&(pilihanO[5]==1)&&(pilihanO[8]==1)) ||
        ((pilihanO[0]==1)&&(pilihanO[4]==1)&&(pilihanO[8]==1)) ||
        ((pilihanO[2]==1)&&(pilihanO[4]==1)&&(pilihanO[6]==1))
    ){
        score_bot++;
        document.getElementById('bot').innerHTML = score_bot;
        setTimeout(() => reset(), 1000);
        status = true;
    }
}

function pilihO(x){
    let y;
    if (urutan == [1,1,1,1,1,1,1,1,1]) { reset(); }
    else if (pilihanO[0]==1 && pilihanO[1]==1 && urutan[2]==0){ y = 3; }
    else if (pilihanO[1]==1 && pilihanO[2]==1 && urutan[0]==0){ y = 1; }
    else if (pilihanO[0]==1 && pilihanO[2]==1 && urutan[1]==0){ y = 2; }
    else if (pilihanO[3]==1 && pilihanO[4]==1 && urutan[5]==0){ y = 6; }
    else if (pilihanO[4]==1 && pilihanO[5]==1 && urutan[3]==0){ y = 4; }
    else if (pilihanO[3]==1 && pilihanO[5]==1 && urutan[4]==0){ y = 5; }
    else if (pilihanO[6]==1 && pilihanO[7]==1 && urutan[8]==0){ y = 9; }
    else if (pilihanO[7]==1 && pilihanO[8]==1 && urutan[6]==0){ y = 7; }
    else if (pilihanO[6]==1 && pilihanO[8]==1 && urutan[7]==0){ y = 8; }

    else if (pilihanO[0]==1 && pilihanO[3]==1 && urutan[6]==0){ y = 7; }
    else if (pilihanO[0]==1 && pilihanO[6]==1 && urutan[3]==0){ y = 4; }
    else if (pilihanO[3]==1 && pilihanO[6]==1 && urutan[0]==0){ y = 1; }
    else if (pilihanO[1]==1 && pilihanO[4]==1 && urutan[7]==0){ y = 8; }
    else if (pilihanO[1]==1 && pilihanO[7]==1 && urutan[4]==0){ y = 5; }
    else if (pilihanO[4]==1 && pilihanO[7]==1 && urutan[1]==0){ y = 2; }
    else if (pilihanO[2]==1 && pilihanO[5]==1 && urutan[8]==0){ y = 9; }
    else if (pilihanO[2]==1 && pilihanO[8]==1 && urutan[5]==0){ y = 6; }
    else if (pilihanO[5]==1 && pilihanO[8]==1 && urutan[2]==0){ y = 3; }

    else if (pilihanO[0]==1 && pilihanO[4]==1 && urutan[8]==0){ y = 9; }
    else if (pilihanO[0]==1 && pilihanO[8]==1 && urutan[4]==0){ y = 5; }
    else if (pilihanO[4]==1 && pilihanO[8]==1 && urutan[0]==0){ y = 1; }
    else if (pilihanO[2]==1 && pilihanO[4]==1 && urutan[6]==0){ y = 7; }
    else if (pilihanO[2]==1 && pilihanO[6]==1 && urutan[4]==0){ y = 5; }
    else if (pilihanO[4]==1 && pilihanO[6]==1 && urutan[2]==0){ y = 3; }

    else if (pilihanX[0]==1 && pilihanX[1]==1 && urutan[2]==0){ y = 3; }
    else if (pilihanX[1]==1 && pilihanX[2]==1 && urutan[0]==0){ y = 1; }
    else if (pilihanX[0]==1 && pilihanX[2]==1 && urutan[1]==0){ y = 2; }
    else if (pilihanX[3]==1 && pilihanX[4]==1 && urutan[5]==0){ y = 6; }
    else if (pilihanX[4]==1 && pilihanX[5]==1 && urutan[3]==0){ y = 4; }
    else if (pilihanX[3]==1 && pilihanX[5]==1 && urutan[4]==0){ y = 5; }
    else if (pilihanX[6]==1 && pilihanX[7]==1 && urutan[8]==0){ y = 9; }
    else if (pilihanX[7]==1 && pilihanX[8]==1 && urutan[6]==0){ y = 7; }
    else if (pilihanX[6]==1 && pilihanX[8]==1 && urutan[7]==0){ y = 8; }

    else if (pilihanX[0]==1 && pilihanX[3]==1 && urutan[6]==0){ y = 7; }
    else if (pilihanX[0]==1 && pilihanX[6]==1 && urutan[3]==0){ y = 4; }
    else if (pilihanX[3]==1 && pilihanX[6]==1 && urutan[0]==0){ y = 1; }
    else if (pilihanX[1]==1 && pilihanX[4]==1 && urutan[7]==0){ y = 8; }
    else if (pilihanX[1]==1 && pilihanX[7]==1 && urutan[4]==0){ y = 5; }
    else if (pilihanX[4]==1 && pilihanX[7]==1 && urutan[1]==0){ y = 2; }
    else if (pilihanX[2]==1 && pilihanX[5]==1 && urutan[8]==0){ y = 9; }
    else if (pilihanX[2]==1 && pilihanX[8]==1 && urutan[5]==0){ y = 6; }
    else if (pilihanX[5]==1 && pilihanX[8]==1 && urutan[2]==0){ y = 3; }

    else if (pilihanX[0]==1 && pilihanX[4]==1 && urutan[8]==0){ y = 9; }
    else if (pilihanX[0]==1 && pilihanX[8]==1 && urutan[4]==0){ y = 5; }
    else if (pilihanX[4]==1 && pilihanX[8]==1 && urutan[0]==0){ y = 1; }
    else if (pilihanX[2]==1 && pilihanX[4]==1 && urutan[6]==0){ y = 7; }
    else if (pilihanX[2]==1 && pilihanX[6]==1 && urutan[4]==0){ y = 5; }
    else if (pilihanX[4]==1 && pilihanX[6]==1 && urutan[2]==0){ y = 3; }

    else {
        let total = 0;
        for (let j=0; j<9; j++){
            if (urutan[j]==1){
                total++;
            }
        }
        // document.getElementById('ngetes1').innerHTML = 'Pilihan O : '+ total;
        // document.getElementById('ngetes2').innerHTML = 'Pilihan O : '+ urutan;

        while (sisa()!=0){
            y = Math.floor(Math.random() * 10);
            if (0==urutan[y-1]){
                break;
            }
        }
    }

    document.getElementById(y).className = "si-o";
    document.getElementById(y).innerHTML = "O";
    document.querySelector('#btn-'+y).disabled = true;
    pilihanO[y-1] = 1;
    urutan[y-1] = 1;
    cek();
    if (sisa() == 0) {
        setTimeout(() => reset(), 1200);
    }
}

function pilihX(x){
    document.getElementById(x).className = "si-x-fix";
    document.querySelector('#btn-'+x).disabled = true;
    pilihanX[x-1] = 1;
    urutan[x-1] = 1;
    cek();

    if (sisa() == 0) {
        setTimeout(() => reset(), 500);
    } else if (status == false) {
        setTimeout(() => pilihO(x), 500);
        if (sisa() == 0) {
            setTimeout(() => reset(), 1200);
        }
        document.getElementById('user').innerHTML = score;
        document.getElementById('bot').innerHTML = score_bot;
    }
}

function reset_score(){
    score = 0;
    score_bot = 0;
    document.getElementById('user').innerHTML = score;
    document.getElementById('bot').innerHTML = score_bot;
}