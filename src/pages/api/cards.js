import prisma from "../../utils/prisma"

// GET

export default async (req, res) => {
    const query = req.query
    const pageSkip = (parseInt(query.page) - 1) * 8 || 0
    try {
        const cards = await prisma.card.findMany({
            skip: pageSkip,
            take: 8,
            orderBy: {
                id: "asc"
            },
            where: {
                AND: [{
                        cardAffinity: query.affinity
                    },
                    {
                        cardType: query.type
                    },
                    {
                        name: {
                            contains: query.search
                        }
                    }
                ]
            }
        })
        const totalCards = await prisma.card.count({
            where: {
                AND: [{
                        cardAffinity: query.affinity
                    },
                    {
                        cardType: query.type
                    },
                    {
                        name: {
                            contains: query.search
                        }
                    }
                ]
            }
        })
        return res.status(200).json({
            cards,
            totalCards
        }, {
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