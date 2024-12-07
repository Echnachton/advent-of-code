// WIP
// import { getDataForDay } from "@utils";

// const data: string = await getDataForDay("3");

// const regexpToGetActiveExpressions = new RegExp(/do\(\).*?don't\(\)/, 'gm');
// const regexpForStartToFirstDisable = new RegExp(/^.*?don't\(\)/, 'gm');
// const activeExpressionMatches = data.match(regexpToGetActiveExpressions);
// const startToFirstDisableMatches = data.match(regexpForStartToFirstDisable);

// const matches = [...activeExpressionMatches ?? [], ...startToFirstDisableMatches ?? []];

// const expressions = matches?.map(match => extractExpression(match)).flat(1);

// const sum = expressions?.reduce((acc, expression) => {
//     return acc += resolveExpression(expression)
// }, 0);

// console.log(sum);

// function extractExpression(data: string) {
//     const regexp = new RegExp(/mul\(\d{1,3},\d{1,3}\)/, "gm");
//     const matches = data.match(regexp);

//     if (!matches) {
//         throw new Error(`Invalid data: ${data}`);
//     }

//     return matches;
// }

// function resolveExpression(expression: string) {
//     const regexp = new RegExp(/\d{1,3}/, "g");
//     const matches = expression.match(regexp);

//     if (matches) {
//         return parseInt(matches[0]) * parseInt(matches[1]);
//     }

//     throw new Error(`Invalid expression: ${expression}`);
// }