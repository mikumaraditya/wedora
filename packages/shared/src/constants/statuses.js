export const EVENT_STATUS = Object.freeze({
  SCHEDULED: 'SCHEDULED',
  CANCELLED: 'CANCELLED',
});

export const INVITATION_STATUS = Object.freeze({
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  EXPIRED: 'EXPIRED',
});

export const GUEST_INVITATION_STATUS = Object.freeze({
  INVITED: 'INVITED',
  REVOKED: 'REVOKED',
});

export const CATEGORY_TYPES = Object.freeze({
  GUEST: 'GUEST',
  EXPENSE: 'EXPENSE',
  VENDOR: 'VENDOR',
});

export const CATEGORY_STATUS = Object.freeze({
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED',
});

export const TASK_STATUS = Object.freeze({
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
});

export const EXPENSE_STATUS = Object.freeze({
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
});

export const PAYMENT_STATUS = Object.freeze({
  ACTIVE: 'ACTIVE',
  VOIDED: 'VOIDED',
});

export const PAYMENT_METHODS = Object.freeze({
  CASH: 'CASH',
  UPI: 'UPI',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CARD: 'CARD',
  OTHER: 'OTHER',
});

export const VENDOR_STATUS = Object.freeze({
  SHORTLISTED: 'SHORTLISTED',
  CONTACTED: 'CONTACTED',
  FINALISED: 'FINALISED',
  COMPLETED: 'COMPLETED',
});

export const VENDOR_RECORD_STATUS = Object.freeze({
  ACTIVE: 'ACTIVE',
  REMOVED: 'REMOVED',
});

export const GALLERY_FILE_STATUS = Object.freeze({
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
});

export const MEDIA_TYPES = Object.freeze({
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO',
});

export const EMAIL_STATUS = Object.freeze({
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SENT: 'SENT',
  FAILED: 'FAILED',
});
