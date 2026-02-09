const sections = [
  {
    id: "unlisted-companies",
    title: "Unlisted Companies",
    checklistItems: [
      {
        id: "cipc-doc",
        title:
          "CIPC/XDS document ⇒ For Companies legal name and Registration number",
      },
      {
        id: "company-resolution",
        title:
          "Company resolution/Mandate ⇒ Authority to Act (If more than one director)",
      },
      {
        id: "annexure-a",
        title: "Annexure A forms ⇒ Listed Directors on the CIPC document",
      },
      {
        id: "director-ids",
        title: "Director's ID copies ⇒ Directors Verification",
      },
    ],
  },
  {
    id: "close-corporation",
    title: "Close Corporation",
    checklistItems: [
      {
        id: "cc-cipc-doc",
        title:
          "CIPC/XDS document ⇒ For Companies legal name and Registration number",
      },
      {
        id: "cc-resolution",
        title: "Company resolution/Mandate ⇒ Authority to Act",
      },
      {
        id: "cc-annexure-a",
        title: "Annexure A forms ⇒ Beneficial Owners",
      },
      {
        id: "cc-director-ids",
        title: "Director's ID copies ⇒ Directors Verification",
      },
    ],
  },
  {
    id: "trusts",
    title: "Trusts",
    checklistItems: [
      {
        id: "trust-deed",
        title: "Trust deed ⇒ For Trusts legal name and Registration number",
      },
      {
        id: "loa",
        title:
          "Letter of Authority ⇒ For trusts legal name and Registration number",
      },
      {
        id: "trust-resolution",
        title: "Trust resolution ⇒ Authority to Act",
      },
      {
        id: "trust-annexure-a",
        title:
          "Annexure A forms ⇒ Beneficiaries, Trustees on the LOA and Resolution letter",
      },
      {
        id: "trust-ids",
        title: "Director's ID copies ⇒ Beneficiaries and Trustees Verification",
      },
    ],
  },
  {
    id: "stl-trusts",
    title: "STL Trusts",
    checklistItems: [
      {
        id: "stl-trust-deed",
        title: "Trust deed ⇒ For Trusts legal name and Registration number",
      },
      {
        id: "stl-loa",
        title:
          "Letter of Authority ⇒ For trusts legal name and Registration number",
      },
      {
        id: "stl-trust-resolution",
        title: "Trust resolution ⇒ Authority to Act (If needed)",
      },
      {
        id: "stl-trust-annexure",
        title:
          "Annexure A forms ⇒ Beneficiaries, Trustees on the LOA and Resolution letter",
      },
      {
        id: "stl-trust-ids",
        title: "Director's ID copies ⇒ Beneficiaries and Trustees Verification",
      },
      {
        id: "stl-cipc",
        title: "CIPC for STL",
      },
      {
        id: "stl-annexure",
        title: "Annexure A for STL",
      },
      {
        id: "stl-signatory",
        title: "Signatory List",
      },
      {
        id: "stl-rep-annexure",
        title: "Annexure A for STL representative",
      },
      {
        id: "stl-rep-id",
        title: "ID document for STL representative",
      },
      {
        id: "stl-bank-confirm",
        title:
          "Bank Confirmation letter (If the bank account was opened by STL for the legal entity)",
      },
    ],
  },
  {
    id: "melville-douglas",
    title: "Melville Douglas",
    checklistItems: [
      {
        id: "md-ind-ml-contact",
        title: "ML as the contact person",
      },
      {
        id: "md-ind-ml-id",
        title: "ML ID copy",
      },
      {
        id: "md-ind-client-id",
        title: "Clients ID copy",
      },
      {
        id: "md-ind-agreement",
        title: "Melville Douglas Portfolio Manager Agreement (Mandate)",
      },
      {
        id: "md-ind-banking",
        title:
          "Proof of banking (If MD opens the bank account for the investor, under their MD registration number in client's name)",
      },
      {
        id: "md-ind-signatory",
        title: "Melville Douglas Signatory List",
      },
    ],
  },
  {
    id: "unincorporated-entities",
    title: "Unincorporated Entities",
    checklistItems: [
      {
        id: "unincorp-constitution",
        title:
          "Constitution/Registration certificate ⇒ Containing, entity's name, Date of inception, Membership details, Control structure, purpose, objective & Signed",
      },
      {
        id: "unincorp-resolution",
        title: "Resolution letter",
      },
      {
        id: "unincorp-annexure",
        title: "Annexure A forms ⇒ Individuals stated on the legal document",
      },
      {
        id: "unincorp-ids",
        title: "ID copies",
      },
    ],
  },
  {
    id: "listed-companies",
    title: "Listed Companies",
    checklistItems: [
      {
        id: "listed-stock-exchange",
        title: "Stock exchange printout ⇒ Company registration",
      },
      {
        id: "listed-cipc",
        title:
          "CIPC/XDS document ⇒ For Companies legal name and Registration number",
      },
      {
        id: "listed-resolution",
        title:
          "Company resolution/Mandate ⇒ Authority to Act (If more than one director)",
      },
      {
        id: "listed-annexure",
        title: "Annexure A forms ⇒ Listed Directors on the CIPC document",
      },
      {
        id: "listed-ids",
        title: "Director's ID copies ⇒ Directors Verification",
      },
    ],
  },
  {
    id: "foreign-unlisted-companies",
    title: "Foreign Unlisted Companies",
    checklistItems: [
      {
        id: "foreign-incorporation",
        title:
          "Certificate of incorporation ⇒ For Companies legal name and Registration number",
      },
      {
        id: "foreign-resolution",
        title: "Company resolution/Mandate ⇒ Authority to Act",
      },
      {
        id: "foreign-annexure",
        title: "Annexure A forms ⇒ Beneficial Owners",
      },
      {
        id: "foreign-ids",
        title: "Director's ID copies ⇒ Directors Verification",
      },
    ],
  },
  {
    id: "will-testamentary",
    title: "Will/Testamentary",
    checklistItems: [
      {
        id: "will-testament",
        title:
          "Last Will/Testament ⇒ For Trusts legal name and Registration number",
      },
      {
        id: "will-loa",
        title:
          "Letter of Authority ⇒ For trusts legal name and Registration number",
      },
      {
        id: "will-resolution",
        title: "Will resolution ⇒ Authority to Act",
      },
      {
        id: "will-annexure",
        title:
          "Annexure A forms ⇒ Beneficiaries, Trustees on the LOA and Resolution letter",
      },
      {
        id: "will-ids",
        title:
          "Trustees & beneficiaries ID copies ⇒ Beneficiaries Verification",
      },
    ],
  },
  {
    id: "partnership",
    title: "Partnership",
    checklistItems: [
      {
        id: "partnership-agreement",
        title:
          "Partnership agreement ⇒ For Partnership legal name and Registration number",
      },
      {
        id: "partnership-resolution",
        title: "Company resolution ⇒ Authority to Act",
      },
      {
        id: "partnership-annexure",
        title: "Annexure A forms ⇒ Beneficial Owners",
      },
      {
        id: "partnership-ids",
        title: "Director's ID copies ⇒ Partners Verification",
      },
    ],
  },
  {
    id: "schools-tertiary",
    title: "Schools/Tertiary Institution",
    checklistItems: [
      {
        id: "private-school-cert",
        title:
          "Registration Certificate issued by the Provincial Department of Education",
      },
      {
        id: "public-school-confirm",
        title:
          "Confirmation of registration document issued by the Department of Education/ Official Gazette Notice or Letter of Establishment from the Provincial Department of Education/ Education Management Information System extract (Institution Registration Report",
      },
      {
        id: "public-tertiary-notice",
        title:
          "Establishment notice in the Government Gazette/ Institutional Charter or Statute Accreditation by the Council of Higher Education",
      },
      {
        id: "private-tertiary-cert",
        title:
          "Certificate of Registration issued by DHET/ Accreditation certificate from the Council of Higher Education (CHE)",
      },
      {
        id: "school-resolution",
        title: "Board Resolution signed by the board or senior",
      },
      {
        id: "school-annexure",
        title:
          "Annexure A forms ⇒ Individuals stated on the school letterhead/constitution or founding document",
      },
    ],
  },
  {
    id: "church",
    title: "Church",
    checklistItems: [
      {
        id: "church-registration",
        title:
          "Registration certificate or Founding document/ Constitutional document",
      },
      {
        id: "church-resolution",
        title: "Resolution Letter",
      },
      {
        id: "church-annexure",
        title:
          "Annexure A forms ⇒ Individuals stated on the constitutional documents",
      },
      {
        id: "church-ids",
        title: "ID copies",
      },
    ],
  },
  {
    id: "non-profit",
    title: "Non-Profit Organization",
    checklistItems: [
      {
        id: "npo-registration",
        title:
          "Registration certificate issued by the Non-Profit Organization Directorate",
      },
      {
        id: "npo-resolution",
        title: "Resolution letter",
      },
      {
        id: "npo-annexure",
        title:
          "Annexure A forms ⇒ Individuals stated on the resolution and Certificate",
      },
      {
        id: "npo-ids",
        title: "ID copies",
      },
    ],
  },
];

export default sections;
