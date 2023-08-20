// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface DeletePatientDialogProps {
    open: boolean;
    onClose: () => void;
    onDelete: (patientId: number) => void;
    patientId: number;
  }