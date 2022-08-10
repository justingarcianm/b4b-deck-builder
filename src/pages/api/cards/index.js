import {
    prisma
} from "../../../utils/prisma";

export default async function handler(req, res) {
    const query = req.query
    try {
        const cards = await prisma.card.findMany({
            orderBy: {
                id: "asc"
            },
            where: {
                AND: [{
                    cardAffinity: {
                        equals: query.affinity,
                    },
                    cardType: {
                        equals: query.type
                    },
                    name: {
                        contains: query.search
                    }
                }]
            }
        })
        return res.status(200).json(cards, {
            success: true
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Error reading Cards from DB",
            success: false
        })
    }
}