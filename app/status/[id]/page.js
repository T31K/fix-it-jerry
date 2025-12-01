import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data for demonstration
const mockRepairData = {
  "1281": {
    id: "1281",
    device: "iPhone 16",
    model: "iPhone 16 Pro Max",
    color: "Natural Titanium",
    issue: "Cracked Screen",
    submittedDate: "2024-11-28",
    estimatedCompletion: "2024-12-05",
    currentStep: 3,
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: "Order Received",
        description: "We have received your device and logged it into our system",
        completed: true,
        completedDate: "2024-11-28"
      },
      {
        id: 2,
        title: "Initial Inspection",
        description: "Our technicians have performed an initial assessment",
        completed: true,
        completedDate: "2024-11-29"
      },
      {
        id: 3,
        title: "Diagnosis Complete",
        description: "Team has diagnosed the issue and confirmed repair plan",
        completed: true,
        completedDate: "2024-11-30"
      },
      {
        id: 4,
        title: "Currently Fixing",
        description: "Our expert technicians are working on your device",
        completed: false,
        inProgress: true
      },
      {
        id: 5,
        title: "Quality Check & Ready",
        description: "Final testing and quality assurance before pickup",
        completed: false
      }
    ]
  }
};

export async function generateMetadata({ params }) {
  const repairData = mockRepairData[params.id];

  if (!repairData) {
    return {
      title: "Repair Status Not Found | Fix It Jerry",
    };
  }

  return {
    title: `${repairData.device} Repair Status | Fix It Jerry`,
    description: `Track the repair progress of your ${repairData.device}`,
  };
}

export default function RepairStatusPage({ params }) {
  const repairData = mockRepairData[params.id];

  if (!repairData) {
    notFound();
  }

  const progressPercentage = (repairData.currentStep / repairData.totalSteps) * 100;

  return (
    <div id="wrapper">
      <Navbar />
      <div id="content" className="no-top no-bottom">
        <div id="top"></div>

        {/* Header Section */}
        <section
          id="subheader"
          className="relative text-white bg-fixed bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background/4.webp')`
          }}
        >
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="subtitle">Fix It Jerry</div>
                <h1 className="md:whitespace-nowrap !text-[24px] md:!text-[48px]">
                  Repair Status
                </h1>
                <p className="text-gray-200 max-w-3xl !text-[16px] md:!text-[20px] text-center mt-3">
                  Track your {repairData.device} repair progress
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href={`/status/${params.id}`}>Status</a></li>
            </ul>
          </div>
        </section>

        {/* Status Content */}
        <section className="py-16">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">

                {/* Device Info Card */}
                <div className="bg-white rounded-lg shadow-lg border p-6 mb-8">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {repairData.device}
                      </h2>
                      <p className="text-gray-600 mb-1">
                        <strong>Model:</strong> {repairData.model}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <strong>Color:</strong> {repairData.color}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <strong>Issue:</strong> {repairData.issue}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <strong>Repair ID:</strong> #{repairData.id}
                      </p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(198, 231, 108, 0.1)' }}>
                        <div className="text-sm text-gray-600 mb-1">Estimated Completion</div>
                        <div className="text-lg font-semibold" style={{ color: '#4d6c77' }}>
                          {new Date(repairData.estimatedCompletion).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Overview */}
                <div className="bg-white rounded-lg shadow-lg border p-6 mb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Repair Progress</h3>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#4d6c77' }}>
                      {repairData.currentStep}/{repairData.totalSteps}
                    </div>
                    <div className="text-gray-600">Steps Completed</div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                    <div
                      className="h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%`, backgroundColor: '#C6E76C' }}
                    ></div>
                  </div>
                </div>

                {/* Status Steps */}
                <div className="bg-white rounded-lg shadow-lg border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Repair Timeline</h3>

                  <div className="space-y-6">
                    {repairData.steps.map((step, index) => (
                      <div key={step.id} className="flex items-start space-x-4">
                        {/* Step Icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.completed
                              ? 'text-white'
                              : step.inProgress
                                ? 'bg-green-500 text-white animate-pulse'
                                : 'bg-gray-200 text-gray-500'
                          }`}
                          style={step.completed ? { backgroundColor: '#C6E76C' } : {}}>
                            {step.completed ? (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : step.inProgress ? (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span className="text-sm font-semibold">{step.id}</span>
                            )}
                          </div>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-lg font-semibold ${
                              step.completed ? 'text-green-700' : step.inProgress ? 'text-green-700' : 'text-gray-500'
                            }`}>
                              {step.title}
                            </h4>
                            {step.completed && step.completedDate && (
                              <span className="text-sm text-gray-500">
                                {new Date(step.completedDate).toLocaleDateString()}
                              </span>
                            )}
                            {step.inProgress && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                In Progress
                              </span>
                            )}
                          </div>
                          <p className={`mt-1 ${
                            step.completed ? 'text-gray-700' : step.inProgress ? 'text-gray-700' : 'text-gray-500'
                          }`}>
                            {step.description}
                          </p>
                        </div>

                        {/* Connector Line */}
                        {index < repairData.steps.length - 1 && (
                          <div className="absolute left-5 mt-10 w-0.5 h-6 bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="rounded-lg p-6 mt-8" style={{ backgroundColor: 'rgba(198, 231, 108, 0.1)' }}>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2" style={{ color: '#4d6c77' }}>
                      Questions about your repair?
                    </h4>
                    <p className="mb-4" style={{ color: '#4d6c77' }}>
                      Our support team is here to help you with any questions or concerns.
                    </p>
                    <div className="space-x-4">
                      <a
                        href="/contact"
                        className="inline-block text-white px-6 py-2 rounded-lg transition-colors hover:opacity-90"
                        style={{ backgroundColor: '#C6E76C' }}
                      >
                        Contact Us
                      </a>
                      <a
                        href="tel:+60123456789"
                        className="inline-block bg-white px-6 py-2 rounded-lg transition-colors hover:opacity-90"
                        style={{ color: '#4d6c77', borderColor: '#C6E76C', border: '2px solid' }}
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
