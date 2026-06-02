import React from "react";
import JsonData from "../Data/data.json";
import SectionTitle from "./SectionTitle";

export default function ExperienceTimeline() {
  const { Current, Previous } = JsonData.Experience;

  return (
    <section className="section" id="experience">
      <SectionTitle number="03" title="Experience" />
      <p
        style={{
          color: "var(--text-dim)",
          fontSize: "0.95rem",
          marginBottom: "2.5rem",
          maxWidth: "650px",
        }}
      >
        {JsonData.Work.work_para_1}
      </p>

      <div className="timeline">
        {/* Current Role */}
        <div className="timeline-item">
          <div className="timeline-header">
            <div>
              <div className="timeline-company">{Current.company}</div>
              <div className="timeline-role">{Current.title}</div>
            </div>
            <span className="timeline-period">{Current.period}</span>
          </div>
          <p className="timeline-desc">{Current.info_para_1}</p>
          <ul className="timeline-points">
            {Current.job_points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="timeline-desc" style={{ marginTop: "1rem" }}>
            {Current.info_para_2}
          </p>
        </div>

        {/* Previous Roles */}
        {Previous.map((job, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-header">
              <div>
                <div className="timeline-company">{job.prev_job}</div>
                <div className="timeline-role">{job.prev_title}</div>
              </div>
              <span className="timeline-period">{job.period}</span>
            </div>
            <ul className="timeline-points">
              {job.prev_job_info.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
