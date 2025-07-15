import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Please fill all fields" }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpUser || !smtpPass) {
    return NextResponse.json({ error: "SMTP configuration is missing" }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

const companyEmailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center;">
              <div style="background-color: white; display: inline-block; padding: 12px 24px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #1e40af; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">Holbox AI</h2>
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <div style="background-color: #f1f5f9; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
                <h2 style="color: #1e40af; margin: 0 0 10px 0; font-size: 18px;">Contact Details</h2>
                <p style="color: #64748b; margin: 0; font-size: 14px;">You have received a new message through your website contact form.</p>
              </div>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #1e40af; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name:</strong>
                    <p style="margin: 5px 0 0 0; color: #334155; font-size: 16px;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #1e40af; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                    <p style="margin: 5px 0 0 0; color: #334155; font-size: 16px;">
                      <a href="mailto:${email} " style="color: #3b82f6; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #1e40af; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company:</strong>
                    <p style="margin: 5px 0 0 0; color: #334155; font-size: 16px;">${subject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0;">
                    <strong style="color: #1e40af; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</strong>
                    <div style="margin: 10px 0 0 0; padding: 20px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                      <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.6;">${message.replace(/\\n/g, "<br>")}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                This email was sent from your website contact form.<br>
                Timestamp: ${new Date().toLocaleString()}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

const userConfirmationHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting Holbox AI</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
              <div style="background-color: white; display: inline-block; padding: 15px 30px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #1e40af; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Holbox AI</h2>
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Thank You!</h1>
              <p style="color: #bfdbfe; margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <table role="presentation" style="margin: 0 auto;">
                  <tr>
                    <td style="width: 60px; height: 60px; background-color: #dcfce7; border-radius: 50%; text-align: center; vertical-align: middle; margin-bottom: 20px;">
                      <span style="color: #16a34a; font-size: 24px; line-height: 60px;">✓</span>
                    </td>
                  </tr>
                </table>
                <h2 style="color: #1e40af; margin: 20px 0 15px 0; font-size: 24px; font-weight: 600;">Message Received Successfully</h2>
                <p style="color: #64748b; margin: 0; font-size: 16px; line-height: 1.6;">
                  Hi ${name}, thank you for reaching out to Holbox AI. We appreciate your interest and will get back to you as soon as possible.
                </p>
              </div>
              
              <!-- Message Summary -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Your Message Summary</h3>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; width: 80px;">
                      <strong style="color: #475569; font-size: 14px;">Company:</strong>
                    </td>
                    <td style="padding: 8px 0;">
                      <span style="color: #334155; font-size: 14px;">${subject}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; vertical-align: top;">
                      <strong style="color: #475569; font-size: 14px;">Message:</strong>
                    </td>
                    <td style="padding: 8px 0;">
                      <span style="color: #334155; font-size: 14px; line-height: 1.5;">${message.substring(0, 150)}${message.length > 150 ? "..." : ""}</span>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- What's Next -->
              <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #334155; font-size: 14px; line-height: 1.6;">
                  <li style="margin-bottom: 8px;">Our team will review your message promptly</li>
                  <li style="margin-bottom: 8px;">We'll respond to your inquiry via email</li>
                  <li style="margin-bottom: 0;">If urgent, feel free to reach out directly</li>
                </ul>
              </div>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin-bottom: 30px;">
                <a href="https://holbox.ai" 
                   style="display: inline-block; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                  Visit Our Website
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 10px 0; color: #1e40af; font-size: 16px; font-weight: 600;">Holbox AI Team</p>
              <p style="margin: 0; color: #64748b; font-size: 14px;">
                Empowering businesses with AI solutions
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
  try {
    await transporter.sendMail({
      from: smtpUser,
      to: smtpUser,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      
      html: companyEmailHTML,
    })

    await transporter.sendMail({
      from: smtpUser,
      to: email,
      subject: "Thank you for contacting Holbox AI - We've received your message!",
      
      html: userConfirmationHTML,
    })

    return NextResponse.json({ success: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
