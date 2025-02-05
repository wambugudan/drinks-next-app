// import { NextResponse } from "next/server"
// import {clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// const isPublicRoute = createRouteMatcher([
//     '/sign-in(.*)',
//     '/sign-up(.*)'
// ])

// export default clerkMiddleware(async (auth, request) => {
//     if (!isPublicRoute(request)) {
//         await auth.protect()
//     }
// });

// export function middleware(request) {
//     // console.log('Working ...');
//     return NextResponse.redirect(new URL('/', request.url));
// };

// // export const config = {
// //     matcher: [
// //         '/about/:path*',
// //         // // Skip Next.js internals and all static files, unless found in search params
// //         // '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// //         // // Always run for API routes
// //         // '/(api|trpc)(.*)',
// //     ]
// // }

// export const config = {
//     matcher: [
//       "/((?!_next/static|_next/image|favicon.ico|public|api/webhooks/clerk).*)", 
//       "/about/:path*", // Protect only /about and subpaths
//     ],
//   };


import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)'
]);

export default clerkMiddleware(async (auth, request) => {
    if (!isPublicRoute(request)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [
      "/((?!_next/static|_next/image|favicon.ico|public|api/webhooks/clerk).*)", 
      "/about/:path*", // Protect only /about and subpaths
    ],
};
