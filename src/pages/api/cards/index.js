import {
    prisma
} from "../../../utils/prisma";

export default async function handler(req, res) {
    // const query = req.query.prisma

    try {
        const cards = await prisma.cards.findMany()
        return res.status(200).json(cards, {
            success: true
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Error reading products from DB",
            success: false
        })
    }
}