import React from 'react';
import { Calculator, IndianRupee, FileText, Download, AlertCircle } from 'lucide-react';

export const PDAResults = ({ calculation, portName, vesselName, showResults }) => {
  if (!showResults || !calculation) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-800">PDA Calculation Results</h2>
        </div>
        <div className="text-center py-8">
          <Calculator className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500 mb-2">Ready to calculate your PDA</p>
          <p className="text-sm text-slate-400">
            Fill in the vessel and port details, then click "Calculate PDA" to see your results
          </p>
        </div>
      </div>
    );
  }

  const charges = [
    { label: 'Port Dues', amount: calculation.portDues },
    { label: 'Pilotage Charges', amount: calculation.pilotageCharges },
    { label: 'Towage Charges', amount: calculation.towageCharges },
    { label: 'Berth Charges', amount: calculation.berthCharges },
    { label: 'Cargo Handling', amount: calculation.cargoHandlingCharges },
    { label: 'Anchorage Charges', amount: calculation.anchorageCharges },
    { label: 'Security Charges (ISPS)', amount: calculation.securityCharges },
    { label: 'Environmental Fee', amount: calculation.environmentalFee },
    { label: 'Documentation Fee', amount: calculation.documentationFee },
    { label: 'Fresh Water Supply', amount: calculation.freshWaterCharges },
    { label: 'Waste Disposal', amount: calculation.wasteDisposalCharges },
  ].filter(charge => charge.amount > 0);

  const handleExport = () => {
    const exportData = {
      port: portName,
      vessel: vesselName,
      timestamp: new Date().toISOString(),
      charges,
      subtotal: calculation.subtotal,
      gst: calculation.taxes,
      total: calculation.total,
      currency: 'INR',
      note: 'All amounts are in Indian Rupees (INR). GST @ 18% applicable as per Indian tax regulations.',
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PDA_${vesselName}_${portName}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Calculator className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-800">PDA Calculation Results</h2>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-700 mb-1">Indian Port</h3>
            <p className="text-slate-900">{portName}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-700 mb-1">Vessel</h3>
            <p className="text-slate-900">{vesselName}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Charge Breakdown (INR)
          </h3>
          
          {charges.map((charge, index) => (
            <div key={index} className="flex justify-between items-center py-2 px-4 bg-slate-50 rounded-lg">
              <span className="text-slate-700">{charge.label}</span>
              <span className="font-semibold text-slate-900">
                ₹{charge.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-4 space-y-2">
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-slate-700">Subtotal</span>
            <span className="font-semibold text-slate-900">
              ₹{calculation.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-slate-700">GST (18%)</span>
            <span className="text-slate-900">
              ₹{calculation.taxes.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
          </div>
          
          <div className="flex justify-between items-center text-xl font-bold text-indigo-600 bg-indigo-50 p-4 rounded-lg">
            <span className="flex items-center gap-2">
              <IndianRupee className="w-6 h-6" />
              Total PDA
            </span>
            <span>₹{calculation.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-sm text-orange-800">
            <strong>Note:</strong> All amounts are in Indian Rupees (INR). GST @ 18% is applicable as per Indian tax regulations for port services.
          </p>
        </div>

        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-800 mb-2">
            <AlertCircle className="w-4 h-4" />
            <span className="font-medium">Calculation Complete</span>
          </div>
          <p className="text-sm text-green-700">
            This PDA calculation is based on current Indian maritime regulations and port tariffs. 
            Please verify with the specific port authority for any recent updates or special conditions.
          </p>
        </div>
      </div>
    </div>
  );
};