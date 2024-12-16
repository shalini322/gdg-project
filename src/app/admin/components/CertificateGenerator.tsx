"use client";

import React, { useState, useRef } from "react";
import { Download, Palette } from "lucide-react";
import html2canvas from "html2canvas";

// Certificate template interface
interface CertificateTemplate {
  id: string;
  name: string;
  backgroundImage: string;
  textColor: string;
  fontStyle: string;
}

// Predefined certificate templates
const CERTIFICATE_TEMPLATES: CertificateTemplate[] = [
  {
    id: "1",
    name: "Modern Blue",
    backgroundImage: "/img/image.png",
    textColor: "#003366",
    fontStyle: "Roboto",
  },
  {
    id: "2",
    name: "Elegant Gold",
    backgroundImage: "/img/image.png",
    textColor: "#8B6914",
    fontStyle: "Playfair Display",
  },
  {
    id: "3",
    name: "Minimalist White",
    backgroundImage: "/img/image.png",
    textColor: "#333333",
    fontStyle: "Montserrat",
  },
];

const CertificateGenerator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<CertificateTemplate>(
    CERTIFICATE_TEMPLATES[0]
  );
  const [participantName, setParticipantName] = useState("");
  const [eventName, setEventName] = useState("");
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownloadCertificate = async () => {
    if (certificateRef.current) {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `${participantName}_certificate.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-darkgray">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Certificate Generator
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Template Selection */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Certificate Templates
            </h2>
            <div className="space-y-2">
              {CERTIFICATE_TEMPLATES.map((template) => (
                <div
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className={`cursor-pointer p-3 rounded-lg flex items-center ${
                    selectedTemplate.id === template.id
                      ? "bg-blue-100 dark:bg-blue-900"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Palette className="mr-3 text-blue-600" />
                  <span className="text-gray-800 dark:text-white">
                    {template.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Customization */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-4">
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Participant Name
              </label>
              <input
                type="text"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                placeholder="Enter participant name"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Event Name
              </label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Certificate Preview */}
        <div className="lg:col-span-2 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Certificate Preview
            </h2>
            <button
              onClick={handleDownloadCertificate}
              disabled={!participantName || !eventName}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="mr-2" /> Download
            </button>
          </div>

          {/* Actual Certificate */}
          <div
            ref={certificateRef}
            className="w-full aspect-[3/2] relative overflow-hidden rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${selectedTemplate.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              fontFamily: selectedTemplate.fontStyle,
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: selectedTemplate.textColor }}
              >
                Certificate of Participation
              </h1>
              <p
                className="text-2xl mb-2"
                style={{ color: selectedTemplate.textColor }}
              >
                This is to certify that
              </p>
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: selectedTemplate.textColor }}
              >
                {participantName || "Participant Name"}
              </h2>
              <p
                className="text-lg mb-2"
                style={{ color: selectedTemplate.textColor }}
              >
                has successfully participated in
              </p>
              <h2
                className="text-2xl font-semibold"
                style={{ color: selectedTemplate.textColor }}
              >
                {eventName || "Event Name"}
              </h2>
              <p
                className="text-base mt-4"
                style={{ color: selectedTemplate.textColor }}
              >
                Congratulations on your achievement!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateGenerator;
