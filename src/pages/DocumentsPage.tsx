
import Section from '../components/shared/Section';
import DocumentViewer from '../components/shared/DocumentViewer';

const DocumentsPage = () => {
  const documents = [
    {
      title: 'Resume',
      description: 'My professional resume detailing work experience, education, and skills.',
      pdfUrl: 'https://docs.google.com/viewer?embedded=true&url=https://drive.google.com/uc?export=download&id=1rOIdghJzazzKQpQnEGaZ-qIizgYXC_wU',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1rOIdghJzazzKQpQnEGaZ-qIizgYXC_wU'
    },
    {
      title: 'Cover Letter',
      description: 'General cover letter for job applications.',
      pdfUrl: 'https://docs.google.com/viewer?embedded=true&url=https://drive.google.com/uc?export=download&id=1T_WXtYo0XpDh4wAoxc1WOWRQV_B9qNRC',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1T_WXtYo0XpDh4wAoxc1WOWRQV_B9qNRC'
    },
    {
      title: 'Reference Letter',
      description: 'Professional references and recommendations.',
      pdfUrl: 'https://docs.google.com/viewer?embedded=true&url=https://drive.google.com/uc?export=download&id=1D7DdOmGZ7BqONoeW119z68JL9RuAtS-O',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1D7DdOmGZ7BqONoeW119z68JL9RuAtS-O'
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
