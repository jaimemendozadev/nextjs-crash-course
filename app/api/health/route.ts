'use server';
// @ts-nocheck

/****************************************** 
 *  GET API Callback
 ****************************************** 
*/

import { NextResponse } from 'next/server';


export async function GET() {
  const data = { message: "I'm ok. 👍🏽" };
  return NextResponse.json(data, { status: 200 });
}






/*****************************************************
 *  DELETE API Callback with await params example
 ***************************************************** 


import { NextResponse } from 'next/server';


export async function DELETE(
  request,
  { params }
) {


  try {
    const { fileID } = await params;


    return NextResponse.json(
        { status: 200, message: 'Your message was successfully deleted.' },
        { status: 200 }
      );


  } catch (error) {

    console.log(`Error in DELETE callback `, error);

    return NextResponse.json(
      {
        status: 500,
        message: `There was a problem deleting the resource. Try again later.`
      },
      { status: 500 }
    );
  }
}





// Next.js API Routes Docs: https://nextjs.org/docs/app/guides/migrating/app-router-migration#api-routes


*/
