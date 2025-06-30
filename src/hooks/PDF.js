import jsPDF from 'jspdf';

export const handleExportPDF = (charges, portName, vesselName, calculation) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    let yPosition = 20;

    // Header
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Port Dues Assessment (PDA) Report', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 20;

    // Port and Vessel Info
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Port: ${portName}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Vessel: ${vesselName}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 20, yPosition);
    yPosition += 20;

    // Charges breakdown
    doc.setFont('helvetica', 'bold');
    doc.text('Charge Breakdown (INR)', 20, yPosition);
    yPosition += 10;

    doc.setFont('helvetica', 'normal');
    charges.forEach((charge) => {
      const amount = `Rs. ${charge.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
      doc.text(charge.label, 20, yPosition);
      doc.text(amount, pageWidth - 20, yPosition, { align: 'right' });
      yPosition += 8;
    });

    // Totals
    yPosition += 10;
    doc.line(20, yPosition, pageWidth - 20, yPosition);
    yPosition += 10;

    doc.setFont('helvetica', 'bold');
    doc.text('Subtotal', 20, yPosition);
    doc.text(`Rs. ${calculation.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, pageWidth - 20, yPosition, { align: 'right' });
    yPosition += 10;

    doc.text('GST (18%)', 20, yPosition);
    doc.text(`Rs. ${calculation.taxes.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, pageWidth - 20, yPosition, { align: 'right' });
    yPosition += 15;

    doc.setFontSize(14);
    doc.text('Total PDA', 20, yPosition);
    doc.text(`Rs. ${calculation.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, pageWidth - 20, yPosition, { align: 'right' });
    yPosition += 20;

    // Notes
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Note: All amounts are in Indian Rupees (INR). GST @ 18% is applicable as per Indian tax regulations.', 20, yPosition);

    // Save the PDF
    const filename = `PDA_${vesselName}_${portName}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(filename);
};