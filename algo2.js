list1 = [10, 15, 3, 7];
list2 = [1, 8, 10, 21]
k1 = 17;
k2 = 19;

//Exercice 1

const exercice1 = (list, k) => {
  n = list.length;
  count = 0;
  for (let i= 0; i < n-1; i++) {
    for (let j=i+1; j < n; j++) {
      count++;
      sum = list[i] + list[j];
      if (sum == k) { return true }
    }
  }
  return false;
}

console.log(`\n`)
console.log(`Exercice 1:`)
console.log(`La réponse pour le sujet 1 est:`, exercice1(list1, k1), `en`, count, `comparaisons.`)
console.log(`La réponse pour le sujet 2 est:`, exercice1(list2, k2), `en`, count, `comparaisons.`)

floorsList1 = [3, 7, 8, 3, 6, 1];
floorsList2 = [1, 4, 5, 8];

const exercice2 = (list) => {
  n=list.length;
  count = 0;
  buildings = 0;
  for (let i=0; i < n; i++) {
    enjoysSunset = 1;
    for (let j = i + 1; j < n; j++) {
      count++;
      if ( list[j] > list[i]) {
        enjoysSunset = 0;
      }
    }
    buildings += enjoysSunset;
  }
  return buildings
}

console.log(`\n`)
console.log(`Exercice 2:`)
console.log(`La réponse pour le sujet 1 est:`, exercice2(floorsList1),`en`, count, `comparaisons.`)
console.log(`La réponse pour le sujet 2 est:`, exercice2(floorsList2), `en`, count, `comparaisons.`)

//Exercice 3

const exercice3 = (list, k, index = 0) => {
  if(index>list.length-1) {
    return;
  } 
  else { 
    count = 0;
    for (let i = index + 1; i < list.length; i++) {
    const result = list[index] + list[i];
      if (result == k) {
        return true;
      }
      count++;
    }
  }
  exercice3(list, k, index + 1);
  return false;
}

console.log(`\n`)
console.log(`Exercice 3:`)
console.log(`La réponse pour le sujet 1 est:`, exercice3(list1, k1),`en`, count, `comparaisons.`)
console.log(`La réponse pour le sujet 2 est:`, exercice3(list2, k2),`en`, count, `comparaisons.`)

//Exercice 4

const exercice4 = (list, index = list.length - 1) => {
  if (index == 2) {
    return false;
  } else {
    count = 0;
    buildings = 1;
    for (let i = index - 1; i > 0; i--) {
      count++;
      if (list[i] > list[index]) {
        buildings += 1;
      }
      buildings 
    }
  }
  exercice4(list, index - 1)
  return buildings;
}

console.log(`\n`)
console.log(`Exercice 4:`)
console.log(`La réponse pour le sujet 1 est:`, exercice4(floorsList1), `en`, count, `comparaisons.`)
console.log(`La réponse pour le sujet 2 est:`, exercice4(floorsList2), `en`, count, `comparaisons.`)

//Exercice 5

const exercice5 = (list, k) => {
  n = list.length;
  count = 0;
  for (let i=0; i < n; i++) {
    count++;
    if (list.find(x => x == (k - list[i]))) {
      return true
    }
    return false
  }
}

console.log(`\n`)
console.log(`Exercice 5:`)
console.log(`La réponse pour le sujet 1 est:`, exercice5(list1, k1), `en`, count, `comparaisons.`)
console.log(`La réponse pour le sujet 2 est:`, exercice5(list2, k2), `en`, count, `comparaisons.`)

//Exercice 6

const exercice6 = (list) => {
  buildings = 1;
  count = 0;
  lastIndex = list[list.length - 1];
  for (let i = list.length - 2; i >= 0; i--) {
    count++;
    if (list[i] > lastIndex) {
      lastIndex = list[i];
      buildings += 1;
    }
  }
  return buildings
}

console.log(`\n`)
console.log(`Exercice 6:`)
console.log(`La réponse pour le sujet 1 est:`, exercice6(floorsList1), `en`, count, `comparaisons.`)
console.log(`La réponse pour le sujet 2 est:`, exercice6(floorsList2), `en`, count, `comparaisons.`)