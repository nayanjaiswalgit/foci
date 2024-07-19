import { NextResponse } from "next/server";

export default function GET(requests : string) {
    return NextResponse.json({message : "data found"})
}