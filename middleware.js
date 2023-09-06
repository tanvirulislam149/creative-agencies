import { NextResponse } from 'next/server'

export function middleware(request) {
  const user = request.cookies.get('user')?.value;
  const admin = request.cookies.get('admin')?.value;

  if (request.nextUrl.pathname === "/dashboard/addService" || request.nextUrl.pathname === "/dashboard/adminMaking" || request.nextUrl.pathname === "/dashboard/allServiceList" || request.nextUrl.pathname === "/dashboard/deleteService") {
    if (!(user && admin)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  if (request.nextUrl.pathname === "/dashboard/addOrder" || request.nextUrl.pathname === "/dashboard/myOrders" || request.nextUrl.pathname === "/dashboard/addReview") {
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

}