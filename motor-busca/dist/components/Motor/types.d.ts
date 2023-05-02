export type MotorFormValues = {
    data: Date;
    pessoas: number;
    localidade: string;
};
export type MotorProps = {
    onSubmit: (values: MotorFormValues) => void;
};
