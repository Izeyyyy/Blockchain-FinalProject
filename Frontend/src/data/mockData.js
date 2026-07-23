export const searchScopes = [
  { value: 'documents', label: 'Documents' },
  { value: 'certificates', label: 'Certificates' },
  { value: 'history', label: 'Verification history' },
  { value: 'users', label: 'Users' },
]

export const navigationItems = [
  { label: 'Dashboard', path: '/', iconKey: 'dashboard' },
  { label: 'Verify Document', path: '/verify-document', iconKey: 'verify' },
  { label: 'Upload Certificate', path: '/upload-certificate', iconKey: 'upload' },
  { label: 'Verification History', path: '/verification-history', iconKey: 'history' },
  { label: 'Analytics', path: '/analytics', iconKey: 'analytics' },
]

export const userMenuItems = [
  { label: 'Profile', path: '/profile', iconKey: 'profile' },
  { label: 'Settings', path: '/settings', iconKey: 'settings' },
]

export const userProfile = {
  id: 'USR-2048',
  name: 'Ross Mikhail',
  role: 'Integrity Officer',
  organization: 'National Academic Credential Office',
  email: 'ross.mikhail@example.com',
  phoneNumber: '+1 (555) 018-2048',
  officeLocation: 'Verification Operations Center',
}

export const dashboardStatistics = [
  {
    id: 'stat-1',
    label: 'Verified Today',
    value: '248',
    trend: '+12.4%',
    description: 'Successful verifications processed in the last 24 hours',
    iconKey: 'badge',
  },
  {
    id: 'stat-2',
    label: 'Pending Review',
    value: '37',
    trend: '-4.1%',
    description: 'Records waiting for manual review or supporting files',
    iconKey: 'clock',
  },
  {
    id: 'stat-3',
    label: 'Certificates Uploaded',
    value: '94',
    trend: '+8.7%',
    description: 'New certificate submissions received this week',
    iconKey: 'upload',
  },
  {
    id: 'stat-4',
    label: 'Integrity Score',
    value: '98.2%',
    trend: '+1.1%',
    description: 'Overall verification confidence across active records',
    iconKey: 'shield',
  },
]

export const featureCards = [
  {
    id: 'feature-1',
    title: 'Verify Document',
    description: 'Validate document authenticity and inspect integrity results instantly.',
    route: '/verify-document',
    iconKey: 'verify',
    accent: '#2563EB',
  },
  {
    id: 'feature-2',
    title: 'Upload Certificate',
    description: 'Submit certificates for future verification and traceable record keeping.',
    route: '/upload-certificate',
    iconKey: 'upload',
    accent: '#06B6D4',
  },
  {
    id: 'feature-3',
    title: 'Generate QR Code',
    description: 'Prepare scannable verification references for secure document sharing.',
    route: '/upload-certificate',
    iconKey: 'qr',
    accent: '#14B8A6',
  },
  {
    id: 'feature-4',
    title: 'Verification History',
    description: 'Review past verification activity with clear status tracking and metadata.',
    route: '/verification-history',
    iconKey: 'history',
    accent: '#2563EB',
  },
  {
    id: 'feature-5',
    title: 'Analytics',
    description: 'Monitor performance trends, usage metrics, and verification throughput.',
    route: '/analytics',
    iconKey: 'analytics',
    accent: '#06B6D4',
  },
  {
    id: 'feature-6',
    title: 'Account Settings',
    description: 'Manage account preferences, notifications, and portal configuration.',
    route: '/settings',
    iconKey: 'settings',
    accent: '#14B8A6',
  },
]

export const recentVerifications = [
  {
    id: 'ver-1',
    documentName: 'Graduate Transcript 2026',
    date: '2026-07-23',
    status: 'Verified',
    reference: 'DOC-2026-1472',
  },
  {
    id: 'ver-2',
    documentName: 'Faculty Employment Contract',
    date: '2026-07-22',
    status: 'Pending',
    reference: 'DOC-2026-1463',
  },
  {
    id: 'ver-3',
    documentName: 'Professional Board Certificate',
    date: '2026-07-22',
    status: 'Rejected',
    reference: 'CERT-2026-3219',
  },
  {
    id: 'ver-4',
    documentName: 'Scholarship Clearance Form',
    date: '2026-07-21',
    status: 'Expired',
    reference: 'DOC-2026-1451',
  },
]

export const verificationHistory = [
  ...recentVerifications,
  {
    id: 'ver-5',
    documentName: 'Diploma Revalidation Record',
    date: '2026-07-20',
    status: 'Verified',
    reference: 'DOC-2026-1438',
  },
  {
    id: 'ver-6',
    documentName: 'Accreditation Approval Letter',
    date: '2026-07-20',
    status: 'Pending',
    reference: 'DOC-2026-1435',
  },
  {
    id: 'ver-7',
    documentName: 'Certificate of Good Standing',
    date: '2026-07-19',
    status: 'Verified',
    reference: 'CERT-2026-3194',
  },
]

export const knowledgeArticles = [
  {
    id: 'article-1',
    title: 'How document verification works',
    description: 'Understand how records are checked against trusted sources and reference identifiers.',
    category: 'Verification Basics',
  },
  {
    id: 'article-2',
    title: 'How QR verification works',
    description: 'Learn how scannable codes accelerate validation for distributed certificates.',
    category: 'QR Validation',
  },
  {
    id: 'article-3',
    title: 'Uploading certificates',
    description: 'Review the recommended upload process and document preparation checklist.',
    category: 'Submission Guide',
  },
  {
    id: 'article-4',
    title: 'Supported file types',
    description: 'See which file formats are expected in upcoming upload and verification workflows.',
    category: 'File Requirements',
  },
  {
    id: 'article-5',
    title: 'Frequently Asked Questions',
    description: 'Find quick answers about statuses, turnaround time, and verification outcomes.',
    category: 'Help Center',
  },
]

export const supportInformation = {
  email: 'support@integrity-checker.gov',
  phoneNumber: '+1 (555) 100-4200',
  officeHours: 'Monday to Friday, 8:00 AM - 6:00 PM',
  actions: [
    { id: 'support-1', label: 'Live Chat', variant: 'contained' },
    { id: 'support-2', label: 'Report an Issue', variant: 'outlined' },
  ],
}

export const verifyFormFields = [
  { id: 'documentId', label: 'Document ID', placeholder: 'Enter document ID or reference number' },
  { id: 'issuer', label: 'Issuing Institution', placeholder: 'Enter organization or issuer name' },
]

export const verificationGuidelines = [
  'Use a unique document reference, certificate number, or upload a supporting file later.',
  'The verification workflow is prepared for Spring Boot API integration through centralized services.',
  'Status results will support verified, pending, rejected, and expired outcomes.',
]

export const uploadChecklist = [
  'Accepted placeholder formats: PDF, PNG, JPG, DOCX',
  'Add the certificate title and owner details before upload',
  'Future uploads will be routed through POST /api/upload',
]

export const analyticsSeries = [
  { id: 'trend-1', label: 'Mon', value: 42 },
  { id: 'trend-2', label: 'Tue', value: 61 },
  { id: 'trend-3', label: 'Wed', value: 58 },
  { id: 'trend-4', label: 'Thu', value: 76 },
  { id: 'trend-5', label: 'Fri', value: 84 },
  { id: 'trend-6', label: 'Sat', value: 55 },
  { id: 'trend-7', label: 'Sun', value: 68 },
]

export const analyticsSummaries = [
  {
    id: 'summary-1',
    title: 'Peak Verification Window',
    description: 'Most requests arrive between 10:00 AM and 2:00 PM across institutional users.',
  },
  {
    id: 'summary-2',
    title: 'Upload Quality Trend',
    description: 'Rejected submissions declined as supported file guidance improved.',
  },
]

export const profileSections = [
  { id: 'profile-1', label: 'Role', value: userProfile.role },
  { id: 'profile-2', label: 'Organization', value: userProfile.organization },
  { id: 'profile-3', label: 'Email', value: userProfile.email },
  { id: 'profile-4', label: 'Phone', value: userProfile.phoneNumber },
  { id: 'profile-5', label: 'Office', value: userProfile.officeLocation },
]

export const settingsSections = [
  {
    id: 'setting-1',
    title: 'Notifications',
    description: 'Receive alerts for verification status changes and system notices.',
    enabled: true,
  },
  {
    id: 'setting-2',
    title: 'Weekly Reports',
    description: 'Get a scheduled summary of verification activity and operational metrics.',
    enabled: true,
  },
  {
    id: 'setting-3',
    title: 'Compact Dashboard',
    description: 'Reduce spacing density for high-volume monitoring workstations.',
    enabled: false,
  },
]

export const documents = verificationHistory.map((item) => ({
  id: item.reference,
  name: item.documentName,
  type: item.reference.startsWith('CERT') ? 'Certificate' : 'Document',
  uploadedAt: item.date,
  status: item.status,
}))

export const certificates = documents.filter((item) => item.type === 'Certificate')

export const dashboardResponse = {
  statistics: dashboardStatistics,
  recentVerifications,
  knowledgeArticles,
  supportInformation,
  userProfile,
  featureCards,
  searchScopes,
}

export const analyticsResponse = {
  statistics: dashboardStatistics,
  trendSeries: analyticsSeries,
  summaries: analyticsSummaries,
}
