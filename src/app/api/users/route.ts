import {NextRequest, NextResponse} from "next/server";

export default function GET(request: NextRequest) {
    const greeting = "Hello World!!"
    const json = {
        greeting
    };
    
    return NextResponse.json(json);
}