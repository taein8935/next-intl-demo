import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function GlobalLayout({ children }: Props) {
  return children;
}
