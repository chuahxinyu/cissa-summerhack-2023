import { jsPDF } from "jspdf";
import { IGenerateTemplateProps } from "./types";

export const generateTemplate2 = ({resumeDataCopy, setBlobUrl} : IGenerateTemplateProps) => {
    const doc = new jsPDF();
    const LEFT_MARGIN = 50;
    const TOP_MARGIN = 50;
    const RIGHT_MARGIN = 50;

    doc.text(['string1', 'string2', 'string3'], 10, 10);
    
    return doc;
}

