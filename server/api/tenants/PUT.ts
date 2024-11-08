import { CalendarDateTime } from "@internationalized/date"
import { Community, PrismaClient, tenant } from "@prisma/client"
import { object } from "zod"
import prisma from "~/lib/prisma"

const db = new PrismaClient()

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    // Assuming the body contains the new tenant data
    const newTenant: tenant = body;

    const data = await db.tenant.create({
        data: newTenant
})
    return {
        result: "SUCESS"
    }
}
)