import React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

const PDF_URL =
  "http://snbpacsms.com/WebsitePages/StudentCouncil/INTERNAL%20COMPLAINTS%20CELL.pdf";

const InternalCell = () => {
  return (
    <Layout>
      <PageHeader
        title="Internal Complaint Cell"
        description="Addressing internal complaints with confidentiality, fairness and timely resolution"
        breadcrumbs={[
          { label: "Student Corner", href: "/student-corner/complaint-cell" },
          { label: "Internal Complaint Cell" },
        ]}
      />
<section
  className="d-flex justify-content-center align-items-center"
  style={{ minHeight: "calc(100vh - 200px)" }}
>
  <div className="container text-center">
    <a
      href={PDF_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Click to view Internal Complaints Cell PDF"
      className="text-decoration-none d-inline-block"
    >
      <div
        className="card border-0 shadow-lg text-center p-4 rounded-4 mx-auto"
        style={{
          width: "220px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-8px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        {/* PDF Icon */}
        <div className="d-flex justify-content-center">
          <svg
            width="100"
            height="120"
            viewBox="0 0 80 96"
            fill="none"
          >
            <rect
              width="80"
              height="96"
              rx="8"
            //   fill="#fff"
              stroke="#dc3545"
              strokeWidth="2"
            />
            <rect y="35" width="80" height="30" fill="#dc3545" />
            <text
              x="40"
              y="55"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="bold"
            >
              PDF
            </text>
          </svg>
        </div>
      </div>
    </a>
  </div>
</section>
    </Layout>
  );
};

export default InternalCell;