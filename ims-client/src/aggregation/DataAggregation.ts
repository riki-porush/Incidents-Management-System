import { IIncident } from "../IncidentsType";

function aggregateData<T>(
    data: T[],
    key: keyof T,
    condition: (item: T) => T,
): Record<string, number> {
    const aggregatedData: Record<string, number> = {};

    data.forEach((item) => {
        const keyValue = item[key];
         if (condition(item)) {
            if (!aggregatedData[key]) {
                aggregatedData[key] = 0;
            }
            aggregatedData[key]++;
        }
    });

    return aggregatedData;
}

const arr: IIncident = [
    {
        id: '123',
        name: 'aaa',
        status: true,
        description: 'a neww',
        priority: 'p1',
        date: 1 / 11 / 2002,
        type: 'a',
        durationFault: 'aaa',
        caringTeam: 'av',
        cost: 100
    },
    {
        id: '236',
        name: 'bbb',
        status: false,
        description: 'b neww',
        priority: 'p2',
        date: 21 / 11 / 2012,
        type: 'b',
        durationFault: 'bb',
        caringTeam: 'bv',
        cost: 200
    }
]
const aggregatedData = aggregateData(
    arr,
    status,
    (arr) => arr.status == true

);















function countMatchingElements<T, K extends keyof T>(
    data: T[],
    field: K,
    condition: (value: T[K]) => boolean
): number {
    let aggregationData = 0;

    for (const item of data) {
        if (condition(item[field])) {
            aggregationData++;
        }
    }

    return aggregationData;
}
