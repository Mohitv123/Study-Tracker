import { useState } from "react";

const subjects = {
  Medicine: {
    color: "#1a5276",
    accent: "#2e86c1",
    icon: "🩺",
    Theory: [
      "IM-20.2-(1.11) Snake Bites / other Poison consumption",
      "IM-22.13 (1.12) Minerals, fluids, electrolytes & Acid Base Disorders",
      "IM-17.6 17.7 17.8 17.9 17.13 – Meningitis, Encephalitis, Brain abscess, Neurocysticercosis (Nervous system 1-11.12)",
      "IM-17.6 17.7 17.8 17.9 17.13 – Meningitis, Encephalitis, Brain abscess, Neurocysticercosis (Nervous system 1-11.13)",
      "IM-19.2 19.5 19.6 – Epilepsy (Nervous system 1-11.14)",
      "IM-19.2 19.5 19.6 – Epilepsy (Nervous system 1-11.15)",
      "IM-2.8, 2.9, 2.11, 2.28 (1.14) IHD / Angina / MI – Case based discussion / Clinical features (symptoms & Signs) / Interpretation of Investigations / Diagnosis and treatment planning + Counselling",
      "IM-18.4 – Coma, Head injuries & Brain death (Nervous system 11.16)",
      "IM-18.4 – Coma, Head injuries & Brain death (Nervous system 11.17)",
      "IM-1.16 1.25 2.1 2.2 2.3 2.4 2.6 – Ischemic heart disease 1 (Etiology, risk factors and pathophysiology) (CVS-10.11)",
      "IM-1.16 1.25 2.5 2.6 2.7 2.8 2.9 2.10 2.11 2.13 2.14 2.15 2.17 2.19 2.20 2.23 2.24 – Ischemic heart disease 3 (acute coronary syndromes and consequences) (CVS-10.13)",
      "IM-19.1-19.9 – Movement disorders (Nervous system 11.18)",
      "IM-19.1-19.9 – Movement disorders (Nervous system 11.18) [repeated batch]",
      "IM-1.17 Medical Instruments and devices",
      "IM-8.11 – 8.19 (1.16) Systemic Hypertension",
      "IM-2.3 2.12 2.18 – Preventive cardiology and Lipid management (CVS-10.15)",
      "Medicine (15)-3: Approach to a case of Syncope / unconscious patient",
      "Medicine (15)-4: Approach to a case of Dementia",
      "Medicine (15)-4: Write Short Notes on (1) Volvulus of stomach (2) Acute dilation of stomach (3) Bezoars",
    ],
    SGD: [
      "Pandemic Module – Medicine 4.1 Care of patients during pandemic – 2 hrs",
      "Pandemic Module – Medicine 4.2 – 2 hrs: Emergency Procedures",
      "AETCOM Surgery – 4.4 Case studies in ethics, empathy and the doctor patient relationship (Introduction of case 1 hr + SDL 2 hrs)",
      "AETCOM Surgery – 4.4 Case studies in ethics empathy and the doctor patient relationship (Anchoring lecture + Discussion and closure of case)",
      "AETCOM Medicine – 4.5 Case studies in ethics: The doctor industry relationship – Dr Madhav Pai (Ortho 1) and Dr Sakthi (Ortho 5) (Anchoring lecture + Discussion and closure of case)",
      "AETCOM Surgery – 4.5 Case studies in ethics: The doctor industry relationship – Dr Madhav Pai (Ortho 1) and Dr Sakthi (Ortho 5) (Anchoring lecture + Discussion and closure of case)",
      "Orthopaedics SDL – 4: Extremity amputation – Ortho 5",
    ],
  },

  Surgery: {
    color: "#6e2f09",
    accent: "#d35400",
    icon: "🔪",
    Theory: [
      "SU13.2.2 – Urology: Renal Transplant (Done on 23/2) / Urology-SU29.11 Urethral strictures",
      "SU28.8 Ca Stomach-2: Note on Gastrectomy",
      "SU29.11 GU Trauma",
      "SU29.11 Urology-SU30.1 Phimosis and carcinoma penis",
      "SU30.1 Phimosis and carcinoma penis",
      "SU30.6 Tumours of testis",
      "SU28.10 Applied anatomy of liver, Traumatic injuries of the liver (Liver 1)",
      "SU28.10 Applied anatomy of liver, Traumatic injuries of the liver (Liver 2) – Liver Abscess",
      "SU28.10 Liver 3 – Hydatid Disease of Liver",
      "SU28.10 Liver 4 – Benign Liver Tumours",
      "SU28.10 Liver 5 – Malignant Liver Tumours-1",
      "SU28.10 Liver 6 – Portal HTN",
      "SU28.10 Liver 7 – Secondaries in Liver Resection",
      "PDS-1: Cysts and sinuses in the neck",
      "PDS-2: Abdominal wall defects",
      "PDS-3: Congenital diaphragmatic hernia",
      "PDS-4: Esophageal atresia (Tracheoesophageal fistula)",
      "PDS-5: Infantile hypertrophic pyloric stenosis and Intussusception",
      "Surgery (15)-3: Write Short Notes on (1) Volvulus of stomach (2) Acute dilation of stomach (3) Bezoars",
      "Surgery (15)-4: Write Short Notes on Paraphimosis",
    ],
    SGD: [
      "SU17.1 – First Aid, SU17.3 – Mass casualties, Student seminar (Disaster Management)",
      "SU12.2 IV Fluids in Surgery (2-3:30pm) / Seminar by students – Na, K, Ca dyselectrolytemias",
      "SU14.4 – Skill: Demonstrate the techniques of asepsis and suturing in a simulated environment (Skills Lab + Assessment)",
      "SU14.4 – Skill: Demonstrate the techniques of asepsis and suturing (Skills Lab + Assessment) [repeated]",
      "SU8.1, SU8.3, SU13.3 – Ethics in General Surgery / Student seminar (1) autonomy, beneficence, non-maleficence, and justice / (2) legal and ethical issues concerning organ donation",
      "SU17.2 – Skill Lab: BLS & Transport of injured in a simulated environment (Skill Lab + Assessment)",
      "SU16.1 Minimally invasive general surgery / Student Seminar – Ergonomics in Laparoscopy",
      "SU25.3 Describe the etiopathogenesis, clinical features, Investigations and principles of treatment of benign and malignant tumours of breast (L-10, SDL-2) L-7",
      "Haematuria (SU2 9.1) Investigations in Urology: SU29.4.4 Hydronephrosis, SU29.6.5-RCC, SU29.11.4 urethral stricture",
    ],
  },

  OBG: {
    color: "#6c3483",
    accent: "#9b59b6",
    icon: "🤰",
    Theory: [
      "OG 28.1 – Infertility (Male) (Diagnosis and management)",
      "OG 27.4 – PID – Part 2",
      "OG 27.3 – HIV in Gynecology",
      "OG 12.6 – Liver disease in pregnancy – Part 1",
      "OG 12.6 – Liver disease in pregnancy – Part 2",
      "OG 12.4 – Heart disease in pregnancy – Part 1",
      "OG 12.4 – Heart disease in pregnancy – Part 2",
      "OG 14.4 – Prolonged labour, abnormal uterine action",
      "OG 28.3 – Ovulation induction",
      "OG 12.7 – HIV in obstetrics",
      "OG 28.4 – Assisted Reproduction Techniques",
      "OG 29.1 – Fibroid uterus – Part 1",
      "OG 29.1 – Fibroid uterus – Part 2",
      "OG 13.1 – Management of Labour – Part 1",
      "OG 13.1 – Management of Labour – Part 2",
      "OG 28.3 – Ovulation induction (repeated day)",
      "OG 30.1 – PCOS – Part 1",
      "OG 30.1 – PCOS – Part 2",
      "OG 30.2 – Hirsutism",
      "OG 32.1 – Menopause + HRT – Part 1",
    ],
    SGD: [
      "OG 21.1 – Intrauterine contraceptive device (Faculty tutorial)",
      "OG 21.2 – Postpartum IUCD programme (Faculty tutorial)",
      "OG 21.2 Postpartum + OG 21.1 – Intrauterine contraceptive evice (Faculty tutorial)",
      "OG 28.2 – Restoration of tubal patency (Faculty tutorial)",
      "OG 34.4 – Laparoscopy (Video based faculty tutorial)",
      "OG 35.3 – Appropriate referral of gynecological emergencies, including emergency management (Faculty tutorial)",
      "OG 33.7 – Informed consent for Gynaecological procedures (SDL)",
      "OG 35.7 – Informed consent for Obstetrics procedures (SDL)",
      "OG 38.4 – Issuing Medical Certificate (Faculty tutorial)",
    ],
  },

  Ophthalmology: {
    color: "#0e6655",
    accent: "#17a589",
    icon: "👁️",
    Theory: [
      "OP3.3 Conjunctival Anatomy (SDL-5) – 2",
      "OP4.7 Tarsorrhaphy (SDL-5) – 3",
      "Lasers in cataract management (SDL-5) – 4",
      "AN41.2, 6.5 Anatomy Angle (SDL-5)",
      "OP8.2 Electrophysiological tests (SDL-5)",
      "OP8.5 CT/MRI in Optic nerve (SDL-5)",
      "OP9.5 Ocular Chemical Trauma (SDL-5)",
      "REVISION OF OCULAR TRAUMA (L-10)",
    ],
    SGD: [
      "OP2.1 Lid position (Ptosis, ectropion, entropion, lid lag, lagophthalmos) – weeks 1 & 2",
      "OP2.1 Lid infections (preseptal cellulitis, Hordeolum externum, internum, chalazion, blepharitis) – week 3",
      "OP 4.4, 9.4 Vitamin A Deficiency – week 4 (5)",
      "OP3.1, OP3.2 Red Eye – week 5 (2.Op3.6 Pterygium)",
      "OP3.7 Symblepharon, OP3.8 Conjunctival Foreign Body Removal – week 6",
      "OP9.1 Ocular Muscle Anatomy & Movements, OP9.2 Strabismus: Management principles – week 7",
      "OP9.4 Vision 2020; other national programs related to Ophthalmology – week 8",
      "OP 9.5 First aid in ocular trauma – week 9",
      "OP7.2 Visual loss in Elderly – week 10",
    ],
  },

  ENT: {
    color: "#1a5276",
    accent: "#5dade2",
    icon: "👂",

Theory: [
      "ENT (SDL-5) – 1: Revision Class",
      "ENT (SDL-5) – 2: Revision Class",
      "ENT (SDL-5) – 3: Revision Class",
      "ENT (SDL-5) – 4: Revision Class",
      "ENT (SDL-5) – 5: Revision Class",
    ],
    SGD: [
      "1st Sessional Examination: ENT (7/5/2026)",
    ],
  },

  Dermatology: {
    color: "#784212",
    accent: "#e67e22",
    icon: "🩹",
    Theory: [
      "Dermatology (L-20, SDL-5) L-11: M14.3, DR 15.3 Pyoderma",
      "Dermatology (L-20, SDL-5) L-12: DR 10.3 DR 10.4 DR 10.9 STD 1",
      "Dermatology (L-20, SDL-5) L-13: DR 10.3 DR 10.4 DR 10.9 STD 1 (continued)",
      "Dermatology (L-20, SDL-5) L-14: DR 10.10 DR 10.11 STD 3",
      "Dermatology (L-20, SDL-5) L-15: DR 16.1 DR 16.2 Autoimmune connective tissue diseases",
      "Dermatology (L-20, SDL-5) L-16: DR 17.2 DR 17.3 Vitamin Deficiency disorders",
      "Dermatology (L-20, SDL-5) L-17: DR 9.1 DR 9.5 DR 9.6 Leprosy I",
      "Dermatology (L-20, SDL-5) L-18: DR 9.4 DR 9.7 Leprosy II",
      "Dermatology (L-20, SDL-5) L-19: DR 3.3 DR 4.2 Psoriasis, Lichen Planus",
      "Dermatology (L-20, SDL-5) L-20: DR 11.1-11.2 HIV",
    ],
    SGD: [
      "SGD-1: Vit A and Zinc deficiency (Dermatology 3 weeks) – 1",
      "SGD-2: HIV (Dermatology 3 weeks) – 2",
      "SGD-3: Autoimmune Connective tissue diseases (Dermatology 3 weeks) – 3",
    ],
  },

  Radiodiagnosis: {
    color: "#2c3e50",
    accent: "#95a5a6",
    icon: "🔬",
    Theory: [
      "RD 1.3 Enumerate indications for various radiological investigations, choose the most appropriate and cost effective method and interpret findings in common conditions pertaining to disorder of ENT (L-10, SDL-2) L-1",
      "RD 1.4 Enumerate indications for various radiological investigations, choose the most appropriate and cost effective method and interpret findings in common conditions pertaining to disorder of ENT (L-10, SDL-2) L-2",
      "RD 1.5 Enumerate indications for various radiological investigations, choose the most appropriate and cost effective method and interpret findings in common conditions pertaining to disorder in internal medicine (L-10, SDL-2) L-3",
      "RD 1.5 Enumerate indications – internal medicine (L-10, SDL-2) L-4",
      "RD 1.6 Enumerate indications for various common radiological investigations, choose the most appropriate and cost effective method and interpret findings in common conditions pertaining to disorders in surgery (L-10, SDL-2) L-4",
      "RD 1.7 Enumerate indications for various common radiological investigations – common malignancies (L-10, SDL-2) L-5 / L-6",
      "RD 1.8 Enumerate indications for various radiological investigations – common conditions pertaining to disorder in Pediatrics (L-10, SDL-2) L-5 / L-6",
      "SU 25.3 Describe the etiopathogenesis, clinical features, Investigations and principles of treatment of benign and malignant tumours of breast (L-10, SDL-2) L-7",
    ],
    SGD: [],
  },

  Orthopaedics: {
    color: "#154360",
    accent: "#3498db",
    icon: "🦴",
    Theory: [
      "OR 7.1, PA 33.4 – Paget's disease – Ortho 3",
      "OR 5.1 – Crystal arthropathies, hemophilic arthropathy – Unit 5",
      "OR 10.1, PA 33.3 – Benign bone tumors – Unit 5",
      "OR 4.1 Tuberculosis of the hip and knee – Unit 5",
      "OR 4.1 Tuberculosis of the spine – Unit 1",
      "OR 12.1 – CTEV and flat foot – Paed Ortho",
      "OR 10.1, PA 33.2 – Malignant bone tumors – Ortho 5",
    ],
    SGD: [
      "AETCOM Orthopaedics – 4.5 Case studies in ethics: The doctor industry relationship – Dr Madhav Pai (Ortho 1) and Dr Sakthi (Ortho 5)",
      "AETCOM Orthopaedics – 4.5 Anchoring lecture + Discussion and closure of case",
      "SDL Orthopaedics – 4: Extremity amputation – Ortho 5",
    ],
  },

  Paediatrics: {
    color: "#1e8449",
    accent: "#27ae60",
    icon: "👶",
    Theory: [
      "PE21.3 Approach to Proteinuria in children / Nephrotic syndrome (L-20, SDL-10) L-12",
      "PE21.1 Urinary tract Infection L-13",
      "PE29.4, PE29.16 Approach to hemolytic Anemias (L-20, SDL-10) L-14",
      "PE20.1, PE20.2 Normal neonate (L-20, SDL-10) L-15 / L-16",
      "PE21.2, PE21.4 AGN & other Glomerulonephritis (L-20, SDL-10) L-17 / L-18 / L-19",
      "PE31.5, PE31.8, PE31.10 Bronchial Asthma & Acute Severe Asthma (L-20, SDL-10) L-15",
      "PE20.11 LBW – neonate (L-20, SDL-10) L-18",
      "PE29.4, PE20.20 Congenital Anomalies in neonates (L-20, SDL-10) L-17",
      "PE20.20 Congenital Anomalies in neonates (L-20, SDL-10) L-17",
    ],
    SGD: [
      "Pediatrics (18 weeks) SGD-6: PE2.4, PE33.1, PE33.8 Short stature / hypothyroidism, Precocious and delayed puberty",
      "Pediatrics (18 weeks) SGD-7: PE21.5, PE21.6, PE21.17 Renal Failure in Children, Hypertension in Children",
      "Pediatrics (18 weeks) SGD-8: PE26.1, PE26.2, PE26.3, PE26.4, PE26.11 Hepatitis, acute / fulminant, chronic hepatitis / portal hypertension",
      "Pediatrics (18 weeks) SGD-9: PE29.8, PE29.9, PE21.7, SU29.8 Leukaemia, Lymphoma / Wilms tumor",
    ],
  },

  Psychiatry: {
    color: "#512e5f",
    accent: "#8e44ad",
    icon: "🧠",
    Theory: [
      "Psychiatry (L-25, SDL-5) L-1: History of Psychiatry and Biopsychosocial model PS 3.1, 3.6",
      "Psychiatry (L-25, SDL-5) L-2: Depression PS 6.1, 6.4, 6.6, 6.7",
      "Psychiatry (L-25, SDL-5) L-3: Psychotic disorders PS5.1, 5.3, 5.5, 5.6",
      "Psychiatry (L-25, SDL-5) L-4: Bipolar disorder PS 7.1, 7.4, 7.6, 7.7",
      "Psychiatry (L-25, SDL-5) L-5: Addiction disorders PS4.1, 4.4, 4.6, 4.7",
      "Psychiatry (L-25, SDL-5) L-6: Anxiety disorders I PS8.1, 8.4, 8.6, 8.7",
    ],
    SGD: [],
  },

  Respiratory_CT: {
    color: "#117a65",
    accent: "#1abc9c",
    icon: "🫁",
    Theory: [],
    SGD: [
      "Respiratory (4 weeks) SGD-1: CT1.15 Antituberculosis Regimen Prescription, CT1.1 National Tuberculosis Elimination Program",
      "Respiratory (4 weeks) SGD-1: CT1.15 Antituberculosis Regimen Prescription [repeated batch]",
    ],
  },
};

const completedKey = "topicTrackerCompleted_v1";

function loadCompleted() {
  try {
    const raw = localStorage.getItem(completedKey);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function App() {
  const [completed, setCompleted] = useState(() => loadCompleted());
  const [activeSubject, setActiveSubject] = useState("Medicine");
  const [activeTab, setActiveTab] = useState("Theory");
  const [search, setSearch] = useState("");

  const toggle = (subject, tab, idx) => {
  const key = `${subject}__${tab}__${idx}`;

  setCompleted((prev) => {
    const next = {
      ...prev,
      [key]: !prev[key],
    };

    localStorage.setItem(
      completedKey,
      JSON.stringify(next)
    );

    return next;
  });
};

  const isCompleted = (subject, tab, idx) => {
    return !!completed[`${subject}__${tab}__${idx}`];
  };

  const getProgress = (subject, tab) => {
    const items = subjects[subject][tab];
    const done = items.filter((_, i) => isCompleted(subject, tab, i)).length;
    return { done, total: items.length };
  };

  const getTotalProgress = () => {
    let done = 0, total = 0;
    Object.keys(subjects).forEach((s) => {
      ["Theory", "SGD"].forEach((t) => {
        const items = subjects[s][t];
        total += items.length;
        done += items.filter((_, i) => isCompleted(s, t, i)).length;
      });
    });
    return { done, total };
  };

  const filtered = (subject, tab) => {
    if (!search.trim()) return subjects[subject][tab];
    return subjects[subject][tab].filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  };

  const totalProg = getTotalProgress();
  const subjectList = Object.keys(subjects);
  const currentData = subjects[activeSubject];

  const tabs = ["Theory", "SGD"].filter((t) => currentData[t].length > 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c1a 0%, #1a1030 50%, #0d1a2e 100%)",
      fontFamily: "'Georgia', serif",
      color: "#e8e0f0",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 28px 16px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: "#9b86c8", textTransform: "uppercase", marginBottom: 4 }}>
                KMC Manipal · Batch 2022–23 · Mar–May 2026
              </div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: "bold", color: "#fff", letterSpacing: 0.5 }}>
                📚 Topic Study Tracker
              </h1>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 26, fontWeight: "bold", color: "#c39bd3" }}>
                {totalProg.done}/{totalProg.total}
              </div>
              <div style={{ fontSize: 11, color: "#9b86c8", letterSpacing: 1 }}>TOPICS COVERED</div>
              <div style={{
                height: 6, width: 160, background: "rgba(255,255,255,0.1)", borderRadius: 3, marginTop: 6,
              }}>
                <div style={{
                  height: "100%", borderRadius: 3,
                  width: `${totalProg.total ? (totalProg.done / totalProg.total) * 100 : 0}%`,
                  background: "linear-gradient(90deg, #8e44ad, #3498db)",
                  transition: "width 0.3s",
                  }} />
              </div>
            </div>
          </div>

          {/* Search */}
          <input
            placeholder="🔍  Search any topic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%", marginTop: 14, padding: "8px 14px",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8, color: "#e8e0f0", fontSize: 13,
              outline: "none", boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "20px 16px" }}>
        {/* Subject tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20,
        }}>
          {subjectList.map((s) => {
            const thProg = getProgress(s, "Theory");
            const sgProg = getProgress(s, "SGD");
            const tot = thProg.total + sgProg.total;
            const done = thProg.done + sgProg.done;
            const pct = tot ? Math.round((done / tot) * 100) : 0;
            const sub = subjects[s];
            const active = activeSubject === s;
            return (
              <button
                key={s}
                onClick={() => { setActiveSubject(s); setActiveTab(subjects[s].Theory.length ? "Theory" : "SGD"); }}
                style={{
                  padding: "8px 14px", borderRadius: 20,
                  border: active ? `2px solid ${sub.accent}` : "2px solid rgba(255,255,255,0.1)",
                  background: active ? `${sub.accent}22` : "rgba(255,255,255,0.04)",
                  color: active ? sub.accent : "#b0a8c8",
                  cursor: "pointer", fontSize: 13, fontFamily: "Georgia, serif",
                  display: "flex", alignItems: "center", gap: 6,
                  transition: "all 0.2s",
                }}
              >
                <span>{sub.icon}</span>
                <span>{s.replace(/_/g, " / ")}</span>
                <span style={{
                  background: active ? sub.accent : "rgba(255,255,255,0.12)",
                  color: active ? "#fff" : "#b0a8c8",
                  borderRadius: 10, padding: "1px 7px", fontSize: 11,
                }}>
                  {pct}%
                </span>
              </button>
            );
          })}
        </div>

        {/* Subject panel */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${currentData.accent}33`,
          borderRadius: 14,
          overflow: "hidden",
        }}>
          {/* Subject header */}
          <div style={{
            padding: "16px 20px",
            borderBottom: `1px solid ${currentData.accent}22`,
            background: `${currentData.color}22`,
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <span style={{ fontSize: 28 }}>{currentData.icon}</span>
            <div>
              <h2 style={{ margin: 0, fontSize: 18, color: "#fff" }}>
                {activeSubject.replace(/_/g, " / ")}
              </h2>
              <div style={{ fontSize: 12, color: currentData.accent, marginTop: 2 }}>
                Theory: {getProgress(activeSubject, "Theory").done}/{getProgress(activeSubject, "Theory").total} &nbsp;|&nbsp;
                SGD: {getProgress(activeSubject, "SGD").done}/{getProgress(activeSubject, "SGD").total}
              </div>
            </div>
          </div>

          {/* Theory / SGD toggle */}
          {tabs.length > 1 && (
            <div style={{ display: "flex", borderBottom: `1px solid ${currentData.accent}22` }}>
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  style={{
                    flex: 1, padding: "10px", border: "none",
                    background: activeTab === t ? `${currentData.accent}22` : "transparent",
                    color: activeTab === t ? currentData.accent : "#8a80a8",
                    cursor: "pointer", fontSize: 13, fontFamily: "Georgia, serif",
                    borderBottom: activeTab === t ? `2px solid ${currentData.accent}` : "2px solid transparent",
                    transition: "all 0.2s",
                  }}
                >
                  {t === "Theory" ? "📖 Theory / Lectures" : "💬 SGD / Skills"}
                </button>
              ))}
            </div>
          )}

          {/* Topic list */}
          <div style={{ padding: "12px 16px" }}>
            {filtered(activeSubject, activeTab).length === 0 ? (
              <div style={{ color: "#7a709a", textAlign: "center", padding: "30px 0", fontSize: 14 }}>
                {activeTab === "SGD" && subjects[activeSubject].SGD.length === 0
                  ? "No SGD topics listed for this subject."
                  : "No topics match your search."}
              </div>
            ) : (
              filtered(activeSubject, activeTab).map((item, i) => {
                // Find real index in full list
                const realIdx = subjects[activeSubject][activeTab].indexOf(item);
                const done = isCompleted(activeSubject, activeTab, realIdx);
                return (
                  <div
                    key={i}
                    onClick={() => toggle(activeSubject, activeTab, realIdx)}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      padding: "11px 12px", marginBottom: 4,
                      borderRadius: 8,
                      background: done ? `${currentData.accent}18` : "rgba(255,255,255,0.02)",
                      border: done ? `1px solid ${currentData.accent}44` : "1px solid rgba(255,255,255,0.05)",
                      cursor: "pointer",
                      transition: "all 0.18s",
                    }}
                  >
                    <div style={{
                      width: 20, height: 20, borderRadius: 5, flexShrink: 0,
                      border: done ? `2px solid ${currentData.accent}` : "2px solid rgba(255,255,255,0.2)",
                      background: done ? currentData.accent : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginTop: 2,
                      transition: "all 0.18s",
                    }}>
                      {done && <span style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>✓</span>}
                    </div>
                    <span style={{
                      fontSize: 13.5, lineHeight: 1.55,
                      color: done ? "#b0a8c8" : "#ddd6f0",
                      textDecoration: done ? "line-through" : "none",
                      opacity: done ? 0.7 : 1,
                    }}>
                      {item}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 24, fontSize: 11, color: "#6a6080", letterSpacing: 1 }}>
          Click any topic to mark as studied · Progress resets on page refresh
        </div>
      </div>
    </div>
  );
}

