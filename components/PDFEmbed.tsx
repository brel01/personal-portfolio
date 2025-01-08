interface PDFEmbedProps {
    pdfUrl: string;
}

const PDFEmbed: React.FC<PDFEmbedProps> = ({ pdfUrl }) => (
    <div className="w-full h-[80vh] min-h-[600px] ">
        <embed src={pdfUrl} type="application/pdf" className="w-full h-full"/>
    </div>
);

export default PDFEmbed;
