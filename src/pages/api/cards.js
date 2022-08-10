import prisma from "../../utils/prisma"

// GET

export default async (req, res) => {
    const query = req.query
    console.log(query)
    try {
        const cards = await prisma.card.findMany({
            orderBy: {
                id: "asc"
            },
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