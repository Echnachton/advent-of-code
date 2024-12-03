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

const countCache: Record<number, number> = {};
listTwo.map(pos => {
    if (Object.hasOwn(countCache, pos)) {
        countCache[pos] += 1;
    } else {
        countCache[pos] = 1;
    }
});

let similarity = 0;
for (let i = 0; i < listOne.length; i++) {
    const modifier = countCache[listOne[i]] ?? 0;
    console.log(listOne[i], modifier)
    similarity += listOne[i] * modifier;
}

console.log(similarity)
