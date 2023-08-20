// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AddPatientDialogProps {
    open: boolean;
    onClose: () => void;
    onAdd: (newPatient: PatientRecord) => void;
  }