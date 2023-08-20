// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface EditPatientDialogProps {
    open: boolean;
    onClose: () => void;
    patient: PatientRecord | null;
    onSave: (editedPatient: PatientRecord) => void;
  }