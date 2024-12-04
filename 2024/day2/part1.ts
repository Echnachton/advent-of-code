import { getDataForDay } from "@utils";

const data = await getDataForDay("2");
const reportsStream: string[] = data.split('\n').filter((entry: string) => entry);

const reports = reportsStream.map(report => report.split(' ').map(level => parseInt(level)));

const reportsSafetyAssessment = reports.map(report => {
    let direction;
    for (let i = 0; i < report.length - 1; i++) {
        const diff = report[i] - report[i + 1];
        const currentDirection = diff > 0 ? 'desc' : 'asc';
        !direction && (direction = currentDirection);

        if (Math.abs(diff) > 3 || Math.abs(diff) < 1) {
            return false;
        }

        if (direction !== currentDirection) {
           return false;
        }
    }

    return true;
});

console.log(reportsSafetyAssessment.filter(Boolean).length);