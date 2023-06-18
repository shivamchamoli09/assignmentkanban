import { ReactNode } from "react";
import { Container } from "./Container";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Dnd({ children }: { children?: ReactNode }) {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* <Container /> */}
      {children}
    </DndProvider>
  );
}
