export const navigationItems = [
  { label: 'Dashboard', path: '/', iconKey: 'dashboard' },
  { label: 'Verify Document', path: '/verify-document', iconKey: 'verifyDocument' },
  { label: 'Verify Certificate', path: '/verify-certificate', iconKey: 'verifyCertificate' },
  { label: 'Verification History', path: '/verification-history', iconKey: 'history' },
]

export const featureCards = [
  {
    id: 'feature-1',
    title: 'Upload & Verify Document',
    description: 'Upload a document as a guest and check authenticity and integrity status.',
    route: '/verify-document',
    iconKey: 'verifyDocument',
    accent: '#2563EB',
  },
  {
    id: 'feature-2',
    title: 'Upload & Verify Certificate',
    description: 'Upload a certificate as a guest and validate authenticity with a clear result summary.',
    route: '/verify-certificate',
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

export const supportedDocumentFileTypes = ['PDF', 'PNG', 'JPG', 'DOCX']

export const supportedCertificateFileTypes = ['PDF', 'PNG', 'JPG']

export const verificationRecords = [
  {
    id: 'rec-1',
    fileName: 'Graduate Transcript 2026.pdf',
    fileType: 'Document',
    verifiedAt: '2026-07-23',
    status: 'Verified',
    referenceId: 'DOC-2026-1472',
  },
  {
    id: 'rec-2',
    fileName: 'Faculty Employment Contract.docx',
    fileType: 'Document',
    verifiedAt: '2026-07-22',
    status: 'Pending',
    referenceId: 'DOC-2026-1463',
  },
  {
    id: 'rec-3',
    fileName: 'Professional Board Certificate.pdf',
    fileType: 'Certificate',
    verifiedAt: '2026-07-22',
    status: 'Rejected',
    referenceId: 'CERT-2026-3219',
  },
  {
    id: 'rec-4',
    fileName: 'Scholarship Clearance Form.pdf',
    fileType: 'Document',
    verifiedAt: '2026-07-21',
    status: 'Expired',
    referenceId: 'DOC-2026-1451',
  },
  {
    id: 'rec-5',
    fileName: 'Certificate of Good Standing.pdf',
    fileType: 'Certificate',
    verifiedAt: '2026-07-19',
    status: 'Verified',
    referenceId: 'CERT-2026-3194',
  },
]

export const historyFilters = ['All', 'Documents', 'Certificates']

export const historySortOptions = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
]
