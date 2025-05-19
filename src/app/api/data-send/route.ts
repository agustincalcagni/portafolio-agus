import { supabase } from "@/app/supabase/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, lastName, email, message, city, country, ip } = await req.json();

  if (req.method !== "POST") {
    return NextResponse.json({ message: "Request method not allowed" }, { status: 405 });
  }
  
  try {
    const objectData = { name, lastName, email, message, city, country, ip };
    const { error } = await supabase.from("contacto_agus").insert([objectData]);
    if (error) throw new Error(error.message);
  } catch (error) {
    return NextResponse.json({
      message: "Server error" + (error as TypeError).message,
    }, { status: 500 });
  }
}
