// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_QAXKgknX_5UrTuSWUWtkuPLUQ9dsSTc5n");
const fromEmail = process.env.FROM_MAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["mateodonino@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Gracias por contactarte conmigo!</p>
          <p>Nuevo mensaje: </p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
