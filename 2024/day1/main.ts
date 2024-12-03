import { getDataForDay } from "@utils";

const data = await getDataForDay("1");

const listOne: number[] = [];
const listTwo: number[] = [];

data.split(/\n/).map((pair: string) => {
    const [a, b] = pair.split(/\s+/)
    if (!!a && !!b) {
        listOne.push(parseInt(a));
        listTwo.push(parseInt(b));
    }
});

listOne.sort();
listTwo.sort();

let distance = 0;
for (let i = 0; i < listOne.length; i++) {
    distance += Math.abs(listOne[i] - listTwo[i]);
}

console.log(distance);