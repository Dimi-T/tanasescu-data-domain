
import { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from '../../components/ui/button';

interface DocumentViewerProps {
  title: string;
  description: string;
  pdfUrl: string;
  downloadUrl: string;
}

const DocumentViewer = ({ title, description, pdfUrl, downloadUrl }: DocumentViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold text-navy mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3 md:mb-0">{description}</p>
        </div>
        <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
          <a href={downloadUrl} download>
            <Download size={16} /> Download
          </a>
        </Button>
      </div>

      <div className="border rounded-md overflow-hidden">
        {isLoading && (
          <div className="flex items-center justify-center bg-secondary h-[500px] md:h-[700px]">
            <div className="flex flex-col items-center">
              <FileText size={48} className="text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Loading document...</p>
            </div>
          </div>
        )}
        
        <iframe 
          src={pdfUrl}
          className="w-full h-[500px] md:h-[700px]"
          title={title}
          onLoad={handleLoad}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    </div>
  );
};

export default DocumentViewer;
