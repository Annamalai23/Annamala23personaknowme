import { Figure } from "./Figure";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

/** Article image — same layout as Figure, used in MDX body content. */
export function Image(props: Props) {
  return <Figure {...props} />;
}
