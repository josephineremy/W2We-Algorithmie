const fs = require('fs');

const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, list) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    console.log(list);
    list = list.split(" ").map((list) => Number(list));
    console.log(`\n`);
    console.log(`L'array initial:`);
    console.log(list);




// Tri par bulles

const byBubbles = (list) => {
    let count=0
    for (i=0; i < list.length ; i++) {
        for (j = 0; j < i; j++) {
            count++;
            if (list[j] > list[i]) {
                let temp = list[i]
                list[i] = list[j]
                list[j] = temp;
            }
        }
    }
    console.log(`\n`);
    console.log(`Le tri à bulles donne l'array suivant:`);
    console.log(list);
    console.log(`en ${count} comparaisons.`);
};

let originalList = list.slice();
byBubbles(originalList);




// Tri par insertion

const byInsertion = (list) => {
    count = 0;
    let n = list.length;
    for (i = 0; i < n; i++) {
        let x = list[i];
        let j = i - 1;
        while (j >= 0 && list[j] > x) {
            count++;
            list[j+1] = list[j];
            j = j-1;
        }
        list[j+1] = x;
    }
    console.log(`\n`);
    console.log(`Le tri par insertion donne l'array suivant:`);
    console.log(list);
    console.log(`en ${count} comparaisons.`)
};

originalList = list.slice();
byInsertion(originalList);




//Tri par sélection

const bySelection = (list) => {
    count = 0;
    let n = list.length;
    for (i = 0; i < n-1; i++){
        min = i;
        for (j = i+1; j < n;j++) {
            count++;
            if (list[j] < list[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = list[i]
            list[i] = list[min]
            list[min] = temp;
        }
    }
    console.log(`\n`);
    console.log(`Le tri par sélection donne l'array suivant:`);
    console.log(list);
    console.log(` en ${count} comparaisons. `)
};

originalList = list.slice();
bySelection(originalList);




//Tri rapide

const partition = (list, start = 0, end = list.length + 1) => {

    let pivot = list[end];
    j = start;
    for (i = start; i <= end - 1; i++) {
        if (list[i] < pivot) {
            [list[i], list[j]] = [list[j], list[i]];
            j++
        }
    };
    [list[j], pivot] = [pivot, list[j]];

    return j;
}

const quickSort = (list, start = 0, end = list.length) => {
    let index = partition(list, start, end);
    if (start >= end) {
        quickSort(list, start, index);
        quickSort(list, index + 1, end);
    }
        return list;
};

originalList = list.slice();
quickSort(originalList);




//Tri par fusion

const fusion = (left, right) => {
    let newList = [];
    count = 0;
    while (left.length && right.length){
        count++;
        if (left[0] < right[0]) {
            newList.push(left.shift());
        } else {
            newList.push(right.shift());
        }
    }
    return [...newList, ...left, ...right];
}

const byMerge = (list, n = list.length) => {
    let halfTable=n/2;

    if (n <= 1) {return list;}
    const left = list.splice(0, halfTable);
    return fusion(byMerge(left), byMerge(list));
};

console.log(`\n`);
originalList = list.slice();
console.log(`Le tri par fusion donne l'array suivant:`)
console.log(byMerge(originalList));
console.log(`en ${count} comparaisons.`);




//Tri par tas

const heapSort = (list) => {
    count = 0;
    n = list.length;
    for (let i = Math.floor(n/2)-1; i>=0; i--){
        count++;
        max_heapify(list, i, n);
    }
    for (let i = n-1; i>=0; i--) {
        count++;
        let temp = list[0];
        list[0] = list[i];
        list[i]=temp;
        max_heapify(list, 0, i);
    }
    return list;
}

const max_heapify = (list, i, n) => {
    let left = 2*i;
    let right = 2 * i + 1;
    let max;
    if (right<n) {
        if (list[left]>=list[right]) {
            max = left;
        } else {
            max = right;
        }
    }
    else if (left<n) {
        max = left;
    }
    
    else return;
    if (list[i]<list[max]) {
        let temp = list[i];
        list[i] = list[max];
        list[max]=temp;
        max_heapify(list, max, n);
    }
    return;
}

console.log(`\n`);
originalList = list.slice();
console.log(`Le tri par tas donne l'array suivant:`)
console.log(heapSort(originalList));
console.log(`en ${count} comparaisons.`);





//Tri par peigne

const combSort = (list) => {
    n = list.length;

    const isListSorted = (list) => {
        var sorted = true;
        for (let i=0; i < n;i++) {
            if (list[i] > list[i+1]) {
                sorted = false;
                break;
            }
        }
        return sorted;
    }

    shrink = 1.3;
    count = 0;
    gap = list.length - 2;

    while (!isListSorted(list)) {
        if (count > 0) 
            gap = (gap == 1) ? gap : Math.floor(gap / shrink);
        var front = 0;
        var back = gap;
        while (back <= list.length - 1) {
            if (list[front] > list[back]) {
                var temp = list[front];
                list[front]=list[back];
                list[back] = temp;
            }
            front ++;
            back ++;
        }
        count ++;
    }
    return list
}


originalList = list.slice();
console.log(`\n`);
console.log(`Le tri par peigne donne l'array suivant:`)
console.log(combSort(originalList));
console.log(`en ${count} comparaisons.`);
console.log(`\n`);
});

