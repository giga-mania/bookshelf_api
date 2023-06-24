import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    prisma.book.createMany()
    const book_a = await prisma.book.upsert({
        where: {id: "bc"},
        update: {},
        create: {
            title: 'Book of Legend',
            description: 'Book of legend Book of legend Book of legend Book of legend Book of legend Book of legend ',
            publishDate: new Date(2000, 3, 20),
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
            publishDate: new Date(2006, 7, 12),
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

    const book_c = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Legendary Tales',
            description: 'Legendary tales Legendary tales Legendary tales Legendary tales',
            publishDate: new Date(2011, 5, 10),
            language: 'English',
            author: {
                create: {
                    firstName: 'John',
                    lastName: 'Smith',
                    birthDate: new Date(1980, 8, 2)
                }
            }
        }
    })

    const book_d = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Legends Unleashed',
            description: 'Legends unleashed Legends unleashed Legends unleashed Legends unleashed',
            publishDate: new Date(2014, 9, 5),
            language: 'Spanish',
            author: {
                create: {
                    firstName: 'Maria',
                    lastName: 'Garcia',
                    birthDate: new Date(1975, 3, 14)
                }
            }
        }
    })

    const book_e = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Mythical Scriptures',
            description: 'Mythical scriptures Mythical scriptures Mythical scriptures Mythical scriptures',
            publishDate: new Date(2007, 7, 1),
            language: 'German',
            author: {
                create: {
                    firstName: 'Emma',
                    lastName: 'Müller',
                    birthDate: new Date(1989, 10, 30)
                }
            }
        }
    })

    const book_f = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Epic Legends',
            description: 'Epic legends Epic legends Epic legends Epic legends Epic legends',
            publishDate: new Date(2012, 2, 15),
            language: 'French',
            author: {
                create: {
                    firstName: 'Alexandre',
                    lastName: 'Dupont',
                    birthDate: new Date(1985, 4, 7)
                }
            }
        }
    })

    const book_g = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Enigmatic Myths',
            description: 'Enigmatic myths Enigmatic myths Enigmatic myths Enigmatic myths',
            publishDate: new Date(2005, 11, 25),
            language: 'Italian',
            author: {
                create: {
                    firstName: 'Giulia',
                    lastName: 'Ricci',
                    birthDate: new Date(1992, 7, 21)
                }
            }
        }
    })

    const book_h = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Secrets of Legend',
            description: 'Secrets of legend Secrets of legend Secrets of legend Secrets of legend',
            publishDate: new Date(2018, 1, 12),
            language: 'Dutch',
            author: {
                create: {
                    firstName: 'Hugo',
                    lastName: 'Janssen',
                    birthDate: new Date(1982, 9, 10)
                }
            }
        }
    })

    const book_i = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Ancient Tales',
            description: 'Ancient tales Ancient tales Ancient tales Ancient tales',
            publishDate: new Date(2010, 4, 30),
            language: 'Swedish',
            author: {
                create: {
                    firstName: 'Erik',
                    lastName: 'Andersson',
                    birthDate: new Date(1986, 3, 16)
                }
            }
        }
    })

    const book_j = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Mysteries of Myth',
            description: 'Mysteries of myth Mysteries of myth Mysteries of myth Mysteries of myth',
            publishDate: new Date(2003, 10, 8),
            language: 'Portuguese',
            author: {
                create: {
                    firstName: 'Ana',
                    lastName: 'Santos',
                    birthDate: new Date(1990, 6, 25)
                }
            }
        }
    })

    const book_k = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Mythical Chronicles',
            description: 'Mythical chronicles Mythical chronicles Mythical chronicles Mythical chronicles',
            publishDate: new Date(2009, 8, 20),
            language: 'English',
            author: {
                create: {
                    firstName: 'Robert',
                    lastName: 'Johnson',
                    birthDate: new Date(1983, 6, 5)
                }
            }
        }
    })

    const book_l = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Legends of the Past',
            description: 'Legends of the past Legends of the past Legends of the past Legends of the past',
            publishDate: new Date(2013, 4, 15),
            language: 'Spanish',
            author: {
                create: {
                    firstName: 'Isabella',
                    lastName: 'Lopez',
                    birthDate: new Date(1979, 10, 18)
                }
            }
        }
    })

    const book_m = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Mystic Prophecies',
            description: 'Mystic prophecies Mystic prophecies Mystic prophecies Mystic prophecies',
            publishDate: new Date(2006, 2, 1),
            language: 'German',
            author: {
                create: {
                    firstName: 'Maximilian',
                    lastName: 'Schmidt',
                    birthDate: new Date(1992, 1, 23)
                }
            }
        }
    })

    const book_n = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Tales of Legends',
            description: 'Tales of legends Tales of legends Tales of legends Tales of legends',
            publishDate: new Date(2011, 7, 10),
            language: 'French',
            author: {
                create: {
                    firstName: 'Charlotte',
                    lastName: 'Martin',
                    birthDate: new Date(1988, 3, 9)
                }
            }
        }
    })

    const book_o = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Enchanted Myths',
            description: 'Enchanted myths Enchanted myths Enchanted myths Enchanted myths',
            publishDate: new Date(2004, 5, 25),
            language: 'Italian',
            author: {
                create: {
                    firstName: 'Marco',
                    lastName: 'Rossi',
                    birthDate: new Date(1995, 9, 14)
                }
            }
        }
    })

    const book_p = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Legendary Secrets',
            description: 'Legendary secrets Legendary secrets Legendary secrets Legendary secrets',
            publishDate: new Date(2017, 10, 12),
            language: 'Dutch',
            author: {
                create: {
                    firstName: 'Sophie',
                    lastName: 'De Vries',
                    birthDate: new Date(1984, 2, 28)
                }
            }
        }
    })

    const book_q = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Mythical Sagas',
            description: 'Mythical sagas Mythical sagas Mythical sagas Mythical sagas',
            publishDate: new Date(2009, 2, 28),
            language: 'Swedish',
            author: {
                create: {
                    firstName: 'Oliver',
                    lastName: 'Lindberg',
                    birthDate: new Date(1987, 7, 3)
                }
            }
        }
    })

    const book_r = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: "The Legend's Path",
            description: "The legend's path The legend's path The legend's path The legend's path",
            publishDate: new Date(2002, 9, 8),
            language: 'Portuguese',
            author: {
                create: {
                    firstName: 'Sofia',
                    lastName: 'Silva',
                    birthDate: new Date(1991, 4, 11)
                }
            }
        }
    })

    const book_s = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Mythology Unveiled',
            description: 'Mythology unveiled Mythology unveiled Mythology unveiled Mythology unveiled',
            publishDate: new Date(2014, 1, 15),
            language: 'Russian',
            author: {
                create: {
                    firstName: 'Dmitri',
                    lastName: 'Ivanov',
                    birthDate: new Date(1981, 8, 27)
                }
            }
        }
    })

    const book_t = await prisma.book.upsert({
        where: {id: "ab"},
        update: {},
        create: {
            title: 'Epic Legends Reborn',
            description: 'Epic legends reborn Epic legends reborn Epic legends reborn Epic legends reborn',
            publishDate: new Date(2016, 6, 5),
            language: 'Chinese',
            author: {
                create: {
                    firstName: 'Li',
                    lastName: 'Chen',
                    birthDate: new Date(1986, 12, 3)
                }
            }
        }
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
                        publishDate: new Date(2009, 7, 12),
                        language: "Norwegian",
                    },
                    {
                        title: 'Book of Giraffe',
                        description: 'Book of Giraffe Book of Giraffe Book of Giraffe Book of Giraffe Book of Giraffe',
                        publishDate: new Date(2011, 6, 2),
                        language: "Caribbean",
                    },
                    {
                        title: 'Book of Elephant',
                        description: 'Book of Elephant Book of Elephant Book of Elephant Book of Elephant',
                        publishDate: new Date(2009, 1, 27),
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
