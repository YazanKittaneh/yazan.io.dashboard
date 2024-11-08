import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler( async (event) => {
    const data = await prisma.stores.findFirst()
     
    return {
        address: data?.address,
        name: data?.title,
    }
}
)