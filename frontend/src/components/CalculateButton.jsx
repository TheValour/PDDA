import React from 'react';
import { Calculator, RotateCcw, AlertCircle } from 'lucide-react';

export const CalculateButton = ({ canCalculate, onCalculate, onReset, showResults }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-bold text-slate-800">Calculate PDA</h2>
      </div>

      {!canCalculate && (
        <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center gap-2 text-amber-800">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Required Information Missing</span>
          </div>
          <p className="text-sm text-amber-700 mt-2">
            Please fill in the following required fields to calculate PDA:
          </p>
          <ul className="text-sm text-amber-700 mt-2 ml-4 list-disc">
            <li>Select an Indian port</li>
            <li>Enter vessel name</li>
            <li>Enter gross tonnage (GT)</li>
            <li>Enter length overall (LOA)</li>
            <li>Set arrival and departure dates</li>
          </ul>
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={onCalculate}
          disabled={!canCalculate}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold text-lg transition-all ${
            canCalculate
              ? 'bg-purple-400 text-white'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          <Calculator className="w-6 h-6" />
          Calculate PDA
        </button>

        {showResults && (
          <button
            onClick={onReset}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-600 text-white rounded-lg hover:bg-slate-700 font-semibold"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        )}
      </div>

      {showResults && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-800">
            <Calculator className="w-5 h-5" />
            <span className="font-medium">PDA Calculation Complete</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Your Port Dues Assessment has been calculated successfully. View the detailed breakdown in the results panel.
          </p>
        </div>
      )}
    </div>
  );
};