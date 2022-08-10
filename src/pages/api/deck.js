import prisma from "../../utils/prisma"

// POST,GET,UPDATE,DELETE

export default async (req, res) => {
    res.status(200).json({
        up: true
    })
}