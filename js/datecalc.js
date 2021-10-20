import { DateTime } from "./luxon.js"; // 1

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0]; // 2

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

// 3
export const diffToHtml = diff => `
    <span>
        ${diff.years ? 'Лет: ' + diff.years : ''}
        ${diff.months ? 'Месяцев: ' + diff.months : ''}
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;
