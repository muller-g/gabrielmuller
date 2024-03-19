import {notFound} from "next/navigation";

export default async function fetchData(path) {
    const res = await fetch(process.env.NEXT_PUBLIC_API + path, {
        next: {revalidate: 10},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN
        },
        method: 'GET'
    })

    if (!res.ok) {
        notFound()
    }

    return res.json()
}
 