import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()


async function main() {
    try {
        const note = await prisma.note.findUnique({
            where: {
                id: "8137086a-6ee3-483a-a036-b98858cb1ac6"
            }
        })

        const book = await prisma.book.findUnique({
            where: {
                id: "3d8a2978-63b7-4df6-95ba-3f590f5d91d4"
            }
        })
    } catch (err) {

    }
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

