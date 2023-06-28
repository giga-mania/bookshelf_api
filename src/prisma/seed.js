import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const tags = await prisma.tag.createMany({
        data: [
            {
                name: "Adventure Stories",
            },
            {
                name: "Classics",
            },
            {
                name: "Crime",
            },
            {
                name: "Fairy Tales",
            },
            {
                name: "Fantasy",
            },
            {
                name: "Historical Fiction",
            },
            {
                name: "Horror",
            },
            {
                name: "Humour and Satire",
            }
        ]
    })

    const book_tag = await prisma.book.create({
        data: {
            title: "Book of tag",
            description: "Book of tag book of tag book of tag",
            publishDate: new Date(2000, 3, 20),
            language: "Finnish",
            author: {
                create: {
                    firstName: "Brit",
                    lastName: "Lagos",
                    birthDate: new Date(1997, 2, 18)
                },
            },
            tag: {
                connect: [
                    {name: "Adventure Stories"},
                    {name: "Classics"}
                ],
            }
        }
    })

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
                },
            },
            tag: {
                connect: [
                    {name: "Fairy Tales"},
                    {name: "Fantasy"}
                ]
            }
        }
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
            },
            tag: {
                connect: [
                    {name: "Horror"},
                    {name: "Humour and Satire"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Crime"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Fantasy"},
                    {name: "Classics"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Fairy Tales"},
                    {name: "Historical Fiction"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Humour and Satire"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Adventure Stories"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Crime"},
                    {name: "Fantasy"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Fantasy"},
                    {name: "Humour and Satire"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Fantasy"},
                    {name: "Fairy Tales"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Historical Fiction"},
                    {name: "Classics"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Crime"},
                    {name: "Humour and Satire"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Fantasy"},
                    {name: "Classics"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Fairy Tales"},
                    {name: "Adventure Stories"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Horror"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Adventure Stories"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Fantasy"},
                    {name: "Crime"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Classics"},
                    {name: "Fantasy"},
                ]
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
            },
            tag: {
                connect: [
                    {name: "Classics"}
                ]
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
            },
            tag: {
                connect: [
                    {name: "Fantasy"}
                ]
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
            book: {
                create: [
                    {
                        title: 'Book of Mouse',
                        description: 'Book of Mouse Book of Mouse Book of Mouse Book of Mouse Book of Mouse',
                        publishDate: new Date(2009, 7, 12),
                        language: 'Norwegian',
                        tag: {
                            connect: {name: "Fantasy"}
                        }
                    },
                    {
                        title: 'Book of Giraffe',
                        description: 'Book of Giraffe Book of Giraffe Book of Giraffe Book of Giraffe Book of Giraffe',
                        publishDate: new Date(2011, 6, 2),
                        language: 'Caribbean',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Elephant',
                        description: 'Book of Elephant Book of Elephant Book of Elephant Book of Elephant',
                        publishDate: new Date(2009, 1, 27),
                        language: 'Portuguese',
                        tag: {
                            connect: [
                                {name: "Crime"},
                                {name: "Adventure Stories"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Lion',
                        description: 'Book of Lion Book of Lion Book of Lion Book of Lion Book of Lion',
                        publishDate: new Date(2015, 3, 8),
                        language: 'English',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Snake',
                        description: 'Book of Snake Book of Snake Book of Snake Book of Snake Book of Snake',
                        publishDate: new Date(2012, 9, 20),
                        language: 'Spanish',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Bear',
                        description: 'Book of Bear Book of Bear Book of Bear Book of Bear Book of Bear',
                        publishDate: new Date(2013, 11, 5),
                        language: 'German',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Tiger',
                        description: 'Book of Tiger Book of Tiger Book of Tiger Book of Tiger Book of Tiger',
                        publishDate: new Date(2010, 4, 15),
                        language: 'French',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Dolphin',
                        description: 'Book of Dolphin Book of Dolphin Book of Dolphin Book of Dolphin Book of Dolphin',
                        publishDate: new Date(2008, 2, 10),
                        language: 'Italian',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Owl',
                        description: 'Book of Owl Book of Owl Book of Owl Book of Owl Book of Owl',
                        publishDate: new Date(2014, 8, 25),
                        language: 'Dutch',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Monkey',
                        description: 'Book of Monkey Book of Monkey Book of Monkey Book of Monkey Book of Monkey',
                        publishDate: new Date(2007, 6, 18),
                        language: 'Swedish',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Penguin',
                        description: 'Book of Penguin Book of Penguin Book of Penguin Book of Penguin Book of Penguin',
                        publishDate: new Date(2019, 1, 3),
                        language: 'Portuguese',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Wolf',
                        description: 'Book of Wolf Book of Wolf Book of Wolf Book of Wolf Book of Wolf',
                        publishDate: new Date(2016, 11, 30),
                        language: 'Russian',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Fox',
                        description: 'Book of Fox Book of Fox Book of Fox Book of Fox Book of Fox',
                        publishDate: new Date(2005, 5, 7),
                        language: 'Japanese',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Horse',
                        description: 'Book of Horse Book of Horse Book of Horse Book of Horse Book of Horse',
                        publishDate: new Date(2018, 3, 22),
                        language: 'Korean',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Eagle',
                        description: 'Book of Eagle Book of Eagle Book of Eagle Book of Eagle Book of Eagle',
                        publishDate: new Date(2017, 7, 14),
                        language: 'Chinese',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Shark',
                        description: 'Book of Shark Book of Shark Book of Shark Book of Shark Book of Shark',
                        publishDate: new Date(2022, 9, 1),
                        language: 'Arabic',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Koala',
                        description: 'Book of Koala Book of Koala Book of Koala Book of Koala Book of Koala',
                        publishDate: new Date(2021, 10, 11),
                        language: 'Greek',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Crocodile',
                        description: 'Book of Crocodile Book of Crocodile Book of Crocodile Book of Crocodile',
                        publishDate: new Date(2019, 12, 6),
                        language: 'Spanish',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Zebra',
                        description: 'Book of Zebra Book of Zebra Book of Zebra Book of Zebra Book of Zebra',
                        publishDate: new Date(2020, 2, 18),
                        language: 'German',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    },
                    {
                        title: 'Book of Penguin',
                        description: 'Book of Penguin Book of Penguin Book of Penguin Book of Penguin Book of Penguin',
                        publishDate: new Date(2016, 8, 9),
                        language: 'French',
                        tag: {
                            connect: [
                                {name: "Fantasy"},
                                {name: "Fairy Tales"}
                            ]
                        }
                    }
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
