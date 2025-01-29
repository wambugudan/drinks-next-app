import { NextResponse } from "next/server"

export function middleware(request) {
    // console.log('Working ...');
    return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
    matcher: ['/about/:path*']
}

