// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_QAXKgknX_5UrTuSWUWtkuPLUQ9dsSTc5n");

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json();
  console.log(name, email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "Noreply <onboarding@resend.dev>",
      to: ["mateodonino@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>{message}</p>
          <h4>Email: {email}</h4>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

/*
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "nextjs@example.com",
      to: "mateodonino@gmail.com",
      subject: "Hello from Portfolio Web",
      html: "<h1>Hello</h1>",
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
*/
