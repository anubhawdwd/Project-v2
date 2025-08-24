import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

// Make sure this function is exported
export const generateResumeWithHtml2Canvas = async (elementId: string) => {
  try {
    // Get the rendered MDX content element
    const element = document.getElementById(elementId);
    if (!element) return;

    // Convert HTML to canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff",
    });

    // Create PDF from canvas
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add image to PDF
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Handle multiple pages
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Anubhaw_Dwivedi_Resume.pdf");
  } catch (error) {
    console.error("PDF generation failed:", error);
  }
};

// Also export the clickable links version
export const generateResumeWithClickableLinks = async (
  rawContent: string,
  frontmatter?: any,
) => {
  // Your clickable links implementation here...
};
