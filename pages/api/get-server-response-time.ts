import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    responseTime: number | null
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    const { url } = req.query;

    let data: Data = {
        responseTime: null
    }

    try {
        const responseTimeStart = new Date().getTime();
        const response = await fetch(url as string);
        const responseTime = new Date().getTime() - responseTimeStart;

        if (response.ok) {
            data.responseTime = responseTime;
        }
    } catch (e) {}

    res.status(200).json(data)
}
