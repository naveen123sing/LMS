export interface Course {
    courseid: number;
    coursecode: string;
    coursename: string;
    coursedesc: string;
    createdby: string | null;
    createdon: Date | null;
    updatedby: string | null;
    updatedon: Date | null;
    archived: boolean | null;
}