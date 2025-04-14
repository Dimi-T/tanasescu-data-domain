
import Section from '../components/shared/Section';
import DocumentViewer from '../components/shared/DocumentViewer';

const DocumentsPage = () => {
  // Replace these URLs with actual Google Drive PDF URLs
  const documents = [
    {
      title: 'Resume',
      description: 'My professional resume detailing work experience, education, and skills.',
      pdfUrl: 'https://docs.google.com/viewer?embedded=true&url=https://arxiv.org/pdf/2212.08073.pdf',
      downloadUrl: 'https://arxiv.org/pdf/2212.08073.pdf'
    },
    {
      title: 'Cover Letter',
      description: 'General cover letter for job applications.',
      pdfUrl: 'https://docs.google.com/viewer?embedded=true&url=https://arxiv.org/pdf/2203.15556.pdf',
      downloadUrl: 'https://arxiv.org/pdf/2203.15556.pdf'
    },
    {
      title: 'Reference Letter',
      description: 'Professional references and recommendations.',
      pdfUrl: 'https://docs.google.com/viewer?embedded=true&url=https://arxiv.org/pdf/1706.03762.pdf',
      downloadUrl: 'https://arxiv.org/pdf/1706.03762.pdf'
    },
  ];

  return (
    <Section className="pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-2 text-center">Documents</h1>
        <p className="text-muted-foreground text-center mb-12">View and download my professional documents</p>
        
        <div className="space-y-8 animate-on-scroll">
          {documents.map((doc) => (
            <DocumentViewer
              key={doc.title}
              title={doc.title}
              description={doc.description}
              pdfUrl={doc.pdfUrl}
              downloadUrl={doc.downloadUrl}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default DocumentsPage;
