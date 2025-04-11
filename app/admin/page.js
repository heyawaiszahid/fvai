"use client";

import React, { useEffect, useState } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [valuations, setValuations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState(null);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(savedAuth === "true");
    setAuthChecking(false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setPassword("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchData = async () => {
      try {
        const response = await fetch("/api/valuationData");
        const data = await response.json();
        setValuations(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [isAuthenticated]);

  if (authChecking) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-xs w-full max-w-sm border border-gray-200">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-500 mt-1 text-sm">Restricted access</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-others-backdropOverlay mb-1.5">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2.5 border rounded-lg outline-none ${
                  error
                    ? "border-error-dark focus:border-error-dark"
                    : "border-others-backdropOverlay focus:border-primary-dark"
                }`}
                placeholder="••••••••"
                required
              />
              {error && <p className="mt-1 text-xs text-error-dark">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-primary font-bold text-white py-2.5 px-4 rounded-lg focus:outline-none focus:ring-0"
            >
              Authenticate
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Startup Valuation Dashboard
        </h1>
        <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-700">
          Logout
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Initial Questions
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Detailed Valuation
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment & Report
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {valuations.map((valuation) => {
              const hasDetailed = valuation.detailedQuestionnaire?.score;
              const hasPayment = valuation.billing?.transactionId;

              return (
                <React.Fragment key={valuation.id}>
                  <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => toggleRow(valuation.id)}>
                    {/* Initial Questions Column */}
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900">{valuation.initialQuestions.startupName}</div>
                      <div className="text-sm text-gray-500">
                        {valuation.initialQuestions.fullName} • {valuation.initialQuestions.email}
                      </div>
                      <div className="text-sm mt-1">
                        <span className="font-medium">Range:</span>{" "}
                        {valuation?.initialQuestions?.range?.every((val) => val !== null)
                          ? valuation.initialQuestions.range.join(" - ")
                          : "N/A"}
                      </div>
                    </td>

                    {/* Detailed Valuation Column */}
                    <td className="px-4 py-3">
                      {hasDetailed ? (
                        <>
                          <div className="flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            <span className="font-medium">Completed</span>
                          </div>
                          <div className="text-sm mt-1">
                            Score: {valuation.detailedQuestionnaire.score} • Valuation:{" "}
                            {valuation.detailedQuestionnaire.valuation}
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center text-gray-400">
                          <span className="inline-block w-2 h-2 rounded-full bg-gray-300 mr-2"></span>
                          Not Completed
                        </div>
                      )}
                    </td>

                    {/* Payment & Report Column */}
                    <td className="px-4 py-3">
                      {hasPayment ? (
                        <>
                          <div className="flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            <span className="font-medium">Paid</span>
                          </div>
                          <div className="text-sm mt-1 truncate">ID: {valuation.billing.transactionId}</div>
                        </>
                      ) : (
                        <div className="flex items-center text-gray-400">
                          <span className="inline-block w-2 h-2 rounded-full bg-gray-300 mr-2"></span>
                          {hasDetailed ? "Payment Pending" : "Not Started"}
                        </div>
                      )}
                    </td>

                    {/* Status Column */}
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          hasPayment
                            ? "bg-green-100 text-green-800"
                            : hasDetailed
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {hasPayment ? "Complete" : hasDetailed ? "Detailed Valuation" : "Initial Submission"}
                      </span>
                    </td>
                  </tr>

                  {/* Expanded Row */}
                  {expandedRow === valuation.id && (
                    <tr key={`${valuation.id}-expanded`} className="bg-gray-50">
                      <td colSpan="4" className="px-4 py-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Initial Questions Details */}
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h3 className="font-medium text-lg mb-3 pb-2 border-b border-gray-200">
                              Initial Questions Details
                            </h3>
                            <div className="space-y-2">
                              <p>
                                <span className="font-medium">Country:</span>{" "}
                                {valuation.initialQuestions.startupCountry}
                              </p>
                              <p>
                                <span className="font-medium">Stage:</span> {valuation.initialQuestions.stage}
                              </p>
                              <p>
                                <span className="font-medium">Industry:</span> {valuation.initialQuestions.industry}
                              </p>
                              <p>
                                <span className="font-medium">Website:</span>{" "}
                                {valuation.initialQuestions.startupWebsiteUrl || "N/A"}
                              </p>
                              <p className="mt-3">
                                <span className="font-medium">Business Description:</span>
                              </p>
                              <p className="text-sm text-gray-600">{valuation.initialQuestions.businessDescription}</p>
                            </div>
                          </div>

                          {/* Detailed Valuation Details */}
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h3 className="font-medium text-lg mb-3 pb-2 border-b border-gray-200">
                              Detailed Valuation
                            </h3>
                            {hasDetailed ? (
                              <div className="space-y-2">
                                <p>
                                  <span className="font-medium">Score:</span> {valuation.detailedQuestionnaire.score}
                                </p>
                                <p>
                                  <span className="font-medium">Valuation:</span>{" "}
                                  {valuation.detailedQuestionnaire.valuation}
                                </p>
                              </div>
                            ) : (
                              <p className="text-gray-400">User did not complete detailed valuation</p>
                            )}
                          </div>

                          {/* Payment & Report Details */}
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h3 className="font-medium text-lg mb-3 pb-2 border-b border-gray-200">Payment & Report</h3>
                            {hasPayment ? (
                              <div className="space-y-2">
                                <p>
                                  <span className="font-medium">Transaction ID:</span> {valuation.billing.transactionId}
                                </p>
                                <p>
                                  <span className="font-medium">Report Recipient:</span> {valuation.billing.fullName}
                                </p>
                                <p>
                                  <span className="font-medium">Title:</span> {valuation.billing.title}
                                </p>
                                <p>
                                  <span className="font-medium">Email:</span> {valuation.billing.email}
                                </p>
                              </div>
                            ) : (
                              <p className="text-gray-400">Payment not completed</p>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
