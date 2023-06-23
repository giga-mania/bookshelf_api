import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const book_a = await prisma.book.upsert({
        where: {id: "bc"},
        update: {},
        create: {
            title: 'Book of Legend',
            description: 'Book of legend Book of legend Book of legend Book of legend Book of legend Book of legend ',
            publish_date: new Date(2000, 3, 20),
            language: "Finnish",
            author: {
                create: {
                    firstName: "Brit",
                    lastName: "Lagos",
                    birthDate: new Date(1997, 2, 18)
                }
            }
        },
    })

    const book_b = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Book of Uprising',
            description: 'Book of Uprising Book of Uprising Book of Uprising Book of Uprising Book of Uprising Book of Uprising',
            publish_date: new Date(2006, 7, 12),
            language: "Swedish",
            author: {
                create: {
                    firstName: "Hilal",
                    lastName: "Moreno",
                    birthDate: new Date(1987, 9, 24)
                }
            }
        },
    })


    const author_a = await prisma.author.upsert({
        where: {id: "mc"},
        update: {},
        create: {
            firstName: "Kennedy",
            lastName: "Wembley",
            birthDate: new Date(2004, 12, 31),
            Book: {
                create: [
                    {
                        title: 'Book of Mouse',
                        description: 'Book of Mouse Book of Mouse Book of Mouse Book of Mouse Book of Mouse',
                        publish_date: new Date(2009, 7, 12),
                        language: "Norwegian",
                    },
                    {
                        title: 'Book of Giraffe',
                        description: 'Book of Giraffe Book of Giraffe Book of Giraffe Book of Giraffe Book of Giraffe',
                        publish_date: new Date(2011, 6, 2),
                        language: "Caribbean",
                    },
                    {
                        title: 'Book of Elephant',
                        description: 'Book of Elephant Book of Elephant Book of Elephant Book of Elephant',
                        publish_date: new Date(2009, 1, 27),
                        language: "Portuguese",
                    },
                ]
            }
        }
    })
    console.log({book_a, book_b, author_a})
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
