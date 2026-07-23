export const navigationItems = [
  { label: 'Home', path: '/', iconKey: 'dashboard' },
  { label: 'Supported Credentials', path: '/supported-credentials', iconKey: 'verifyDocument' },
  { label: 'How It Works', path: '/how-it-works', iconKey: 'verifyCertificate' },
]

export const featureCards = [
  {
    id: 'feature-1',
    title: 'Upload & Verify Academic Document',
    description: 'Upload an academic document and verify its authenticity.',
    route: '/upload',
    iconKey: 'verifyDocument',
    accent: '#2563EB',
  },
  {
    id: 'feature-2',
    title: 'Upload & Verify Academic Certificate',
    description: 'Upload an academic certificate and verify its authenticity.',
    route: '/upload',
    iconKey: 'verifyCertificate',
    accent: '#06B6D4',
  },
  {
    id: 'feature-3',
    title: 'Verification History',
    description: 'Search, filter, and review previous verification records and reference numbers.',
    route: '/verification-history',
    iconKey: 'history',
    accent: '#14B8A6',
  },
]

export const academicDocuments = [
  {
    id: 'doc-1',
    title: 'Transcript of Records (TOR)',
    description: 'An official academic record containing the student\'s completed courses, grades, and academic standing issued by an educational institution.',
  },
  {
    id: 'doc-2',
    title: 'Diploma',
    description: 'An official document awarded upon successful completion of an academic degree or educational program.',
  },
]

export const academicCertificates = [
  {
    id: 'cert-1',
    title: 'Certificate of Completion',
    description: 'Issued to individuals who have successfully completed a course, training, or academic program.',
  },
  {
    id: 'cert-2',
    title: 'Certificate of Recognition',
    description: 'Issued in recognition of outstanding academic achievement, excellence, or contribution.',
  },
]

export const supportedFileTypes = ['PDF (.pdf)', 'PNG (.png)', 'JPG (.jpg)', 'JPEG (.jpeg)']

export const uploadRequirements = [
  { id: 'req-1', text: 'Maximum upload size: 10 MB' },
  { id: 'req-2', text: 'File must be clear and readable.' },
  { id: 'req-3', text: 'Uploaded credential should be complete.' },
  { id: 'req-4', text: 'Supported file formats only.' },
]

export const howItWorksSteps = [
  {
    id: 'step-1',
    title: 'Step 1 — Upload a Credential',
    description: 'Upload a supported academic document or certificate, such as a Transcript of Records (TOR), Diploma, Certificate of Completion, or Certificate of Recognition.',
  },
  {
    id: 'step-2',
    title: 'Step 2 — Generate a Secure Digital Fingerprint',
    description: 'The system generates a unique SHA-256 hash from the uploaded file. This digital fingerprint is used to verify the credential without exposing its contents.',
  },
  {
    id: 'step-3',
    title: 'Step 3 — Compare with Registered Record',
    description: 'The generated hash is compared with the registered blockchain verification record to determine whether the credential has remained unchanged.',
  },
  {
    id: 'step-4',
    title: 'Step 4 — View the Verification Result',
    description: 'The system displays one of the following verification results:\n- ✅ Verified — The credential is authentic and has not been modified.\n- ❌ Invalid — No matching verification record was found.\n- ⚠️ Tampered — The uploaded credential has been altered and does not match the registered record.',
  },
]

export const faqItems = [
  {
    id: 'faq-1',
    question: 'What credentials are supported?',
    answer: 'We support academic documents like Transcripts of Records (TOR) and Diplomas, as well as academic certificates like Certificates of Completion and Certificates of Recognition.',
  },
  {
    id: 'faq-2',
    question: 'What file formats can I upload?',
    answer: 'You can upload files in PDF, PNG, JPG, and JPEG formats.',
  },
  {
    id: 'faq-3',
    question: 'What does "Tampered" mean?',
    answer: 'It means the uploaded credential has been altered and does not match the registered blockchain record.',
  },
  {
    id: 'faq-4',
    question: 'Is my uploaded file stored permanently?',
    answer: 'No, your uploaded file is not stored permanently. We only store the cryptographic hash for verification purposes.',
  },
  {
    id: 'faq-5',
    question: 'How long does verification take?',
    answer: 'Verification is almost instantaneous once the file is uploaded and processed.',
  },
]

export const supportedDocumentFileTypes = ['PDF', 'PNG', 'JPG', 'DOCX']

export const supportedCertificateFileTypes = ['PDF', 'PNG', 'JPG']

export const verificationRecords = [
  {
    id: 'rec-1',
    fileName: 'Graduate Transcript 2026.pdf',
    fileType: 'Document',
    verifiedAt: '2026-07-23',
    status: 'Verified',
    transactionHash: '9a7c8e3f2d5b1a9c6d4e7b8a0f1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c',
  },
  {
    id: 'rec-2',
    fileName: 'Faculty Employment Contract.docx',
    fileType: 'Document',
    verifiedAt: '2026-07-22',
    status: 'Pending Registration',
    transactionHash: '3d5b1a9c6d4e7b8a0f1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0a1b2c3d',
  },
  {
    id: 'rec-3',
    fileName: 'Professional Board Certificate.pdf',
    fileType: 'Certificate',
    verifiedAt: '2026-07-22',
    status: 'Registered',
    transactionHash: '7b8a0f1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0a1b2c3d4e5f6a7b8c9d',
  },
  {
    id: 'rec-4',
    fileName: 'Scholarship Clearance Form.pdf',
    fileType: 'Document',
    verifiedAt: '2026-07-21',
    status: 'Tampered',
    transactionHash: '0f1a2b3c4d5e6f7a8b9c0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d',
  },
  {
    id: 'rec-5',
    fileName: 'Certificate of Good Standing.pdf',
    fileType: 'Certificate',
    verifiedAt: '2026-07-19',
    status: 'Registered',
    transactionHash: 'e0f1a2b3c4d5e6f7a8b9c0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1',
  },
]

export const historyFilters = ['All', 'Documents', 'Certificates']

export const historySortOptions = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
]
