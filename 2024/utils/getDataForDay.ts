import "jsr:@std/dotenv/load";

const kv = await Deno.openKv();

export async function getDataForDay(day: string) {
    const cacheEntry = await kv.get([day]);

    if (cacheEntry.value) {
        return cacheEntry.value;
    }

    const secret = Deno.env.get("NOTHING_TO_SEE_HERE");
    const headers = new Headers();

    if (!secret) {
        throw new Error("no session key was found");
    }

    headers.append('Cookie', secret);

    const updatedInit: RequestInit = {
        headers
    }
    const response = await fetch(
        `https://adventofcode.com/2024/day/${day}/input`,
        updatedInit
    );
    
    const contentType = response.headers.get('content-type');

    let data;
    if (contentType === 'application/json') {
        data = await response.json();
    }

    if (contentType?.includes('text')) {
        data = await response.text();
    }

    await kv.set([day], data);
    return data
}