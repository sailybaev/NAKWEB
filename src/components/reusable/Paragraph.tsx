interface ParagraphProps {
    text: string;
}

export function Paragraph({ text }: ParagraphProps) {
  return (
    <p style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        {text}
    </p>
  );
}