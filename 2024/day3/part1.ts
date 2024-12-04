import { getDataForDay } from "@utils";

const data: string = await getDataForDay("3");
const regexp = new RegExp(/mul\(\d{1,3},\d{1,3}\)/, "gm");
const matches = data.match(regexp);

const sum = matches?.reduce((acc, expression) => {
    return acc += resolveExpression(expression)
}, 0);

console.log(sum);

function resolveExpression(expression: string) {
    const regexp = new RegExp(/\d{1,3}/, "g");
    const matches = expression.match(regexp);

    if (matches) {
        return parseInt(matches[0]) * parseInt(matches[1]);
    }

    throw new Error(`Invalid expression: ${expression}`);
}