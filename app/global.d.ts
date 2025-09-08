declare namespace JSX {
  interface IntrinsicElements {
    "df-messenger": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "agent-id"?: string;
      "chat-title"?: string;
      "language-code"?: string;
      "intent"?: string;
      "minimized"?: string;
    };
    "df-messenger-toggle": any;
  }
}
