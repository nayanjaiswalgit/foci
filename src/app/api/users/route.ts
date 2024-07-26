import { PrismaClient } from "@prisma/client/extension";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({'message' : 'HELLO User!'});
}

export async function POST(request:NextRequest){
    const prisma = new PrismaClient;
    const user = await prisma.User.create({
        data: {
          email: 'elsa@prisma.io',
          name: 'Elsa Prisma',
        },
      });     
    return NextResponse.json({'message' : 'Successfully created User!'}) 
}

