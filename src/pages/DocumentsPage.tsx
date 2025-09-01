import Section from '../components/shared/Section';
import DocumentViewer from '../components/shared/DocumentViewer';

const DocumentsPage = () => {
  const documents = [
    {
      title: 'Resume',
      description: 'My professional resume detailing work experience, education, and skills.',
      pdfUrl: 'https://drive.google.com/file/d/1pk6hdFQ29T0h-ObAohL04xmQGl8ulVpq/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1pk6hdFQ29T0h-ObAohL04xmQGl8ulVpq'
    },
    {
      title: 'Cover Letter',
      description: 'General cover letter for job applications.',
      pdfUrl: 'https://drive.google.com/file/d/1gtvPc2hcsWKrajYHkCAV4Xo4AM75KW3C/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1gtvPc2hcsWKrajYHkCAV4Xo4AM75KW3C'
    },
    {
      title: 'Reference Letter',
      description: 'Professional references and recommendations.',
      pdfUrl: 'https://drive.google.com/file/d/1hCdSfhe8hiWDsd5uHq-cJeE1Hs2_gPAX/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1hCdSfhe8hiWDsd5uHq-cJeE1Hs2_gPAX'
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
