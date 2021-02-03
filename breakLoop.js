const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numb.length; i++){
    if (numb[i] > 5){
        break;
    }
    console.log(numb[i]);
}

for (let i = 0; i < numb.length; i++){
    if (numb[i] % 3 == 0){
        continue;
    }
    console.log(numb[i]);
}