export interface Batch {
    batchid: number;
    batchcode: string;
    batchname: string;
    batchdesc: string;
    createdby: number;
    createdon: Date | null;
    updatedby: number;
    updatedon: Date | null;
    archived: string;
  }