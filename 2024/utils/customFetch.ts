import "jsr:@std/dotenv/load";

export async function customFetch([input, init]: Parameters<typeof fetch>) {
    const secret = Deno.env.get("NOTHING_TO_SEE_HERE");
    const headers = new Headers();

    if (!secret) {
        throw new Error("no session key was found");
    }

    headers.append('cookies', secret);

    const updatedInit: RequestInit = {
        ...init,
        headers
    }
    const response = await fetch(input, updatedInit);
    const contentType = response.headers.get('content-type');

    if (contentType === 'application/json') {
        return await response.json();
    }

    if (contentType?.includes('text')) {
        return await response.text();
    }
}