type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export function Figure({ src, alt, caption }: Props) {
  return (
    <figure className="my-6">
      <img src={src} alt={alt} className="rounded-lg border border-border w-full" />
      {caption && (
        <figcaption className="mt-2 font-mono text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
