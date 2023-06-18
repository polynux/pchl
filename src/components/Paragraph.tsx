import { css } from "../../styled-system/css";

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className={css({
    fontSize: "1.2rem",
  })}>{children}</p>;
}
