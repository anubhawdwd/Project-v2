import { NextResponse } from "next/server";
import { resume } from "@/data/aboutMe/resume";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderListItems = (items: readonly string[]) =>
  items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

const renderResumeHtml = () => {
  const contact = resume.contact;
  const skills = resume.skills
    .map(
      (group) =>
        `<li><strong>${escapeHtml(group.label)}:</strong> ${escapeHtml(
          group.values.join(", "),
        )}</li>`,
    )
    .join("");
  const experience = resume.experience
    .map(
      (item) => `
        <h3><strong>${escapeHtml(item.company)}</strong> - ${escapeHtml(
          item.role,
        )}</h3>
        <p><em>${escapeHtml(item.period)}</em></p>
        <ul>${renderListItems(item.points)}</ul>
      `,
    )
    .join("");

  return `
    <header class="resume-header">
      <h1>${escapeHtml(resume.name)}</h1>
      <p><strong>${escapeHtml(resume.role)}</strong></p>
      <p>
        Contact: ${escapeHtml(contact.phone)} |
        Email: <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(
          contact.email,
        )}</a>
      </p>
      <p>
        <a href="${escapeHtml(contact.portfolio)}">Portfolio</a> |
        <a href="${escapeHtml(contact.github)}">GitHub</a> |
        <a href="${escapeHtml(contact.linkedin)}">LinkedIn</a>
      </p>
    </header>

    <h2>Summary</h2>
    <p>${escapeHtml(resume.summary)}</p>

    <h2>Technical Skills</h2>
    <ul>${skills}</ul>

    <h2>Professional Experience</h2>
    ${experience}

    <h2>Education</h2>
    <p><strong>${escapeHtml(resume.education.degree)}</strong></p>
    <p>${escapeHtml(resume.education.school)}</p>
    <p>${escapeHtml(resume.education.period)}</p>

    <h2>Languages</h2>
    <p>${escapeHtml(resume.languages.join(", "))}</p>

    <hr>
    <p>Keywords: ${escapeHtml(resume.keywords.join(", "))}</p>
  `;
};

export async function POST() {
  try {
    const htmlContent = renderResumeHtml();

    // Professional resume CSS styling
    // Updated CSS with better spacing and formatting
    const resumeStyles = `
  <style>
    * { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box; 
    }
    
    body {
      font-family: 'Calibri', 'Arial', sans-serif;
      line-height: 1.4;
      color: #1a1a1a;
      max-width: 90%;
      margin: 0 auto;
      padding: 0.5in 0.5in; /* Changed from 0.5in */
      background: white;
      font-size: 12px; /* Increased from 11px */
    }
    
    /* Remove extra spacing from first element */
    body > *:first-child {
      margin-top: 0 !important;
    }
    
    .resume-header {
      text-align: center;
      margin-bottom: 10px;
    }

    .resume-header p {
      display: block;
      text-align: center;
      font-size: 11px;
      margin-bottom: 3px;
      line-height: 1.35;
    }

    h1 {
      font-size: 22px; /* Increased from 20px */
      color: #1a1a1a;
      text-align: center;
      margin-bottom: 4px;
      font-weight: 700;
    }
    
    /* Section headers */
    h2 {
      font-size: 14px; 
      color: #1a1a1a;
      margin-top: 16px;
      margin-bottom: 8px;
      font-weight: 700;
      text-transform: uppercase;
      border-bottom: 1px solid #333;
      padding-bottom: 2px;
    }
    
    /* Remove top margin from first section */
    h2:first-of-type {
      margin-top: 12px;
    }
    
    /* Company/position headers */
    h3 {
      font-size: 12px; 
      color: #1a1a1a;
      margin-top: 10px;
      margin-bottom: 4px;
      font-weight: 600;
    }
    
    /* Regular paragraphs */
    p {
      margin-bottom: 6px;
      font-size: 11px;
      line-height: 1.4;
    }
    
    /* Lists */
    ul, ol {
      margin-left: 16px;
      margin-bottom: 8px;
    }
    
    li {
      margin-bottom: 2px;
      font-size: 11px; 
      line-height: 1.3;
    }
    
    /* Bold text */
    strong {
      color: #1a1a1a;
      font-weight: 600;
    }
    
    /* Italic text - dates and emphasis */
    em {
      font-style: italic;
      color: #555;
      font-size: 10px;
    }
    
    /* Links */
    a {
      color: #0066cc;
      text-decoration: none;
    }
    
    /* Hide keywords section - invisible to humans but readable by ATS */
    body > hr,
    body > hr + p {
      display: none;
      visibility: hidden;
      position: absolute;
      left: -9999px;
      font-size: 0;
      line-height: 0;
      color: transparent;
      opacity: 0;
    }
    
    /* Alternative approach - make keywords section invisible but present for ATS */
    body > p:last-child {
      font-size: 0;
      line-height: 0;
      color: transparent;
      height: 0;
      overflow: hidden;
      position: absolute;
      left: -9999px;
      opacity: 0;
      visibility: hidden;
    }
    
    /* Page settings */
    @page {
      margin: 0; /* Changed from margin: 0.4in; */
      size: A4;
    }

    
    @media print {
      body { print-color-adjust: exact; }
      
      /* Ensure keywords remain hidden in print */
      body > hr,
      body > hr + p,
      body > p:last-child {
        display: none !important;
        visibility: hidden !important;
      }
    }
  </style>
`;

    // Complete HTML document
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${resume.name} - Resume</title>
          ${resumeStyles}
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;

    // Environment detection for Vercel
    const isVercel = !!process.env.VERCEL_ENV;
    let puppeteer: any,
      launchOptions: any = { headless: true };

    if (isVercel) {
      const chromium = (await import("@sparticuz/chromium")).default;
      puppeteer = await import("puppeteer-core");
      launchOptions = {
        ...launchOptions,
        args: chromium.args,
        executablePath: await chromium.executablePath(),
      };
    } else {
      puppeteer = await import("puppeteer");
    }

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    await page.setContent(fullHtml, { waitUntil: "networkidle0" });

    // Generate PDF
    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "0in",
        right: "0in",
        bottom: "0in",
        left: "0in",
      },
      printBackground: true,
      preferCSSPageSize: true,
    });

    await browser.close();
    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Anubhaw_Dwivedi_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 },
    );
  }
}
